
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <span className="font-poppins font-bold text-2xl text-indigo">
            Poojitha<span className="text-mint">.</span>
          </span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["About", "Projects", "Workflow", "Tech", "Features", "Certifications"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="font-medium hover:text-indigo transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-indigo text-white hover:bg-indigo/90"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
