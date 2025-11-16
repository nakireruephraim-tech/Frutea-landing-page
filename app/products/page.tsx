'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Zap, Shield, Moon, Sun, Smile } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

type ProductCategory = 'all' | 'fruit' | 'herbal' | 'wellness';

interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  description: string;
  benefits: string[];
  price: number;
  gradient: string;
  emoji: string;
  icon: any;
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  const products: Product[] = [
    {
      id: 1,
      name: 'Strawberry Serenity',
      category: 'fruit',
      description: 'Calming strawberry & chamomile blend perfect for peaceful moments and relaxation.',
      benefits: ['Relaxation', 'Sleep Support', 'Calming'],
      price: 350,
      gradient: 'from-pink-100 to-red-100',
      emoji: '🍓',
      icon: Moon,
    },
    {
      id: 2,
      name: 'Apple Awakening',
      category: 'fruit',
      description: 'Energizing apple & green tea blend to kickstart your day with natural vitality.',
      benefits: ['Energy', 'Focus', 'Antioxidants'],
      price: 280,
      gradient: 'from-green-100 to-lime-100',
      emoji: '🍎',
      icon: Zap,
    },
    {
      id: 3,
      name: 'Berry Bliss',
      category: 'fruit',
      description: 'Antioxidant-rich mixed berry blend bursting with natural goodness.',
      benefits: ['Immunity', 'Antioxidants', 'Vitality'],
      price: 400,
      gradient: 'from-purple-100 to-pink-100',
      emoji: '🫐',
      icon: Shield,
    },
    {
      id: 4,
      name: 'Citrus Sunshine',
      category: 'fruit',
      description: 'Refreshing lemon & orange blend for a bright mood boost any time of day.',
      benefits: ['Vitamin C', 'Mood', 'Refreshing'],
      price: 250,
      gradient: 'from-yellow-100 to-orange-100',
      emoji: '🍋',
      icon: Sun,
    },
    {
      id: 5,
      name: 'Tropical Tranquility',
      category: 'wellness',
      description: 'Mango & passionfruit wellness blend that transports you to paradise.',
      benefits: ['Relaxation', 'Mood', 'Tropical'],
      price: 500,
      gradient: 'from-orange-100 to-yellow-100',
      emoji: '🥭',
      icon: Smile,
    },
    {
      id: 6,
      name: 'Herbal Harmony',
      category: 'herbal',
      description: 'Caffeine-free relaxation blend with chamomile, lavender, and mint.',
      benefits: ['Caffeine-Free', 'Relaxation', 'Digestion'],
      price: 180,
      gradient: 'from-purple-100 to-blue-100',
      emoji: '🌿',
      icon: Moon,
    },
    {
      id: 7,
      name: 'Peach Paradise',
      category: 'fruit',
      description: 'Sweet peach & white tea blend for a gentle afternoon treat.',
      benefits: ['Gentle', 'Antioxidants', 'Sweet'],
      price: 320,
      gradient: 'from-orange-50 to-pink-50',
      emoji: '🍑',
      icon: Smile,
    },
    {
      id: 8,
      name: 'Mint Meadow',
      category: 'herbal',
      description: 'Refreshing peppermint & spearmint blend for clarity and focus.',
      benefits: ['Focus', 'Refreshing', 'Digestion'],
      price: 150,
      gradient: 'from-green-50 to-emerald-100',
      emoji: '🌱',
      icon: Zap,
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'all' as ProductCategory, label: 'All' },
    { id: 'fruit' as ProductCategory, label: 'Fruit Teas' },
    { id: 'herbal' as ProductCategory, label: 'Herbal Blends' },
    { id: 'wellness' as ProductCategory, label: 'Wellness Teas' },
  ];

  const brewingSteps = [
    { step: 1, title: 'Choose Your Blend', description: 'Browse our collection and find your perfect tea' },
    { step: 2, title: 'Brew Mindfully', description: 'Follow our simple brewing guide for the best flavor' },
    { step: 3, title: 'Savor the Moment', description: 'Pause, breathe, and enjoy your mindful moment' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-accent text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80" />
        <Container className="relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Tea Collection
            </h1>
            <p className="text-xl text-white/90">
              Naturally crafted blends for every moment
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-dark/10 sticky top-20 z-40">
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-cream text-dark hover:bg-cream/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-cream">
        <Container>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className={`h-64 bg-gradient-to-br ${product.gradient} flex flex-col items-center justify-center relative overflow-hidden`}>
                    <div className="text-8xl mb-4">{product.emoji}</div>
                    <product.icon className="absolute top-4 right-4 w-8 h-8 text-dark/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-dark mb-2">
                      {product.name}
                    </h3>
                    <p className="text-dark/70 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="px-3 py-1 bg-white text-brown text-xs rounded-full border border-brown/20"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-dark">
                        Rs {product.price}
                      </span>
                      <Button variant="secondary" size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-cream">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              How It Works
            </h2>
            <p className="text-xl text-dark/70">
              Your journey to mindful tea moments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brewingSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full text-2xl font-bold text-dark mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-dark/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Subscription CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Join the Monthly Tea Club
            </h2>
            <p className="text-xl text-dark/80 mb-8">
              Get exclusive blends, special discounts, and free shipping on all subscription orders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
              <Button variant="cta" size="lg">
                Subscribe Now
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

