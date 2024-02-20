import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import { motion } from "framer-motion";

const TimeLine = () => {
  return (
    <Timeline horizontal>
      <motion.div
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
              delay: 1,
            },
          },
        }}
      >
        <Timeline.Item className="md:p-5 mx-10">
          <Timeline.Point
            icon={HiCalendar}
            className="absolute md:static left-0"
          />
          <Timeline.Content className="w-60 bg-red-900/80 rounded-md p-5 mx-auto border-t-2 border-amber-300">
            <Timeline.Time className="text-amber-300">1946</Timeline.Time>
            <Timeline.Title className="text-amber-300 my-4">
              Earist Present Site
            </Timeline.Title>
            <Timeline.Body className="text-white">
              EARIST acquired its present site at Nagtahan, Sampaloc, Manila.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </motion.div>

      <motion.div
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
        <Timeline.Item className="mx-10 md:p-5 md:ml-6">
          <Timeline.Point
            icon={HiCalendar}
            className="absolute md:static sm:left-10"
          />
          <Timeline.Content className="break-words bg-red-900/80 rounded-md p-5 border-t-2 border-amber-300">
            <Timeline.Time className="text-amber-300">1945</Timeline.Time>
            <Timeline.Title className="text-amber-300 my-4">
              Establishment of EARIST
            </Timeline.Title>
            <Timeline.Body className="text-white">
              The Eulogio "Amang" Rodriguez Institute of Science and Technology
              (EARIST) was established after the liberation of Manila In 1945.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </motion.div>

      <motion.div
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
              delay: 2.5,
            },
          },
        }}
      >
        <Timeline.Item className="md:p-5 px-10">
          <Timeline.Point
            icon={HiCalendar}
            className="absolute md:static sm:left-10"
          />
          <Timeline.Content className="w-60 bg-red-900/80 rounded-md p-5 border-t-2 border-amber-300">
            <Timeline.Time className="text-amber-300">1949</Timeline.Time>
            <Timeline.Title className="my-4 text-amber-300">
              Principal Delegation
            </Timeline.Title>
            <Timeline.Body className="text-white">
              Apolinario Apilado was appointed principal and this was followed
              by Dr. Hilario G. Nudas in 1949.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </motion.div>
    </Timeline>
  );
};

export default TimeLine;
