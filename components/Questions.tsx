import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

function Questions({ question, answer }: Props) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  return (
    <div 
      className="relative cursor-pointer py-4 flex items-center" 
      onMouseEnter={() => setIsAnswerVisible(true)} 
      onMouseLeave={() => setIsAnswerVisible(false)}
    >
      <button 
        className={`transition-opacity duration-300 ease-in-out rounded-full font-semibold py-2 px-4 border-transparent hover:border-transparent text-black ${isAnswerVisible ? 'opacity-0' : 'opacity-100'}`}
        onClick={() => setIsAnswerVisible(true)}
      >
        {question}
      </button>

      {isAnswerVisible && 
        <div 
          className="absolute top-0 left-0 bg-white rounded-full font-semibold p-6 border-transparent text-black z-10 overflow-auto sm:overflow-visible m-auto"
          onClick={() => setIsAnswerVisible(false)}
        >
          <p className="font-bold">
            {answer}
          </p>
        </div>
      }
    </div>
  );
}

export default Questions;
