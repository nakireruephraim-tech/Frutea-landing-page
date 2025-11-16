'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Sparkles, Users, Leaf } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export default function AboutPage() {
  const values = [
    { icon: Sparkles, title: 'Joy in Simplicity', description: 'Finding beauty in the simple moments of life' },
    { icon: Heart, title: 'Mindfulness', description: 'Being present and intentional in every sip' },
    { icon: Leaf, title: 'Balance', description: 'Nurturing harmony between body, mind, and spirit' },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'The Idea',
      description: 'Born from a personal need to slow down and find moments of peace in a chaotic world.',
    },
    {
      year: '2021',
      title: 'First Blend Created',
      description: 'After months of experimentation, our signature Strawberry Serenity blend was perfected.',
    },
    {
      year: '2022',
      title: 'Community Growth',
      description: 'Thousands joined our journey, sharing their own mindful tea moments.',
    },
    {
      year: '2023',
      title: 'Expanding Wellness',
      description: 'Launched new wellness-focused blends and sustainable packaging initiatives.',
    },
    {
      year: '2024',
      title: 'Future Vision',
      description: 'Continuing to inspire mindful living and natural wellness, one cup at a time.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-accent/20 via-cream to-primary/20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="text-sm text-dark/60 mb-4">
              Home &gt; About
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              Our Story: A Journey to <span className="text-accent">Mindful Sipping</span>
            </h1>
            <p className="text-xl text-dark/80">
              Discover the heart and soul behind Frutea
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Brand Purpose */}
            <Card>
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-full mb-4">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-dark mb-4">Brand Purpose</h2>
                <ul className="space-y-3 text-dark/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Promote natural wellbeing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Celebrate togetherness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Slow down and savor life</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Brand Mission */}
            <Card>
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/20 rounded-full mb-4">
                  <Heart className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-dark mb-4">Brand Mission</h2>
                <p className="text-lg text-dark/80 leading-relaxed">
                  Crafting fruity, naturally inspired tea which nurtures wellbeing and connection
                </p>
              </div>
            </Card>
          </div>

          {/* Brand Vision */}
          <Card className="mb-12">
            <div className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/20 rounded-full mb-4">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-dark mb-4">Brand Vision</h2>
              <p className="text-xl text-dark/80 max-w-3xl mx-auto leading-relaxed">
                To become a beloved and respected tea brand which inspires lifestyle and self-care
              </p>
            </div>
          </Card>

          {/* Brand Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-dark mb-4">Our Values</h2>
            <p className="text-xl text-dark/70">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card>
                  <div className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-cream rounded-full mb-4">
                      <value.icon className="w-8 h-8 text-brown" />
                    </div>
                    <h3 className="text-2xl font-semibold text-dark mb-3">
                      {value.title}
                    </h3>
                    <p className="text-dark/70">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-brown text-cream">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-relaxed">
              &ldquo;Every sip of Frutea is carefully crafted to celebrate natural goodness because taking care of yourself should be as delightful as it tastes.&rdquo;
            </h2>
            <p className="text-xl text-cream/80">
              We believe in creating rituals that bring you back to the present moment, allowing you to pause, breathe, and reconnect with yourself.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-cream">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Our Story Timeline
            </h2>
            <p className="text-xl text-dark/70">
              The journey that brought Frutea to life
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 w-24">
                  <div className="text-3xl font-bold text-secondary">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-semibold text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-dark/70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl h-96 flex items-center justify-center text-9xl">
                🌍
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-dark mb-6">
                Our Sustainability Commitment
              </h2>
              <p className="text-lg text-dark/80 mb-6 leading-relaxed">
                We believe in caring for the planet as much as we care for our customers. That&apos;s why we&apos;re committed to:
              </p>
              <ul className="space-y-4 text-dark/80">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌱</span>
                  <span><strong>100% Natural Ingredients</strong> - No artificial flavors or preservatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">♻️</span>
                  <span><strong>Eco-Friendly Packaging</strong> - Recyclable and biodegradable materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <span><strong>Ethical Sourcing</strong> - Supporting fair trade and sustainable farming</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌿</span>
                  <span><strong>Carbon Neutral Shipping</strong> - Offsetting our delivery emissions</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}

