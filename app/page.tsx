"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import HamburgerMenu from "@/components/hamburgermenu";
import BoxReveal from "@/components/ui/box-reveal";
import ShimmerButton from "@/components/ui/shimmer-button";
import FlipText from "@/components/ui/flip-text";
import WordPullUp from "@/components/ui/word-pull-up";
import ContactForm from "@/components/contactform";
import ProjectShowcase from "@/components/projectcard";
import ServiceGrid from "@/demos/servicegrid";
import Footer from "@/components/footer";
import NavBar from "@/components/ui/navbar";
import { WobbleCard } from "@/components/ui/wobble-card";
import FlickeringGrid from "@/components/ui/flickering-grid"; // Ensure this path is correct

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div style={{ backgroundColor: "#000510" }} className="min-h-screen relative">
      {/* Flickering Grid */}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-0">
        <FlickeringGrid color={"#1E90FF"} /> {/* Blue */}
      </div>

      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          visible ? "top-0" : "-top-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <NavBar />
          <div className="md:hidden mt-4">
            <HamburgerMenu onClick={toggleMenu} isOpen={isMenuOpen} />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <Link href="/showcase" className="text-xl text-gray-200 hover:text-green-400" onClick={closeMenu}>
              Showcase
            </Link>
            <ScrollLink to="services" smooth={true} className="text-xl text-gray-200 hover:text-green-400 cursor-pointer" onClick={closeMenu}>
              Services
            </ScrollLink>
            <ScrollLink to="process" smooth={true} className="text-xl text-gray-200 hover:text-green-400 cursor-pointer" onClick={closeMenu}>
              Process
            </ScrollLink>
            <Link href="/pricing" className="text-xl text-gray-200 hover:text-green-400" onClick={closeMenu}>
              Pricing
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              <ShimmerButton className="shadow-md bg-green-500 hover:bg-green-600">
                <span className="px-4 py-2 text-sm font-medium text-white">Contact Us</span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-between mb-20">
          {/* Hero Content */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 relative z-10">
            <BoxReveal boxColor={"#5046e6"} duration={0.9}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
                Your Dream<span className="text-[#39ff14]">.</span>
              </h1>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h1 className="mt-2 text-xl md:text-2xl text-white">
                Is About to Come <span className="text-[#39ff14]">TRUE</span>
              </h1>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <div className="mt-6 text-sm md:text-base text-white">
                <p>
                  -&gt; 20+ free and open-source animated components built with
                  <span className="font-semibold text-[#39ff14]"> React</span>,
                  <span className="font-semibold text-[#39ff14]"> Typescript</span>,
                  <span className="font-semibold text-[#39ff14]"> Tailwind CSS</span>,
                  and <span className="font-semibold text-[#39ff14]"> Framer Motion</span>.
                  <br />
                  -&gt; 100% open-source, and customizable. <br />
                </p>
              </div>
            </BoxReveal>
            <Link href={"/contact"}>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <ShimmerButton className="shadow-2xl mt-8 bg-green-500 hover:bg-green-600 border-2 border-transparent hover:border-[#39ff14] rounded-lg overflow-hidden">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-[#39ff14] lg:text-lg">
                    Contact Us
                  </span>
                </ShimmerButton>
              </BoxReveal>
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10">
            <Image
              src="/images/Innovation-amico.png"
              alt="Home image"
              width={500}
              height={500}
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

        {/* FlipText Services */}
        <div className="flex flex-wrap justify-evenly gap-6 mb-20">
          {["Development", "Ecommerce", "Hosting", "SEO"].map((word) => (
            <FlipText key={word} word={word} className="text-3xl md:text-4xl text-white transition duration-200 ease-in-out transform hover:scale-105" />
          ))}
        </div>

        {/* Services Section */}
        <Element name="services" className="mb-20">
          <h1 className="text-3xl md:text-4xl font-medium text-center text-white mb-4">
            <WordPullUp words="Building dreams from the ground up" />
          </h1>
          <p className="text-center text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            All of our services are designed to help your business stand out.
          </p>
          <ServiceGrid />
        </Element>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h1 className="text-3xl md:text-4xl font-medium text-center text-white mb-4">
            <WordPullUp words="Why Choose Us?" />
          </h1>
          <p className="text-center text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We are a team of professionals dedicated to bringing your ideas to life.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]">
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Gippity AI powers the entire universe
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-100">
                  Our team is at the forefront of innovation, bringing the latest
                  technology to your fingertips.
                </p>
              </div>
            </WobbleCard>

            {/* ... Other Cards or Content ... */}

          </div>
        </div>

        {/* Contact Form Section */}
        <Element name="contact" className="mb-20">
          <h1 className="text-3xl md:text-4xl font-medium text-center text-white mb-4">
            <WordPullUp words="Get in Touch!" />
          </h1>
          <p className="text-center text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We would love to hear from you. Please fill out the form below, and we
            will get back to you as soon as possible.
          </p>
          <ContactForm />
        </Element>
      </main>

      {/* Footer */}
      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
}