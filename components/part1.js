import React from "react";

export default function Part1() {
  return (
    <section
      className="flex items-center min-h-[80vh] md:min-h-[80vh] w-full px-6 py-12"
      style={{
        backgroundImage: "url('/part1/backgroundLowQuality.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center md:items-start items-center w-full md:w-1/2 md:pl-20 fade-in-on-load">
        <h1
          className="text-4xl md:text-8xl font-bold mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#fff",
            textShadow: "0 2px 12px rgba(0,0,0,0.48)",
            letterSpacing: "1px",
            maxWidth: "600px",
          }}
        >
          Delicious Waffles
        </h1>
        <p
          className="text-xl md:text-2xl text-center md:text-left"
          style={{
            fontFamily: "'Vollkorn', serif",
            color: "#fff",
            textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            maxWidth: "500px",
          }}
        >
          Bringing the sweet taste of Belgium to the UAE, one warm and fluffy
          waffle at a time.
        </p>
      </div>
    </section>
  );
}
