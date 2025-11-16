'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const BrandStorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-accent/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left: Image Collage */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 bg-gradient-to-br from-primary to-cream rounded-2xl flex items-center justify-center text-6xl">
                  🍓
                </div>
                <div className="h-48 bg-gradient-to-br from-accent to-primary/30 rounded-2xl flex items-center justify-center text-5xl">
                  🍃
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 bg-gradient-to-br from-secondary/20 to-cream rounded-2xl flex items-center justify-center text-5xl">
                  🫖
                </div>
                <div className="h-64 bg-gradient-to-br from-cream to-brown/30 rounded-2xl flex items-center justify-center text-6xl">
                  🍎
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Story Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Born from a Need to Pause
            </h2>
            <p className="text-lg text-dark/80 mb-6 leading-relaxed">
              In a fast-paced world, Frutea was created to beautify moments of rest and self-reflection. 
              We believe that taking care of yourself should be as delightful as it tastes.
            </p>
            <p className="text-lg text-dark/80 mb-8 leading-relaxed">
              Every blend is crafted with natural ingredients to help you create meaningful rituals 
              that nurture your body, mind, and spirit.
            </p>
            <Button variant="secondary" size="lg" href="/about">
              Read Full Story
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default BrandStorySection;

