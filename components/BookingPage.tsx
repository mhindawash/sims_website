import React from "react";
import CalendlyComponent from "../components/CalendlyComponent";
import styles from "../styles/BookingPage.module.css";
import { FaRegCalendarAlt } from "react-icons/fa"; // Importing a calendar icon from FontAwesome

const BookingPage: React.FC = () => (
	<div className={styles.container}>
		<h2 className={styles.title}>
			<FaRegCalendarAlt /> Book a meeting
		</h2>
		<div className={styles.calendlyContainer}>
			<CalendlyComponent />
		</div>
	</div>
);

export default BookingPage;
