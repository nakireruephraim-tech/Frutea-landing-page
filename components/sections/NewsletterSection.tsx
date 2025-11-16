'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Container from '@/components/ui/Container';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/90" />
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <Container className="relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get 10% Off Your First Order
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Plus wellness tips & exclusive offers delivered to your inbox
          </p>

          {isSubmitted ? (
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-xl font-semibold">🎉 Thank you for subscribing!</p>
              <p className="text-white/90 mt-2">Check your email for your discount code.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full text-dark placeholder-dark/50 focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-dark font-semibold rounded-full hover:bg-primary/90 transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default NewsletterSection;

