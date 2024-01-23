import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CardDetails = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log("ID:", id);
  const [cardDetails, setCardDetails] = useState({
    title: "",
    description: "",
    image_url: "",
  });

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/item/${id}`);
        console.log("Response:", response.data);
        setCardDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching card details:", error);
      }
    };

    fetchCardDetails();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center mt-28">
            <section>
              <div className="bg-red-900 text-justify flex flex-col items-center justify-center mt-5 mx-5 text-white rounded-md border-t-2 border-amber-300">
                <h1 className="text-xl text-center text-amber-300 my-2 bg-red-900 p-2 w-full">
                  {cardDetails.title}
                </h1>
              </div>
              <img
                className="w-[500px] mt-8 rounded-md mx-auto"
                src={cardDetails.image_url}
                alt={cardDetails.title}
              />
              <div className="bg-red-900 text-justify flex flex-col items-center justify-center mt-5 p-2 mb-2 mx-5 text-white rounded-md border-t-2 border-amber-300">
                <p className="p-10 break-all">{cardDetails.description}</p>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default CardDetails;
