import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};

function Gallery({}: Props) {
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);

  const images = [
    "/images/counter1.JPG",
    "/images/homepage1.JPG",
    "/images/kitchen1.JPG",
    "/images/kitchen2.jpg",
    "/images/kitchen3.jpg",
    "/images/kitchen4.jpg",
    "/images/kitchen5.jpg",
    "/images/woodcabinet1.JPG",
    // add paths to more images as needed...
  ];

  return (
    <div className="contain">
      <div
        className="flex flex-col items-center my-10 mx-4 md:mx-20 overflow-hidden"
        style={{ paddingBottom: "60px" }}
      >
        <div style={{ paddingBottom: "3px", paddingTop: "20px" }}>
          <h3 className="uppercase text-black text-2xl mb-4 border-none">
            Gallery
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 mx-auto"
          style={{
            maxWidth: "100vw",
            maxHeight: "600px",
            overflow: "auto",
            gridAutoRows: "minmax(100px, auto)",
          }} // size constraints, overflow, and grid row size
        >
          {lightboxImageIndex !== null && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              style={{ zIndex: 60 }}
              onClick={() => setLightboxImageIndex(null)}
            >
              <div className="relative">
                <Image
                  src={images[lightboxImageIndex]}
                  alt="Gallery Image"
                  height={500}
                  width={500}
                  className="object-contain"
                />
                <div className="absolute top-0 bottom-0 left-0 flex items-center">
                  <button
                    className="bg-black bg-opacity-0 hover:bg-opacity-60 text-white p-4 w-full h-full"
                    onClick={(event) => {
                      event.stopPropagation();
                      setLightboxImageIndex(
                        (lightboxImageIndex - 1 + images.length) % images.length
                      );
                    }}
                  >
                    ←
                  </button>
                </div>
                <div className="absolute top-0 bottom-0 right-0 flex items-center">
                  <button
                    className="bg-black bg-opacity-0 hover:bg-opacity-60 text-white p-4 w-full h-full"
                    onClick={(event) => {
                      event.stopPropagation();
                      setLightboxImageIndex(
                        (lightboxImageIndex + 1) % images.length
                      );
                    }}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          )}

          {images.map((image, index) => (
            <div
              key={image}
              className="w-full border border-gray-300 rounded-lg overflow-hidden"
              style={{ overflow: "hidden" }}
            >
              <Image
                               src={image}
                alt="Gallery Image"
                width={1000}
                height={1000}
                className="cursor-pointer object-cover w-full h-full"
                onClick={() => setLightboxImageIndex(index)}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Gallery;
