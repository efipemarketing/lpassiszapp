import React from 'react';
import { PulseButton } from '@/components/ui/button-pulse';
import { WhatsappIcon } from '@/components/whatsapp-icon';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comece a Economizar Hoje Mesmo
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que estão economizando dinheiro e ganhando controle sobre suas finanças com apenas alguns cliques no WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PulseButton className="px-8 py-6 text-lg rounded-xl flex items-center justify-center gap-2">
              <WhatsappIcon className="w-6 h-6" />
              Quero Começar no WhatsApp
            </PulseButton>
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            Sem contratos. Cancele quando quiser.
          </p>
        </motion.div>
      </div>
    </section>
  );
}