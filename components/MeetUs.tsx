import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const About = ({}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // sample data
  const data = [
    {
      image: "https://example.com/image1.jpg",
      description: "Placeholder 1",
      title: "Title 1",
    },
    {
      image: "https://example.com/image2.jpg",
      description: "Placeholder 2",
      title: "Title 2",
    },
    {
      image: "https://example.com/image3.jpg",
      description: "Placeholder 3",
      title: "Title 3",
    },
    {
      image: "https://example.com/image4.jpg",
      description: "Placeholder 4",
      title: "Title 4",
    },
    {
      image: "https://example.com/image5.jpg",
      description: "Placeholder 5",
      title: "Title 5",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-2 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[5px] text-black text-2xl">
        The Team
      </h3>

      <div className="flex container justify-center align-left w-96 h-38 py-4">
        <button
          className="bg-white rounded-full w-8 h-8 absolute left-0"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={data[currentIndex].image}
          className="-mb-20 rounded-full object-contain md:mb-0 flex-shrink-0 w-56 h-56 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <button
          className="bg-white rounded-full w-8 h-8 absolute right-0"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>

      <div className="space-y-10 px-0 md:px-10">
        <h3>{data[currentIndex].title}</h3>
        <p className="text-base">{data[currentIndex].description}</p>
      </div>
    </motion.div>
  );
};

export default About;
