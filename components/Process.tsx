import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Process({}: Props) {
  const processes = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-center md:text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-black-500 text-2xl mx-auto md:mx-0">
        Our Process
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {processes.map((process, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <div className="relative">
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="constrained-image mx-auto max-w-lg max-h-lg md:max-w-2xl md:max-h-2xl"
                src="https://i0.wp.com/simscww.com/wp-content/uploads/2022/12/IMG_0119-2022-12-19-16_28_46.jpg?resize=1024%2C768&ssl=1"
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gray-400 opacity-0 hover:opacity-50 z-10"></div>
            </div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]">
                  Step {i + 1} of {processes.length}:
                </span>{" "}
                Our Process
              </h4>

              <p className="text-lg text-center md:text-left">
                Our team of builders will bring your design to life, starting
                with hardwood stock and sheets of plywood.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Process;
