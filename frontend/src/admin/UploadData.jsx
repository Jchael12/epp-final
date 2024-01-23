import { useState } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const UploadData = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;

    // Create a FormData object to handle file upload
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    console.log("Form Data: ", formData);

    // Send data to the server
    fetch("http://localhost:5000/upload-info", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Data has been uploaded successfully!");
        event.target.reset();
        setImage(null);
      })
      .catch((error) => {
        console.error("Error uploading contents: ", error);
      });
  };

  return (
    <div className="bg-white w-full h-screen p-10 flex flex-col items-center justify-center">
      <h2 className="mb-8 text-3xl font-bold">Upload Content</h2>
      <form
        className="flex md:w-[900px] py-5 rounded-md flex-col flex-wrap gap-4"
        onSubmit={handleSubmit}
      >
        {/* {first row} */}
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label
              htmlFor="title"
              value="Title"
              className="text-red-900 font-semibold text-xl"
            />
          </div>
          <TextInput
            id="title"
            autoComplete="off"
            type="text"
            name="title"
            placeholder="Title here"
            required
          />
        </div>
        {/* {second row} */}
        {/* {description} */}
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label
              htmlFor="description"
              value="Description"
              className="text-red-900 font-semibold text-xl"
            />
          </div>
          <Textarea
            id="description"
            type="text"
            name="description"
            placeholder="Write description here..."
            className="w-full "
            autoComplete="off"
            rows={6}
            required
          />
        </div>
        {/* {image upload} */}
        <div className="lg:w-1/2 rounded-md">
          <div className="mb-2 block">
            <Label
              htmlFor="image"
              value="Image"
              className="text-red-900 font-semibold text-xl"
            />
          </div>
          <input
            id="image"
            type="file"
            accept="image/*"
            className="bg-amber-50"
            onChange={handleImageChange}
            required
          />
        </div>
        <Button
          type="submit"
          className="mt-5 w-40 bg-red-800 enabled:hover:bg-red-700"
        >
          Upload Data
        </Button>
      </form>
    </div>
  );
};

export default UploadData;
