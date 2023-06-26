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
import BookingPage from "@/components/BookingPage";
import Reviews from "@/components/Reviews";

const Home: NextPage = () => {
	return (
		<div className="bg-[rgb(36,36,36)] text-black font-bold px-5 h-screen snap-y snap-mandatory overflow-scroll overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 bg-cover bg-[url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTFmODE4NTExODMzM2M5ODEzMGFlMDYwMTBjOTk0ZjUxNWVmODgyNyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/ECab5CcmFmjHDZYdnB/giphy.gif')]">
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

			<section id="calendly" className="snap-start">
				<BookingPage />
			</section>

			<section id="reviews" className="snap-start">
				<Reviews />
			</section>

			<div className="footer-container" style={{ overflow: "hidden" }}>
				<footer
					className="fixed bottom-0 w-full cursor-pointer"
					style={{ zIndex: 50 }}
				>
					<Link href="#hero">
						<div className="flex py-3 pr-14 items-center justify-center">
							{/* This is a heroicon I took directly from their site */}
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
					</Link>
				</footer>
			</div>
		</div>
	);
};

export default Home;
