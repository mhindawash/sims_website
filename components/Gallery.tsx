import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GalleryPictures from "./GalleryPictures";
import Link from "next/link";

type Props = {};

function Gallery({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-black text-2xl">
        Gallery
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <GalleryPictures />
        <GalleryPictures />
        <GalleryPictures />
        <GalleryPictures />
        <GalleryPictures />
      </div>
    </motion.div>
  );
}

export default Gallery;
