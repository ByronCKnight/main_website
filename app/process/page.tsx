"use client";

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/footer';
import HamburgerMenu from '@/components/hamburgermenu';

const steps = [
  {
    title: "Initial Meeting",
    description: "We discuss your needs and objectives to understand your project requirements."
  },
  {
    title: "Proposal & Planning",
    description: "We create a detailed proposal and project plan tailored to your specific needs."
  },
  {
    title: "Research & Analysis",
    description: "Our team conducts in-depth research and analysis to inform our approach."
  },
  {
    title: "Implementation",
    description: "We execute the plan, keeping you informed at every step of the process."
  },
  {
    title: "Testing & Refinement",
    description: "We thoroughly test and refine our work to ensure the highest quality outcomes."
  },
  {
    title: "Project Completion",
    description: "We deliver the final product and provide any necessary training or documentation."
  }
];

const ConsultingProcessPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Consulting Process</h1>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          From our initial meeting to the final delivery, we ensure a smooth and efficient process 
          to bring your project to successful completion.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
              <div className="flex items-center mb-4">
                <CheckCircle2 className="mr-2 h-6 w-6 text-green-500" />
                <h2 className="text-xl font-semibold">{step.title}</h2>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-110 shadow-lg hover:shadow-2xl duration-300">
            Start Your Project
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultingProcessPage;