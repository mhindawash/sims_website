import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import FAQs from "@/components/FAQs";

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
        <Gallery />
      </section>

      {/* FAQs */}
      <section id="faqs" className="snap-start">
        <FAQs />
      </section>

      {/* Contact Us */}
    </div>
  );
};

export default Home;
