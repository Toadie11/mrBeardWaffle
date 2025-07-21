import React, { useRef, useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const images = [
  "/menu/menu1.png",
  "/menu/menu2.png",
  "/menu/menu3.png",
  "/menu/menu4.png",
  "/menu/menu5.png",
];

export default function Part3() {
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

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 12,
        },
      },
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
    },
  });

  const next = () => instanceRef.current?.next();
  const prev = () => instanceRef.current?.prev();

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="flex items-center justify-center min-h-[60vh] w-full px-4 py-12"
      style={{ background: "#c37b1e" }}
    >
      <div
        className={`flex flex-col md:flex-row items-center justify-center w-full menu-section-fade${
          visible ? " visible" : ""
        }`}
      >
        {/* Left: Carousel */}
        <div className="md:w-1/2 w-full flex flex-col items-center mb-8 md:mb-0">
          <div className="relative w-full max-w-xl mx-auto">
            <div ref={sliderRef} className="keen-slider">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="keen-slider__slide flex justify-center"
                >
                  <img
                    src={img}
                    alt={`Menu item ${idx + 1}`}
                    className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg bg-white"
                    style={{ border: "4px solid #fff", minHeight: "200px" }}
                  />
                </div>
              ))}
            </div>
            {/* Arrows */}
            <button
              onClick={prev}
              className="z-10 bg-white text-[#c37b1e] rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-[#ffe3b3] transition absolute left-4 top-1/2 transform -translate-y-1/2"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="z-10 bg-white text-[#c37b1e] rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-[#ffe3b3] transition absolute right-4 top-1/2 transform -translate-y-1/2"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
        {/* Right: Text content */}
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start md:pl-12 lg:pl-20">
          <h2
            className="text-4xl md:text-7xl font-bold mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#fff",
              textShadow: "0 2px 18px rgba(0,0,0,0.28)",
              letterSpacing: "1px",
            }}
          >
            Menu
          </h2>
          <p
            className="text-base md:text-lg text-center md:text-left mb-8"
            style={{
              fontFamily: "'Vollkorn', serif",
              color: "#fff",
              maxWidth: "500px",
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
          >
            Discover our delicious range of handcrafted Belgian waffles, each
            made fresh and topped with your favorite flavors. From classic
            favorites to indulgent creations, there is a waffle for everyone to
            enjoy.
          </p>
          <a
            href="/menu"
            className="mt-2 px-8 py-3 rounded-full bg-white text-[#c37b1e] font-bold text-lg shadow-lg transition hover:bg-[#ffe3b3] hover:text-[#a65c00] border-2 border-[#fff]"
            style={{
              fontFamily: "'Playfair Display', serif",
              boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
            }}
          >
            See Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
