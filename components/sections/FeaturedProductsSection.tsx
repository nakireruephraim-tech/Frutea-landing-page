'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const FeaturedProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Strawberry Serenity',
      description: 'Calming strawberry & chamomile blend for peaceful moments',
      benefits: ['Relaxation', 'Sleep Support', 'Calming'],
      color: 'from-pink-100 to-red-100',
    },
    {
      id: 2,
      name: 'Apple Awakening',
      description: 'Energizing apple & green tea to start your day right',
      benefits: ['Energy', 'Focus', 'Antioxidants'],
      color: 'from-green-100 to-lime-100',
    },
    {
      id: 3,
      name: 'Berry Bliss',
      description: 'Antioxidant-rich mixed berry blend for wellness',
      benefits: ['Immunity', 'Antioxidants', 'Vitality'],
      color: 'from-purple-100 to-pink-100',
    },
    {
      id: 4,
      name: 'Citrus Sunshine',
      description: 'Refreshing lemon & orange for a bright mood boost',
      benefits: ['Vitamin C', 'Mood', 'Refreshing'],
      color: 'from-yellow-100 to-orange-100',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Discover Our Signature Blends
          </h2>
          <p className="text-xl text-dark/70 max-w-2xl mx-auto">
            Each tea is carefully crafted to bring natural goodness to your daily rituals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={product.id} className="group">
              <div className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                <div className="text-6xl">🫖</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-dark/70 mb-4 text-sm">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-3 py-1 bg-cream text-brown text-xs rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                <Button variant="secondary" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button variant="primary" size="lg" href="/products">
            View All Products
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedProductsSection;

