import React, { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] w-full px-6 py-12"
      style={{ background: "#d9b271" }}
    >
      {/* Left side: Text */}
      <div
        className={`about-animate md:w-1/2 w-full md:pr-12 mb-8 md:mb-0 md:pl-20 px-4 md:px-0${
          visible ? " visible" : ""
        }`}
      >
        <h2
          className="text-4xl md:text-8xl font-bold mb-4 md:mb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#fff",
            textShadow: "0 2px 20px rgba(0,0,0,0.28)",
            letterSpacing: "1px",
          }}
        >
          About
        </h2>
        <p
          className="text-xs md:text-lg leading-relaxed rounded-xl py-4 pr-4 md:pr-8"
          style={{
            fontFamily: "'Vollkorn', serif",
            color: "#fff",
            maxWidth: "600px",
            textShadow: "0 2px 20px rgba(0,0,0,0.18)",
          }}
        >
          Mr Beard Waffle began in July 2023 in the heart of Belgium. What
          started as a culinary dream has grown into a beloved waffle brand,
          delighting taste buds near and far. Born in the charming city of
          Hannut, we proudly partner with a local Belgian company to craft
          authentic waffles using the finest ingredients and traditional
          recipes. We’ve even brought the taste of Belgium to the Emirates,
          sharing our passion for pure Belgian quality with a whole new
          audience. Experience the magic of Mr Beard Waffle – where every bite
          brings tradition, quality, and unforgettable flavour.
        </p>
      </div>
      {/* Right side: Image */}
      <div
        className={`about-animate flex justify-center items-center md:w-1/2 w-full${
          visible ? " visible" : ""
        }`}
      >
        <img
          src="/part2/about.png"
          alt="Mr Beard Waffle Logo"
          className="w-1/3 md:w-2/3 lg:w-1/2 max-w-lg rounded-3xl object-cover"
          style={{
            minWidth: "180px",
            minHeight: "300px",
            maxHeight: "600px",
            height: "500px",
          }}
        />
      </div>
      {/* Responsive image height fix */}
      <style>
        {`
          @media (max-width: 600px) {
            #about img {
              height: 220px !important;
              max-height: 220px !important;
              width: 100% !important;
              object-fit: cover !important;
            }
          }
        `}
      </style>
    </section>
  );
}
