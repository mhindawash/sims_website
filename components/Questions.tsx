import React from "react";
import { motion } from "framer-motion";

type Props = {
  question: string;
  answer: string;
};

function Questions({ question, answer }: Props) {
  return (
    <div className="group relative flex cursor-pointer py-4">
      <button className="bg-transparent font-semibold py-2 px-4 border-transparent hover:border-transparent rounded text-gray-500">{question}</button>

      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-white z-0 group-hover:w-h-full text-black group-hover:fill content-evenly">
        <div className="flex items-center justify-center h-full">
          <p className="font-bold">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Questions;
