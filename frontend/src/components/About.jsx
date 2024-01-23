import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/shapeStyle.css";

const About = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center p-10 overflow-hidden justify-between text-white md:bg-red-900/90">
      <div className="md:p-5 p-10 w-screen md:w-1/2 lg:w-1/2 bg-red-800 rounded-md border-t-2 border-amber-300">
        <h1 className="text-2xl text-center mb-2 text-amber-300">
          Earist Cavite Campus
        </h1>
        <p className="text-center">
          Education at EARIST extends beyond the classroom. We are more than
          simply a school; we are a thriving institution committed to promoting
          holistic development, inspiring curiosity, and equipping the next
          generation of leaders.
        </p>
      </div>
      <div className=" w-screen md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center gap-3 mt-20 md:mt-0 rounded-md p-10 bg-red-800 border-t-2 border-amber-300">
        <h2 className="text-lg text-amber-300">Our Socials</h2>
        <div className="flex gap-8 ">
          <Link
            to="https://www.facebook.com/EARISTOfficial"
            className="hover:text-amber-300 hover:scale-125"
          >
            <FaFacebook size={25} className="icon" />
          </Link>
          <Link
            to="https://www.instagram.com/earist_ejfatss/"
            className="hover:text-amber-300 hover:scale-125"
          >
            <FaInstagram size={25} className="icon" />
          </Link>
          <Link to="/" className="hover:text-amber-300 hover:scale-125">
            <FaTwitter size={25} className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
