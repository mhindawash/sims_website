import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Faqs from "@/components/Gallery";

// const inter = Inter({ subsets: ['latin'] })
const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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
        <Faqs />
      </section>
      {/* Gallery */}

      {/* Contact Us */}
    </div>
  );
};

export default Home;
