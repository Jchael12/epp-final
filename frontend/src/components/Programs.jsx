import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const ProgramCard = ({ _id, title, image_url, description }) => {
  const maxDescriptionLines = 4; // Set the maximum number of lines for the description
  const maxTitleFontSize = 24; // Maximum font size for the title (pixels)
  const minTitleFontSize = 18; // Minimum font size for the title (pixels)

  // Calculate the font size based on the length of the title
  const calculateFontSize = () => {
    const titleLength = title.length;
    const baseFontSize = 20; // Base font size for the title (pixels)

    // Adjust the font size based on the title length
    const calculatedSize = baseFontSize - titleLength * 0.5;

    // Ensure the font size stays within the specified range
    return Math.max(
      Math.min(calculatedSize, maxTitleFontSize),
      minTitleFontSize,
    );
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-red-900"
    >
      <Link to={{ pathname: `/programs/${_id}` }} className="block">
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "75%",
          }}
        >
          <img
            src={image_url}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-t"
          />
        </div>
        <div className="px-6 py-4">
          <div
            className="font-bold mb-2 overflow-hidden text-amber-300"
            style={{
              fontSize: `${calculateFontSize()}px`,
              height: "2.5em",
              lineHeight: "1.25em",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Maximum 2 lines for the title
              maxHeight: "2.5em",
              overflow: "hidden", // Add this line for better compatibility
            }}
          >
            {title}
          </div>
          <p
            className="text-white text-base overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: maxDescriptionLines,
              maxHeight: `${maxDescriptionLines * 1.5}em`,
              overflow: "hidden", // Add this line for better compatibility
            }}
          >
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

function Programs() {
  const [programData, setProgramData] = useState([]);

  useEffect(() => {
    // Function to fetch program data from the database
    const fetchPrograms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/all-content"); // Adjust the API endpoint based on your backend routes
        setProgramData(response.data);
      } catch (error) {
        console.error("Error fetching program data:", error);
      }
    };

    // Call the fetchPrograms function
    fetchPrograms();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <div className="flex items-center justify-center mt-28 overflow-hidden">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-24 z-10">
        {programData.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </div>
  );
}

export default Programs;
