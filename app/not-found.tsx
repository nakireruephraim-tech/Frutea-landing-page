'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream to-primary/20">
      <Container>
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-9xl mb-8">🫖</div>
          <h1 className="text-7xl md:text-9xl font-bold text-dark mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark mb-6">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-dark/70 mb-8">
            Looks like this tea has steeped too long and disappeared. Let&apos;s get you back to something delightful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" href="/">
              Go Home
            </Button>
            <Button variant="secondary" size="lg" href="/products">
              Browse Teas
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

