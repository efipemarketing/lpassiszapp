'use client';

import React, { useEffect } from 'react';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero-section';
import { ChatDemo } from '@/components/chat-demo';
import { FeaturesSection } from '@/components/sections/features-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { PlansSection } from '@/components/sections/plans-section';
import { motion, useAnimation } from 'framer-motion';

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="min-h-screen bg-gradient-to-b from-white to-gray-50"
    >
      <Header />
      
      <main>
        <div className="container mx-auto px-4 pt-32">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <HeroSection />
            </div>
            <div className="w-full md:w-1/2">
              <ChatDemo />
            </div>
          </div>
        </div>

        <section id="testimonials" className="mt-32">
          <TestimonialsSection />
        </section>

        <section id="plans" className="mt-16">
          <PlansSection />
        </section>

        <section id="features" className="mt-16">
          <FeaturesSection />
        </section>
      </main>
    </motion.div>
  );
}