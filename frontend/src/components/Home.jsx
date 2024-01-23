import "../styles/shapeStyle.css";
import About from "./About";
import { motion } from "framer-motion";

//importing images
import image from "../assets/update_one.jpeg";
import "../styles/shapeStyle.css";
import Carousel from "../contents/Carousel";
import TimeLine from "./TimeLine";

const Home = () => {
  return (
    <div className="overflow-hidden mt-28">
      <div className="bg-red-900/90 p-4 m-10 text-center border-t-2 border-amber-300 rounded-md">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="md:font-bold md:text-2xl text-3xl text-amber-300"
        >
          Earist Cavite Extension Programs of Computer Science and Information
          Technology
        </motion.h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around gap-4 px-4 w-full">
        <div className="flex flex-col items-center justify-between text-justify h-full md:w-[500px] w-screen md:mt-10 mt-20 md:p-6 p-12 bg-red-800/80 md:bg-red-900/80 rounded-md border-t-2 border-amber-300">
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-3xl mb-2 text-amber-300"
          >
            Mandate
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="md:text-lg text-md md:text-center text-start text-white"
          >
            The primary purpose of the institute is to provide professional,
            scientific, technological and vocational instruction and training in
            trades, business, arts. sciences and technology and other specified
            thereof in section 2, R.A 6595 and section 6, P.D 1524, and for
            special purposes promote research, advance studies and progressive
            leadership in the stated field of study. In pursuance of these
            objectives, the sanctity of the institute shall be duly respected
            and its academic freedom shall be duly enjoined.(Section 8 and 2,
            Article XIV, Constitution of the Philippines).
          </motion.p>
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            ease: [0, 0.71, 0.2, 1.01],
            duration: 1.5,
            delay: 1,
          }}
          src={image}
          className="rounded-md w-[650px]"
        />
      </div>
      {/* {divider} */}
      <div className="flex flex-col md:flex-row mx-10 gap-10 items-center justify-around my-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="flex items-center justify-between gap-20 w-screen md:w-1/2 lg:w-11/12 h-8/12 md:p-3 p-5 text-white text-center rounded-md bg-red-900/80 border-t-2 border-amber-300 z-10"
        >
          <div className="mx-5">
            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-3xl mb-2 text-amber-300"
            >
              Mission
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-md text-start"
            >
              Turn out vocationally, technically, technologically, and
              scientifically trained graduates who will be economically
              productive, self-sufficient, effective, responsible and discipline
              citizen of the Philippines.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="flex items-center justify-between gap-20 w-screen md:w-1/2 lg:w-11/12 h-8/12 md:p-3 p-5 text-white text-center rounded-md bg-red-900/80 border-t-2 border-amber-300 z-10"
        >
          <div className="mx-5">
            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="mb-5 text-3xl text-amber-300"
            >
              Vision
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-xl text-start"
            >
              EARIST is envisioned to be a center of excellence in trades,
              business, arts, science and technology education.
            </motion.p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex items-center justify-between w-screen md:w-1/2 lg:w-10/12 h-8/12 md:p-[1.6rem] p-5 text-white text-center rounded-md mx-auto my-5 bg-red-900/80 border-t-2 border-amber-300 z-10"
      >
        <div className="mx-5">
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="mb-5 text-2xl text-amber-300"
          >
            Objectives
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-base text-start"
          >
            EARIST developments were made possible via three Republic Acts and a
            Presidential Decree: RA 4072, jointly sponsored by Congressman Ramon
            D. Bagatsing and Sali Ututalum in 1964, authorized the establishment
            of the Technical Education Department without changing the name of
            the school. It was headed by a vocational director. RA 5088,
            sponsored by Congressman Sergio Loyola in 1967, authorized the
            renaming of ERVHS to Eulogio "Amang" Rodriguez Memorial School of
            Arts and Trades
          </motion.p>
        </div>
      </motion.div>
      <h1 className="text-center text-2xl mt-5 text-white">
        Brief History of EARIST
      </h1>
      <div className="flex items-center justify-center mx-20 my-8">
        <TimeLine />
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex items-center justify-between w-screen md:w-1/2 lg:w-10/12 h-8/12 md:p-[1.6rem] p-5 text-white text-center rounded-md mx-auto my-5 bg-red-900/80 border-t-2 border-amber-300 z-10"
      >
        <motion.div
          className="mx-5"
          whileInView={"visible"}
          initial={{
            opacity: 0,
            x: 50,
          }}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                delay: 2,
              },
            },
          }}
        >
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-base text-start flex flex-col"
          >
            <span>
              • EARIST developments were made possible via three Republic Acts
              and a Presidential Decree:
            </span>
            <span className="mt-2">
              • RA 4071, jointly sponsored by Congressman Ramon D. Bagatsing and
              Sali Ututalum in 1964, authorized the establishment of the
              Technical Education Department without changing the name of the
              school. It was headed by a vocational director.
            </span>
            <span className="mt-2">
              • RA 5088, sponsored by Congressman Sergio Loyola in 1967,
              authorized the renaming of ERVHS to Eulogio "Amang" Rodriguez
              Memorial School of Arts and Trades
            </span>
          </motion.p>
        </motion.div>
      </motion.div>
      <div>
        <Carousel />
      </div>
      <About />
    </div>
  );
};

export default Home;
