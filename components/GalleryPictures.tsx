import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function GalleryPictures({}: Props) {
  return (
    <article>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://simscww.com/wp-content/uploads/2022/12/DSC_4351-300x200.jpg"
        alt=""
      />

      <div>
        <h4>Kitchens</h4>
        <p>From modern to traditional</p>
        <div>
          {/* Cabinet Style */}
          {/* Cabinet Style */}
          {/* Cabinet Style */}
        </div>
        <p>Started work... - Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default GalleryPictures;
