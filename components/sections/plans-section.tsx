import React from 'react';
import { Check, Star } from 'lucide-react';
import { PulseButton } from '@/components/ui/button-pulse';
import { WhatsappIcon } from '@/components/whatsapp-icon';
import { motion } from 'framer-motion';

const planFeatures = [
  'Acesso imediato ao assistente!',
  '24h por dia disponível!',
  'Controle seus gastos pessoais.',
  'Crie Lembretes de contas e afins.',
  'Receba relatórios em segundos.',
  'Crie metas de gastos.'
];

export function PlansSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Planos Disponíveis
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para você e comece a transformar suas finanças hoje mesmo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plano Mensal - Mais Vendido */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-500"
          >
            <div className="absolute -right-12 top-7 bg-green-500 text-white py-1 px-12 transform rotate-45">
              <span className="text-sm font-medium">Mais Vendido</span>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Plano Mensal</h3>
              <div className="text-4xl font-bold mb-2">R$ 19,90<span className="text-base font-normal">/mês</span></div>
              <p className="text-sm opacity-90">Cancele quando quiser</p>
            </div>

            <div className="p-6">
              <ul className="space-y-4">
                {planFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <Check size={12} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://pay.kirvano.com/079465dd-9e3e-4933-b0f0-8b1de9951cc9"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <PulseButton className="w-full mt-8 py-4 text-lg flex items-center justify-center gap-2">
                  <WhatsappIcon className="w-5 h-5" />
                  Começar Agora
                </PulseButton>
              </a>

              <p className="text-center text-sm text-gray-500 mt-4">
                7 dias de garantia incondicional
              </p>
            </div>
          </motion.div>

          {/* Plano Anual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Plano Anual</h3>
              <div className="text-4xl font-bold mb-2">
                R$ 199,00<span className="text-base font-normal">/ano</span>
              </div>
              <p className="text-sm opacity-90">Economia de R$ 39,80</p>
            </div>

            <div className="p-6">
              <ul className="space-y-4">
                {planFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
                      <Check size={12} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://pay.kirvano.com/9e441765-6f09-4645-b072-0496007f312a"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <PulseButton className="w-full mt-8 py-4 text-lg flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800">
                  <WhatsappIcon className="w-5 h-5" />
                  Assinar Anual
                </PulseButton>
              </a>

              <p className="text-center text-sm text-gray-500 mt-4">
                7 dias de garantia incondicional
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}