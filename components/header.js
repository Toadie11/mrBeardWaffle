import React from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header
      className=""
      style={{
        padding: "1rem 0",
        background: "#d5cec8", // background is static
        width: "100%",
      }}
    >
      {/* Logo */}
      <div
        className="header-animate"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1.5rem",
          width: "100%",
        }}
      >
        <img
          src="/logo/logo1.png"
          alt="Mr Beard Waffle Logo"
          style={{
            height: "80px",
            objectFit: "contain",
            maxWidth: "90vw",
          }}
        />
      </div>
      {/* Navbar */}
      <nav className="header-animate">
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            listStyle: "none",
            padding: 0,
            margin: 0,
            fontSize: "1.2rem",
            flexWrap: "wrap",
          }}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="nav-link"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "500",
                  transition: "color 0.2s, background 0.2s",
                  padding: "0.5rem 0.5rem",
                  display: "inline-block",
                  borderRadius: "6px",
                }}
                onClick={(e) => {
                  const section = document.querySelector(item.href);
                  if (section) {
                    e.preventDefault();
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile styles */}
      <style>
        {`
          @media (max-width: 600px) {
            header {
              padding: 1rem 0;
            }
            ul {
              gap: 1rem !important;
              font-size: 1rem !important;
            }
            img {
              height: 60px !important;
            }
          }
          .nav-link:hover {
            color: #fff !important;
            background: #b6a48b !important;
          }
        `}
      </style>
    </header>
  );
}
