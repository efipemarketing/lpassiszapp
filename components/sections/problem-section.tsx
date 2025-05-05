import React from 'react';
import { PROBLEMS } from '@/lib/constants';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export function ProblemSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROBLEMS.map((problem) => (
            <motion.div
              key={problem.id}
              className="bg-gradient-to-br from-emerald-50 to-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}