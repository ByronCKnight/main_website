'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/footer';
import HamburgerMenu from '@/components/hamburgermenu';

const PricingPage = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [backgroundPositionY, setBackgroundPositionY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const backgroundElement = document.querySelector('.background-image') as HTMLElement;

      if (backgroundElement) {
        const backgroundHeight = backgroundElement.offsetHeight;
        const maxScroll = backgroundHeight - window.innerHeight;
        const newPositionY = Math.min(scrollY, maxScroll);
        setBackgroundPositionY(-newPositionY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Navbar />
          <div className="md:hidden mt-4">
            <HamburgerMenu onClick={toggleMenu} isOpen={isMenuOpen} />
          </div>
        </div>
      </header>

    <div className="relative">
      {/* Background Image */}
      <div
        className="background-image absolute inset-0 -z-10 w-full h-screen bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url('/images/pricing-background.png')`,
          backgroundPositionY: `${backgroundPositionY}px`,
        }}
      ></div>

      {/* Content Container */}
      <div className="container mx-auto py-16 relative z-10">
        <h1 className="text-5xl font-bold text-center mb-8 text-white">Our Pricing Plans</h1>
        <p className="text-xl text-center mb-12 text-white">Choose the plan that best suits your needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="relative rounded-lg shadow overflow-hidden">
            <div
              className="bg-[url('/images/pricing-card-background.png')] bg-cover bg-center h-80" // Ensure this path is correct
              style={{ height: '300px', backgroundSize: 'cover' }} // Set height and cover
            ></div>
            <div className="p-6 absolute inset-0 flex flex-col justify-between bg-transparent"> {/* Remove the gray background */}
              <h2 className="text-3xl font-semibold mb-4 text-white">Basic Plan</h2>
              <p className="text-lg mb-4 text-white">R5000 + R499pm</p>
              <ul className="list-disc mb-8 text-white">
                <li>Website only</li>
                <li>Basic features</li>
                <li>Simple maintenance</li>
              </ul>
              <Link href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Get Started
              </Link>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="relative rounded-lg shadow overflow-hidden">
            <div
              className="bg-[url('/images/pricing-card-background.png')] bg-cover bg-center h-80" // Ensure this path is correct
              style={{ height: '300px', backgroundSize: 'cover' }} // Set height and cover
            ></div>
            <div className="p-6 absolute inset-0 flex flex-col justify-between bg-transparent"> {/* Remove the gray background */}
              <h2 className="text-3xl font-semibold mb-4 text-white">Standard Plan</h2>
              <p className="text-lg mb-4 text-white">R5000 + R899pm</p>
              <ul className="list-disc mb-8 text-white">
                <li>Website and Admin Management Tool</li>
                <li>Advanced features</li>
                <li>High level maintenance</li>
              </ul>
              <Link href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Get Started
              </Link>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative rounded-lg shadow overflow-hidden">
            <div
              className="bg-[url('/images/pricing-card-background.png')] bg-cover bg-center h-80" // Ensure this path is correct
              style={{ height: '300px', backgroundSize: 'cover' }} // Set height and cover
            ></div>
            <div className="p-6 absolute inset-0 flex flex-col justify-between bg-transparent"> {/* Remove the gray background */}
              <h2 className="text-3xl font-semibold mb-4 text-white">Premium Plan</h2>
              <p className="text-lg mb-4 text-white">R5000 + R1199pm</p>
              <ul className="list-disc mb-8 text-white">
                <li>Website and Advanced Management Tool</li>
                <li>Detailed statistics report</li>
                <li>All features</li>
                <li>Top priority support and maintenance</li>
              </ul>
              <Link href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PricingPage;