import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Control services submenu for mobile

  return (
    <nav className="bg-gradient-to-b from-blue-700 via-blue-1000 to-black shadow-md sticky top-0 z-50 rounded-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src="/logo/logo.png"
                width={150}
                height={150}
                alt="Logo"
                className="hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8">
            {/* Services with dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-white border-transparent hover:border-gray-300 hover:text-gray-300"
              >
                Services
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ease-in-out z-10">
                <ul className="py-2">
                  <li>
                    <Link href="/services/web-development" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/mobile-development" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Mobile Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/hosting" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Hosting
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/saas-development" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      SaaS Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/search-engine-optimization" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      SEO
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link href="/whyus" className="border-transparent text-white hover:border-gray-300 hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Why Us
            </Link>
            <Link href="/process" className="border-transparent text-white hover:border-gray-300 hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Process
            </Link>
            <Link href="/pricing" className="border-transparent text-white hover:border-gray-300 hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Pricing
            </Link>
          </div>

          {/* Contact Us Button for Desktop */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/contact">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 relative z-10">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden animate-slide-down">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="#" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Why Us
            </Link>
            <Link href="#" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Process
            </Link>
            <Link href="#" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Pricing
            </Link>

            {/* Services Menu for Mobile */}
            <button
              className="w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <span className="float-right">{isServicesOpen ? '-' : '+'}</span>
            </button>
            {isServicesOpen && (
              <div className="ml-4 space-y-1">
                <Link href="/web-development" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50">
                  Web Development
                </Link>
                <Link href="/mobile-development" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50">
                  Mobile Development
                </Link>
              </div>
            )}
          </div>

          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="mt-3 space-y-1">
              <Link href="/contact">
                <button className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;