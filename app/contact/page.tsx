'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, Clock, MapPin, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const faqItems = [
  {
    question: 'How do I brew Frutea?',
    answer: 'Heat water to 180-200°F, steep tea for 3-5 minutes, and enjoy. Detailed instructions are on each package.',
  },
  {
    question: 'What are the shipping options?',
    answer: 'We offer standard (5-7 days) and express (2-3 days) shipping. Free shipping on orders over $50.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes! We ship to most countries. Shipping costs and times vary by location.',
  },
  {
    question: 'Are your teas organic?',
    answer: 'Yes, all our teas are made with 100% organic, natural ingredients with no artificial additives.',
  },
  {
    question: 'Can I return a product?',
    answer: 'We offer a 30-day satisfaction guarantee. Contact us if you\'re not completely satisfied.',
  },
  {
    question: 'Do you have wholesale options?',
    answer: 'Yes! We offer wholesale pricing for cafes, restaurants, and retailers. Contact us for details.',
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const subjects = [
    'General Inquiry',
    'Product Question',
    'Wholesale/Partnership',
    'Customer Support',
    'Press & Media',
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@frutea.com', href: 'mailto:hello@frutea.com' },
    { icon: Phone, label: 'Phone', value: '+230 5258 1234', href: 'tel:+2305258-1234' },
    { icon: Clock, label: 'Hours', value: 'Mon-Fri, 9am-6pm', href: null },
    { icon: MapPin, label: 'Location', value: 'Port Louis, Mauritius', href: null },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/20 via-primary/20 to-cream">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              Let&apos;s Connect
            </h1>
            <p className="text-xl text-dark/80">
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-dark mb-6">
                    Send Us a Message
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      className="bg-accent/10 border-2 border-accent rounded-xl p-8 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="text-6xl mb-4">✓</div>
                      <h3 className="text-2xl font-semibold text-dark mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-dark/70">
                        Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          label="Name *"
                          placeholder="Your name"
                          {...register('name')}
                          error={errors.name?.message}
                        />
                        <Input
                          label="Email *"
                          type="email"
                          placeholder="your@email.com"
                          {...register('email')}
                          error={errors.email?.message}
                        />
                      </div>

                      <Input
                        label="Phone (Optional)"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        {...register('phone')}
                        error={errors.phone?.message}
                      />

                      <div>
                        <label className="block text-sm font-medium text-dark mb-2">
                          Subject *
                        </label>
                        <select
                          {...register('subject')}
                          className="w-full px-4 py-3 border-2 border-dark/20 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                        >
                          <option value="">Select a subject</option>
                          {subjects.map((subject) => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                        {errors.subject && (
                          <p className="mt-1 text-sm text-secondary">{errors.subject.message}</p>
                        )}
                      </div>

                      <Textarea
                        label="Message *"
                        placeholder="Tell us how we can help you..."
                        {...register('message')}
                        error={errors.message?.message}
                        rows={6}
                      />

                      <Button type="submit" variant="cta" size="lg" className="w-full md:w-auto">
                        <Send size={20} />
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-dark mb-6">
                    Get in Touch
                  </h3>
                  <ul className="space-y-4">
                    {contactInfo.map((item) => (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="flex items-start gap-3 text-dark/80 hover:text-accent transition-colors group"
                          >
                            <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <div>
                              <p className="font-medium text-dark">{item.label}</p>
                              <p className="text-sm">{item.value}</p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-start gap-3 text-dark/80">
                            <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-dark">{item.label}</p>
                              <p className="text-sm">{item.value}</p>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-dark mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className={`w-12 h-12 bg-cream rounded-full flex items-center justify-center transition-all hover:shadow-lg hover:-translate-y-1 ${social.color}`}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
                  <h3 className="text-xl font-semibold text-dark mb-2">
                    Customer Support
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#faq" className="text-dark/80 hover:text-accent transition-colors">
                        → FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/shipping" className="text-dark/80 hover:text-accent transition-colors">
                        → Shipping Info
                      </a>
                    </li>
                    <li>
                      <a href="/returns" className="text-dark/80 hover:text-accent transition-colors">
                        → Returns Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-cream">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-dark/70">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover={false}>
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center"
                  >
                    <h3 className="text-lg font-semibold text-dark pr-4">
                      {item.question}
                    </h3>
                    <span className={`text-2xl transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>
                  {expandedFAQ === index && (
                    <motion.div
                      className="px-6 pb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <p className="text-dark/70">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Wholesale CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Interested in Wholesale?
            </h2>
            <p className="text-xl text-dark/80 mb-8">
              Partner with Frutea to bring mindful tea moments to your customers. We offer competitive wholesale pricing and support.
            </p>
            <Button variant="secondary" size="lg">
              Request Wholesale Info
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

