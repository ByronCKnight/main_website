'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/footer';
import HamburgerMenu from '@/components/hamburgermenu';
import FlickeringGrid from "@/components/ui/flickering-grid"; // Import FlickeringGrid
import { RainbowButton } from "@/components/ui/rainbow-button"; // Import RainbowButton

const PricingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true); // State for navbar visibility
  const [backgroundPositionY, setBackgroundPositionY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll to toggle navbar visibility
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setVisible(false); // Scroll down, hide navbar
      } else {
        setVisible(true); // Scroll up, show navbar
      }
      lastScrollTop = scrollTop;

      // Adjust the background position if needed
      const backgroundElement = document.querySelector('.background-image') as HTMLElement;
      if (backgroundElement) {
        const backgroundHeight = backgroundElement.offsetHeight;
        const maxScroll = backgroundHeight - window.innerHeight;
        const newPositionY = Math.min(scrollTop, maxScroll);
        setBackgroundPositionY(-newPositionY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#000510" }}>
      {/* Flickering Grid */}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-0">
        <FlickeringGrid color={"#1E90FF"} /> {/* Blue */}
      </div>

      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${visible ? "top-0" : "-top-full"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Navbar />
          <div className="md:hidden mt-4">
            <HamburgerMenu onClick={toggleMenu} isOpen={isMenuOpen} />
          </div>
        </div>
      </header>

      {/* Content Container */}
      <div className="container mx-auto py-16 relative z-10 mt-10"> {/* Add margin-top */}
        <h1 className="text-5xl font-bold text-center mb-8 text-white">Our Pricing Plans</h1>
        <p className="text-xl text-center mb-12 text-white">Choose the plan that best suits your needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="relative rounded-lg shadow overflow-hidden">
            <div
              className="bg-[url('/images/pricing-card-background.png')] bg-cover bg-center h-80"
              style={{ height: '300px', backgroundSize: 'cover' }}
            ></div>
            <div className="p-6 absolute inset-0 flex flex-col justify-between bg-transparent">
              <h2 className="text-3xl font-semibold mb-4 text-white">Basic Plan</h2>
              <p className="text-lg mb-4 text-white">R5000 + R499pm</p>
              <ul className="list-disc mb-8 text-white">
                <li>Website only</li>
                <li>Basic features</li>
                <li>Simple maintenance</li>
              </ul>
              <Link href="/contact">
                <RainbowButton>Get Unlimited Access</RainbowButton>
              </Link>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="relative rounded-lg shadow overflow-hidden">
            <div
              className="bg-[url('/images/pricing-card-background.png')] bg-cover bg-center h-80"
              style={{ height: '300px', backgroundSize: 'cover' }}
            ></div>
            <div className="p-6 absolute inset-0 flex flex-col justify-between bg-transparent">
              <h2 className="text-3xl font-semibold mb-4 text-white">Standard Plan</h2>
              <p className="text-lg mb-4 text-white">R5000 + R899pm</p>
              <ul className="list-disc mb-8 text-white">
                <li>Website and Admin Management Tool</li>
                <li>Advanced features</li>
                <li>High level maintenance</li>
              </ul>
              <Link href="/contact">
                <RainbowButton>Get Unlimited Access</RainbowButton>
              </Link>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative rounded-lg shadow overflow-hidden">
            <div
              className="bg-[url('/images/pricing-card-background.png')] bg-cover bg-center h-80"
              style={{ height: '300px', backgroundSize: 'cover' }}
            ></div>
            <div className="p-6 absolute inset-0 flex flex-col justify-between bg-transparent">
              <h2 className="text-3xl font-semibold mb-4 text-white">Premium Plan</h2>
              <p className="text-lg mb-4 text-white">R5000 + R1199pm</p>
              <ul className="list-disc mb-8 text-white">
                <li>Website and Advanced Management Tool</li>
                <li>Detailed statistics report</li>
                <li>All features</li>
                <li>Top priority support and maintenance</li>
              </ul>
              <Link href="/contact">
                <RainbowButton>Get Unlimited Access</RainbowButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default PricingPage;