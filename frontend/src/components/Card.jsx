const Card = ({ imageUrl, title, description }) => {
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
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-red-900">
      <div style={{ position: "relative", width: "100%", paddingTop: "75%" }}>
        <img
          src={imageUrl}
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
    </div>
  );
};

export default Card;
