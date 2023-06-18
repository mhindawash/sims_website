import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  question: string;
  answer: string;
};

function Questions({ question, answer }: Props) {
  return (
    <div className="group relative flex cursor-pointer py-4">
      <button className="bg-white rounded-full font-semibold py-2 px-4 border-transparent hover:border-transparent rounded text-black">{question}</button>

      <div className="grow opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-white z-10 group-hover:w-h-full text-black group-hover:fill py-4 px-4">
        <div className="flex items-center justify-center h-full content-evenly">
          <p className="font-bold">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Questions;
