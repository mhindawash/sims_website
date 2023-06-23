import React, { useEffect } from "react";

const CalendlyComponent: React.FC = () => {
	useEffect(() => {
		const head = document.querySelector("head");
		const script = document.createElement("script");
		script.setAttribute(
			"src",
			"https://assets.calendly.com/assets/external/widget.js"
		);
		head?.appendChild(script);
	}, []);

	return (
		<div>
			<div
				className="calendly-inline-widget"
				data-url="https://calendly.com/mo3greentv"
				style={{ width: "100%", height: "630px" }}
			/>
		</div>
	);
};

export default CalendlyComponent;
