'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { PulseButton } from '@/components/ui/button-pulse';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsappIcon } from './whatsapp-icon';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/AI4c7em.png" 
              alt="AssisZapp Logo" 
              className="w-10 h-10 mr-2 rounded-full"
            />
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
              {APP_NAME}
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              onClick={handleNavClick}
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-gray-800 hover:text-green-600'}`}
            >
              Benefícios
            </a>
            <a 
              href="#plans"
              onClick={handleNavClick}
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-gray-800 hover:text-green-600'}`}
            >
              Planos
            </a>
            <a 
              href="#testimonials"
              onClick={handleNavClick}
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-gray-800 hover:text-green-600'}`}
            >
              Depoimentos
            </a>
            <a 
              href="#plans"
              onClick={handleNavClick}
            >
              <PulseButton className="flex items-center gap-2" pulse={false}>
                <WhatsappIcon className="w-4 h-4" />
                Adquirir Sistema
              </PulseButton>
            </a>
          </nav>
          
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-gray-800'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-gray-800'} />
            )}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a 
                href="#features" 
                onClick={handleNavClick}
                className="font-medium text-gray-800 hover:text-green-600 py-2"
              >
                Benefícios
              </a>
              <a 
                href="#plans" 
                onClick={handleNavClick}
                className="font-medium text-gray-800 hover:text-green-600 py-2"
              >
                Planos
              </a>
              <a 
                href="#testimonials" 
                onClick={handleNavClick}
                className="font-medium text-gray-800 hover:text-green-600 py-2"
              >
                Depoimentos
              </a>
              <a 
                href="#plans"
                onClick={handleNavClick}
              >
                <PulseButton className="w-full flex items-center justify-center gap-2" pulse={false}>
                  <WhatsappIcon className="w-4 h-4" />
                  Adquirir Sistema
                </PulseButton>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}