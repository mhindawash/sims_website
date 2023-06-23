/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import FAQs from "@/components/FAQs";
import Process from "@/components/Process";
import MeetUs from "@/components/MeetUs";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>Sim's Custom WoodWork</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="aboutus" className="snap-center">
        <About />
      </section>

      <section id="gallery" className="snap-center">
        <Gallery />
      </section>

      <section id="faqs" className="snap-start">
        <FAQs />
      </section>

      <section id="ourprocess" className="snap-center">
        <Process />
      </section>

      <section id="meetus" className="snap-start">
        <MeetUs />
      </section>

      <Link href="#hero">
        <footer
          className="sticky bottom-5 w-full cursor-pointer"
          style={{ zIndex: 50 }}
        >
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
