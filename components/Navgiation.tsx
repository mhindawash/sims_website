import { useState, useEffect } from 'react';
import Link from 'next/link';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 p-5 z-50 md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="block text-2xl bg-white text-black py-1 px-2 rounded">
        {isOpen ? "X" : "≡"}
      </button>
      {isOpen && (
        <ul className="flex flex-col items-center space-y-2">
          <li>
            <Link href="#hero">Hero</Link>
          </li>
          <li>
            <Link href="#aboutus">About Us</Link>
          </li>
          <li>
            <Link href="#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="#faqs">FAQs</Link>
          </li>
          <li>
            <Link href="#ourprocess">Our Process</Link>
          </li>
          <li>
            <Link href="#meetus">Meet Us</Link>
          </li>
          <li>
            <Link href="#calendly">Booking Page</Link>
          </li>
          <li>
            <Link href="#reviews">Reviews</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavigationBar;
