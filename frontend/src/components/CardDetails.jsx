import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../contacts/AuthProvider";

const CardDetails = () => {
  const [loading, setLoading] = useState(true);
  const [clientLoggedIn, setClientLoggedIn] = useState(false);
  const { user } = useContext(AuthContext);
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

  useEffect(() => {
    if (user) {
      if (user.email === "banaga.rendell.eccbscs@gmail.com") {
        setClientLoggedIn(false);
      } else {
        setClientLoggedIn(true);
      }
    }
  }, [user]);

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
              {clientLoggedIn && (
                <div className="flex items-center justify-center">
                  <div className="m-5 text-white bg-red-900 w-max p-2 rounded-md">
                    <h1 className="text-amber-300">
                      Evaluate Program:
                      <a
                        href="https://forms.gle/NaWZ5qiVJiMeMzt17"
                        className="text-white underline underline-offset-4 hover:text-amber-300 ml-2 p-1 "
                      >
                        Form link
                      </a>
                    </h1>
                  </div>
                </div>
              )}
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default CardDetails;
