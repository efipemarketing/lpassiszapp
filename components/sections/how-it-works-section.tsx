'use client';

import React from 'react';
import { HOW_IT_WORKS } from '@/lib/constants';
import { ChatInteraction } from '@/components/chat-interaction';
import { motion } from 'framer-motion';

export function HowItWorksSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {HOW_IT_WORKS.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {HOW_IT_WORKS.description}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="w-full md:w-1/2 space-y-8">
            {HOW_IT_WORKS.steps.map((step) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {step.description}
                  </p>
                  {step.note && (
                    <p className="text-sm text-gray-500 italic">
                      {step.note}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Demonstração
                  </div>
                </div>
                <ChatInteraction />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}