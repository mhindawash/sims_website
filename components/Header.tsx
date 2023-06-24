import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import ReactDOM from "react-dom";
// ReactDOM.render(<SocialIcon url="https://tiktok.com" />, document.body);

type Props = {};

function Header({}: Props) {
	return (
		<header className="sticky top-0 p-3 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex flex-row items-center"
			>
				{/* Social Icons */}
				<SocialIcon
					url="https://pinterest.com/"
					fgColor="red"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://instagram.com"
					fgColor="orange"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://twitter.com/"
					fgColor="skyblue"
					bgColor="transparent"
				/>
				<div className="App">
					<SocialIcon
						url="https://www.linkedin.com"
						network="linkedin"
						fgColor="white"
						bgColor="blue"
						style={{ height: 50, width: 50 }}
					/>
				</div>
			</motion.div>

			<Link href="#meetus" legacyBehavior>
				<motion.div
					initial={{
						x: 500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					className="flex flex-row items-center text-black font-bold cursor-pointer"
				>
					<Link href="#calendly">
						<FaRegCalendarAlt
							href="https://calendly.com/mo3greentv"
							size={25}
						/>
					</Link>
					<SocialIcon
						className="cursor-pointer"
						network="email"
						fgColor="black"
						bgColor="transparent"
					/>
					<p className="uppercase hidden md:inline-flex text-small text-black">
						get in touch
					</p>
				</motion.div>
			</Link>
		</header>
	);
}

export default Header;
