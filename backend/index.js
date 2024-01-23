const express = require("express");
const cors = require("cors");
const cloudinary = require("cloudinary");
const multer = require("multer");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

const corsOptions = {
  origin: "*",
  credentials: true,
};

//cloudinary configs
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//middleware
app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Cache-control", "no-store");
  next();
});

app.get("/", (req, res) => {
  res.send("App is now working!");
});

//database connection : MongoDB
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //crate a database collection
    const dataCollections = client.db("Contents").collection("items");

    // multer setup
    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage });

    // insert a person info to the database: via post method
    app.post("/upload-info", upload.single("image"), async (req, res) => {
      try {
        const data = req.body;

        if (req.file) {
          // Convert buffer to Base64 string
          const imageBuffer = req.file.buffer.toString("base64");

          // Ensure unique public_id by using result.insertedId
          const public_id = `${data._id || Date.now()}-${req.file.originalname
            .replace(/\s+/g, "_")
            .toLowerCase()}`;

          const imageResult = await cloudinary.uploader.upload(
            "data:image/png;base64," + imageBuffer,
            {
              folder: "images",
              public_id: public_id,
            },
          );

          console.log("Image Result: ", imageResult);

          if (imageResult.secure_url) {
            // Add Cloudinary image URL to the data in MongoDB
            data.image_url = imageResult.secure_url;
          } else {
            // Handle the case where Cloudinary upload failed
            console.error("Cloudinary upload failed");
            return res.status(500).json({ error: "Cloudinary Upload Failed" });
          }
        }

        const result = await dataCollections.insertOne(data);
        res.json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    //update data info : via patch or update method
    app.patch("/item/:id", upload.single("image"), async (req, res) => {
      try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
          return res.status(400).json({ error: "Invalid ObjectId" });
        }

        const updateItemInfo = req.body; // directly use req.body as an object

        const filter = { _id: new ObjectId(id) };
        const updateDoc = { $set: updateItemInfo };

        //update the image if a new one is provided
        if (req.file) {
          const imageBuffer = req.file.buffer.toString("base64");
          const public_id = `${id}-${req.file.originalname.replace(
            /\s+/g,
            "_",
          )}`;

          const imageResult = await cloudinary.uploader.upload(
            "data:image/png;base64," + imageBuffer,
            {
              folder: "images",
              public_id: public_id,
            },
          );

          if (imageResult.secure_url) {
            updateDoc.$set.image_url = imageResult.secure_url;
          } else {
            console.error("Cloudinary upload failed..");
            return res.status(500).json({ error: "Cloudinary Upload Failed" });
          }
        }
        const result = await dataCollections.updateOne(filter, updateDoc);
        res.json(result);
      } catch (error) {
        console.error("Error updating contents: ", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // get all contents from the database: via get method
    app.get("/all-content", async (req, res) => {
      const items = dataCollections.find();
      const result = await items.toArray();
      res.send(result);
    });

    //get one data from the database: via get method
    app.get("/item/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await dataCollections.findOne(filter);
      if (result) {
        res.send(result);
      } else {
        res.status(404).send({ message: "Item Not Found!" });
      }
    });

    // delete an item info: delete method
    app.delete("/item/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await dataCollections.findOneAndDelete(filter);

      // Delete image from Cloudinary if it exists
      if (result.value && result.value.image) {
        // Extract public_id from the Cloudinary URL
        const public_id = result.value.image.public_id;

        // Delete image from Cloudinary
        await cloudinary.uploader.destroy(public_id);
      }

      res.send(result);
    });

    //send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
