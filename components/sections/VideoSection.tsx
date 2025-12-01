'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

const VideoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-cream via-primary/10 to-accent/10">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
            Experience Frutea
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            See Our <span className="text-secondary">Story</span> in Motion
          </h2>
          <p className="text-lg text-dark/80 max-w-2xl mx-auto">
            Discover the art and care that goes into every cup of Frutea
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-dark/5 backdrop-blur-sm">
            {/* Decorative border gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20 rounded-3xl"></div>
            
            {/* Video container with padding for aspect ratio */}
            <div className="relative aspect-video bg-gradient-to-br from-cream to-primary/20">
              <video
                className="w-full h-full object-contain rounded-2xl"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/videos/final.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Optional decorative elements */}
          <motion.div
            className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Optional caption or CTA below video */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-dark/70 italic">
            Crafted with care, enjoyed with intention
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default VideoSection;

