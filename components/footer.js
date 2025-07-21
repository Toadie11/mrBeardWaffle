import React from "react";

// Simple SVG icons for address, mail, clock, phone
const AddressIcon = () => (
  <svg
    className="w-6 h-6 mr-2 text-white inline-block"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    className="w-6 h-6 mr-2 text-white inline-block"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <rect
      x="3"
      y="7"
      width="18"
      height="10"
      rx="2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="3 7 12 13 21 7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    className="w-6 h-6 mr-2 text-white inline-block"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7v5l4 2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-6 h-6 mr-2 text-white inline-block"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.08.72 3.06a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.98.35 2.01.59 3.06.72a2 2 0 0 1 1.72 2z"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#9d8d74] text-white pt-12 px-4 w-full font-sans"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8 items-center text-center md:text-left">
        {/* Left side */}
        <div className="flex flex-col gap-4 min-w-[220px] items-center md:items-start text-center md:text-left">
          <div className="flex items-center">
            <AddressIcon />
            <span className="font-bold text-lg">Mr Beard Waffle</span>
          </div>
          <div className="flex items-center">
            <span className="text-base ml-0 md:ml-8">
              8FC9+M64 Muwailah Commercial
            </span>
          </div>
          <div className="flex items-center md:mt-24">
            <MailIcon />
            <a
              href="mailto:info@mrbeard-waffle.com"
              className="font-bold text-base text-white no-underline"
            >
              info@mrbeard-waffle.com
            </a>
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-col gap-4 min-w-[220px] items-center md:items-start text-center md:text-left">
          <div className="flex items-center">
            <ClockIcon />
            <span className="font-bold text-lg">Opening Hours:</span>
          </div>
          <div className="ml-0 md:ml-8">
            <div>
              Monday - Friday
              <br />
              15:00 - 00:00
            </div>
            <div className="mt-2">
              Saturday - Sunday
              <br />
              12:00 - 00:00
            </div>
          </div>
          <div className="flex items-center mt-4">
            <PhoneIcon />
            <a
              href="tel:+971568414100"
              className="font-bold text-base text-white no-underline"
            >
              +971568414100
            </a>
          </div>
        </div>
      </div>
      {/* Social icons */}
      <div className="flex justify-center gap-8 mt-12 mb-4">
        <a
          href="https://www.tiktok.com/@mrbeard.waffle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/footer/tiktok.png" alt="Snapchat" className="md:w-10" />
        </a>
        <a
          href="https://instagram.com/mrbeard.waffle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/footer/instagram.png"
            alt="Instagram"
            className="md:w-10"
          />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center font-bold text-base pb-4">
        © Mr Beard Waffle 2025
      </div>
    </footer>
  );
}
