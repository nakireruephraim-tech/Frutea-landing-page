'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Container from '@/components/ui/Container';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marie-Claire Dubois',
      location: 'Port Louis, Mauritius',
      quote: "Frutea has become my daily ritual. The Strawberry Serenity blend helps me unwind after long days. It's like a warm hug in a cup!",
      rating: 5,
      avatar: '👩🏽',
    },
    {
      id: 2,
      name: 'Jean-Paul Ravina',
      location: 'Port Mathurin, Rodrigues',
      quote: "As someone who values wellness, I appreciate how Frutea uses only natural ingredients. The Apple Awakening is my morning go-to!",
      rating: 5,
      avatar: '👨🏾',
    },
    {
      id: 3,
      name: 'Priya Ramgoolam',
      location: 'Grand Baie, Mauritius',
      quote: "The Berry Bliss is absolutely delicious! I love knowing I'm nourishing my body while enjoying such amazing flavors.",
      rating: 5,
      avatar: '👩🏽',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            What Our Tea Lovers Say
          </h2>
          <p className="text-xl text-dark/70">
            Join thousands who have made Frutea part of their wellness journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-dark/90 text-center mb-8 leading-relaxed italic">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="text-4xl">{testimonials[currentIndex].avatar}</div>
                <div className="text-left">
                  <p className="font-semibold text-dark text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-dark/60">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-primary transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-dark" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-primary transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-dark" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-accent w-8' : 'bg-dark/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;

