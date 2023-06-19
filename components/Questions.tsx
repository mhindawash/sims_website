import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from 'react';

type Props = {
  question: string;
  answer: string;
};

function Questions({ question, answer }: Props) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  return (
    <div 
      className="relative flex cursor-pointer py-4" 
      onMouseEnter={() => setIsAnswerVisible(true)} 
      onMouseLeave={() => setIsAnswerVisible(false)}
    >
      <button 
        className={`bg-transparent rounded-full font-semibold py-2 px-4 border-transparent hover:border-transparent text-black ${isAnswerVisible ? 'hidden' : ''}`}
        onClick={() => setIsAnswerVisible(true)}
      >
        {question}
      </button>

      {isAnswerVisible && 
        <div 
          className="absolute inset-0 flex items-center justify-center bg-white z-10 text-black"
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
