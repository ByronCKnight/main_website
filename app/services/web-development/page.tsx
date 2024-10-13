"use client";  // This makes the component a Client Component

import React, { useState, useEffect } from 'react';
import NavBar from "@/components/ui/navbar";
import HamburgerMenu from "@/components/hamburgermenu";
import FlickeringGrid from "@/components/ui/flickering-grid";
import Footer from "@/components/footer";  // Assuming you have a Footer component

const Web = () => {
  // State to handle navbar visibility and menu toggle
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle navbar visibility on scroll
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scroll down, hide navbar
        setVisible(false);
      } else {
        // Scroll up, show navbar
        setVisible(true);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: "#000510" }} className="min-h-screen flex flex-col">
      {/* Flickering Grid */}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-0">
        <FlickeringGrid color={"#1E90FF"} /> {/* Blue */}
      </div>

      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${visible ? "top-0" : "-top-full"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <NavBar />
          <div className="md:hidden mt-4">
            <HamburgerMenu onClick={toggleMenu} isOpen={isMenuOpen} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Your main content goes here */}
      </main>

      {/* Footer */}
      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Web;