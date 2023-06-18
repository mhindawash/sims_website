import React from "react";
import { motion } from "framer-motion";
import Questions from "./Questions";
import Link from "next/link";

type Props = {};

function FAQs({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        FAQs
      </h3>

      <h3 className="absolute top-36 uppercse tracking-[3px] text-gray-500 text-sm">
        Hover over a question to see the answer
      </h3>

      <div className="grid grid-cols-2 gap-5">
        <Questions
          question="Why choose custom cabinets"
          answer="Custom cabinets have unlimited amount of customization available for space efficiency and style."
        />
        <Questions
          question="Will my cabinets have soft-close drawers and doors?"
          answer="Soft-close doors and drawers are our standard."
        />
        <Questions
          question="How do I keep my cabinets looking new?"
          answer="Clean with warm water and diluted dish soap when necessary. Avoid using harsh chemicals."
        />
        <Questions
          question="What is the average price per cabinet?"
          answer="The price per cabinet varies based on design, hardware, and finish type."
        />
        <Questions
          question="What payment methods are available?"
          answer="We accept Cash, Check, and Credit Card"
        />
        <Questions
          question="Are there any payment plans available?"
          answer="Yes, our Account Manager is happy to assist with payment plans."
        />
        <Questions
          question="What types of wood do you use?"
          answer="We primarily use Maple, Poplar, Oak, and Alder. However, we can use any species of hardwood."
        />
        <Questions
          question="What is the difference between Framed and Frameless Cabinets?"
          answer="Framed cabinets are sturdy but are visible. Frameless cabinets offer a seamless look."
        />
      </div>
    </motion.div>
  );
}

export default FAQs;
