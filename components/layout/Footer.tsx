'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Products', href: '/products' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-dark text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/frutea-logo.svg"
                alt="Frutea Logo"
                width={70}
                height={70}
                className="w-auto h-14 brightness-110"
              />
            </Link>
            <p className="text-cream/80 mb-6">
              Natural fruit-infused teas crafted to nurture your wellbeing and celebrate moments of rest.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-cream/80 mb-4">
              Subscribe for exclusive offers and wellness tips.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full px-4 py-2 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder-cream/50 focus:outline-none focus:border-primary"
              />
              <Button type="submit" variant="primary" size="md" className="w-full">
                Subscribe
              </Button>
            </form>
            <div className="mt-6 space-y-2">
              <a
                href="mailto:hello@frutea.com"
                className="flex items-center gap-2 text-cream/80 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                hello@frutea.com
              </a>
              <a
                href="tel:+2305258-1234"
                className="flex items-center gap-2 text-cream/80 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                +230 5258 1234
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm">
              © {new Date().getFullYear()} Frutea. All rights reserved.
            </p>
            <p className="text-cream/60 text-sm">
              Crafted with 💚 for mindful living
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

