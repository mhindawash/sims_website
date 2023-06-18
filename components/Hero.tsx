/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Welcome to our Shop!",
      "Got Questions? Contact us!",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      {/* <BackgroundCircles /> */}
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://simscww.com/wp-content/uploads/2022/12/DSC_4351-300x200.jpg"
        alt=""
      />
      <div className="z-10">
        <h2 className="text-sm uppercase text-black font-bold pb-2 tracking-[10px]">
          Sim's Custom Wood Work
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#aboutus">
            <button className="heroButton">About Us</button>
          </Link>
          <Link href="#gallery">
            <button className="heroButton">Gallery</button>
          </Link>
          <Link href="#ourprocess">
            <button className="heroButton">Our Process</button>
          </Link>
          <Link href="#faqs">
            <button className="heroButton">FAQ's</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
