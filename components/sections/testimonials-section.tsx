import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Profissional de Marketing",
    quote: "Nunca foi tão fácil controlar minhas finanças. Economizei mais de R$400 no primeiro mês sem nem perceber!",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    role: "Desenvolvedor de Software",
    quote: "Tentei várias planilhas e apps, mas sempre abandonava depois de alguns dias. Com o AssisZapp no WhatsApp, finalmente consigo manter a constância.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Professora",
    quote: "Os alertas sobre gastos excessivos me ajudaram a identificar padrões que eu nem percebia. Muito útil!",
    rating: 4,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    id: 4,
    name: "Roberto Almeida",
    role: "Empresário",
    quote: "Incrível como algo tão simples pode ser tão eficiente. Recomendo para todos que querem organizar as finanças.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    id: 5,
    name: "Mariana Santos",
    role: "Designer",
    quote: "O melhor é que não preciso baixar mais um app. Uso direto no WhatsApp que já uso todo dia!",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  },
  {
    id: 6,
    name: "Felipe Oliveira",
    role: "Médico",
    quote: "Com minha rotina corrida, precisava de algo prático. O AssisZapp é perfeito para mim!",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const visibleTestimonials = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % (testimonials.length - visibleTestimonials + 1)
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja como nosso assistente está transformando a forma como as pessoas gerenciam suas finanças
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials
                .slice(currentIndex, currentIndex + visibleTestimonials)
                .map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-cover bg-center mr-4" 
                      style={{ backgroundImage: `url(${testimonial.image})` }} 
                    />
                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-600 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: testimonials.length - visibleTestimonials + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-green-500 w-4' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}