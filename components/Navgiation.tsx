import { useState, useEffect } from "react";
import Link from "next/link";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed right-0 top-1/2 transform -translate-y-1/2 p-5 z-50 md:hidden ${isOpen ? 'bg-opacity-50' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block text-2xl bg-white text-black py-1 px-2 rounded"
      >
        {isOpen ? "x" : "≡"}
      </button>
      {isOpen && (
        <div className="flex flex-col items-stretch space-y-2">
          <Link href="#hero" onClick={closeNav} className="border bg-white py-1 px-2 rounded">
            Home
          </Link>
          <Link href="#aboutus" onClick={closeNav} className="border bg-white py-1 px-2 rounded">
            Meet Us
          </Link>
          <Link href="#gallery" onClick={closeNav} className="border bg-white py-1 px-2 rounded">
            Gallery
          </Link>
          <Link href="#faqs" onClick={closeNav} className="border bg-white py-1 px-2 rounded">
            FAQs
          </Link>
          <Link href="#ourprocess" onClick={closeNav} className="border bg-white py-1 px-2 rounded">
            Our Process
          </Link>
          <Link href="#meetus" onClick={closeNav} className="border bg-white py-1 px-2 rounded">
            Contact Us
          </Link>
          <Link href="#calendly" onClick={closeNav} className="border bg-white py-1 px-2 rounded">
            Booking Page
          </Link>
          <Link href="#reviews" onClick={closeNav} className="border bg-white py-1 px-2 rounded">
            Reviews
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;

