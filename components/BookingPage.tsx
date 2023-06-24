import React from "react";
import CalendlyComponent from "../components/CalendlyComponent";
import styles from "../styles/BookingPage.module.css";
import { FaRegCalendarAlt } from "react-icons/fa"; // Importing a calendar icon from FontAwesome

const BookingPage: React.FC = () => (
	<div className={styles.container}>
		<h3 className={styles.title}>
			<FaRegCalendarAlt size={32}/> Book a meeting
		</h3>
		<div className={styles.calendlyContainer}>
			<CalendlyComponent />
		</div>
	</div>
);

export default BookingPage;
