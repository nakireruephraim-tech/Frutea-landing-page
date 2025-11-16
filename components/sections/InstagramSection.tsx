'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const InstagramSection = () => {
  const posts = [
    { id: 1, gradient: 'from-pink-200 to-pink-400', emoji: '🍓' },
    { id: 2, gradient: 'from-green-200 to-green-400', emoji: '🍃' },
    { id: 3, gradient: 'from-yellow-200 to-yellow-400', emoji: '🍋' },
    { id: 4, gradient: 'from-purple-200 to-purple-400', emoji: '🫐' },
    { id: 5, gradient: 'from-orange-200 to-orange-400', emoji: '🍊' },
    { id: 6, gradient: 'from-red-200 to-red-400', emoji: '🍎' },
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold text-dark">
              Join Our Community
            </h2>
          </div>
          <p className="text-xl text-dark/70 mb-2">
            Follow @frutea for daily inspiration
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className={`aspect-square bg-gradient-to-br ${post.gradient} rounded-xl flex items-center justify-center text-6xl cursor-pointer hover:scale-105 transition-transform`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {post.emoji}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button variant="primary" size="lg">
            <Instagram className="w-5 h-5" />
            Follow Us on Instagram
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default InstagramSection;

