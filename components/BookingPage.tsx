import React from "react";
import CalendlyComponent from "../components/CalendlyComponent";
import { FaRegCalendarAlt } from "react-icons/fa"; // Importing a calendar icon from FontAwesome

const BookingPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h3 className="text-center">
      <FaRegCalendarAlt /> Book a meeting
    </h3>
    <div className="w-full max-w-md">
      <CalendlyComponent />
    </div>
  </div>
);

export default BookingPage;
