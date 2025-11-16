'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Coffee, Heart } from 'lucide-react';
import Container from '@/components/ui/Container';

const BrandPromiseSection = () => {
  const promises = [
    {
      icon: Leaf,
      title: 'Natural Goodness',
      description: '100% natural ingredients, no artificial flavors',
    },
    {
      icon: Coffee,
      title: 'Mindful Moments',
      description: 'Crafted to create rituals of rest and reflection',
    },
    {
      icon: Heart,
      title: 'Wellness Focus',
      description: 'Supporting your health journey, one sip at a time',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream">
      <Container>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <promise.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-dark mb-4">
                {promise.title}
              </h3>
              <p className="text-dark/70">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default BrandPromiseSection;

