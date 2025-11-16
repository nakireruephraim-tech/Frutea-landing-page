'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, User, Calendar, Heart, Leaf, Coffee, Sparkles, Users as UsersIcon } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All', icon: Sparkles },
    { id: 'wellness', label: 'Wellness & Health', icon: Heart },
    { id: 'recipes', label: 'Tea Recipes', icon: Coffee },
    { id: 'mindfulness', label: 'Mindfulness', icon: Leaf },
    { id: 'stories', label: 'Customer Stories', icon: UsersIcon },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '5 Morning Rituals for Mindful Living',
      excerpt: 'Discover simple yet powerful morning practices that will transform your day. Learn how to create intentional moments of peace before the day begins.',
      category: 'mindfulness',
      author: 'Emma Rodriguez',
      date: 'Nov 10, 2024',
      readTime: '5 min read',
      image: 'from-purple-200 to-pink-200',
      featured: true,
    },
    {
      id: 2,
      title: 'The Health Benefits of Fruit-Infused Teas',
      excerpt: 'Explore the science behind natural fruit teas and how they support your wellness journey with antioxidants and vitamins.',
      category: 'wellness',
      author: 'Dr. Sarah Mitchell',
      date: 'Nov 8, 2024',
      readTime: '7 min read',
      image: 'from-green-200 to-emerald-200',
    },
    {
      id: 3,
      title: 'How to Create Your Perfect Tea Moment',
      excerpt: 'A step-by-step guide to crafting a personal tea ritual that brings peace and mindfulness to your daily routine.',
      category: 'mindfulness',
      author: 'James Chen',
      date: 'Nov 5, 2024',
      readTime: '6 min read',
      image: 'from-blue-200 to-cyan-200',
    },
    {
      id: 4,
      title: 'Behind the Blend: Strawberry Serenity',
      excerpt: 'Dive deep into our most popular blend and discover the story behind its creation and the natural ingredients that make it special.',
      category: 'stories',
      author: 'Frutea Team',
      date: 'Nov 3, 2024',
      readTime: '4 min read',
      image: 'from-red-200 to-pink-200',
    },
    {
      id: 5,
      title: 'Sustainable Tea Practices We Follow',
      excerpt: 'Learn about our commitment to the environment and how we ensure every cup of Frutea supports a healthier planet.',
      category: 'wellness',
      author: 'Emma Rodriguez',
      date: 'Oct 30, 2024',
      readTime: '5 min read',
      image: 'from-green-200 to-lime-200',
    },
    {
      id: 6,
      title: 'Customer Story: Finding Balance with Frutea',
      excerpt: 'Meet Sarah, a busy professional who transformed her wellness routine with daily tea rituals. Her inspiring journey awaits.',
      category: 'stories',
      author: 'Guest Writer',
      date: 'Oct 28, 2024',
      readTime: '6 min read',
      image: 'from-orange-200 to-yellow-200',
    },
    {
      id: 7,
      title: 'Iced Tea Recipes for Summer Wellness',
      excerpt: 'Beat the heat with these refreshing cold-brew tea recipes that keep you healthy and hydrated all summer long.',
      category: 'recipes',
      author: 'James Chen',
      date: 'Oct 25, 2024',
      readTime: '8 min read',
      image: 'from-cyan-200 to-blue-200',
    },
    {
      id: 8,
      title: 'The Art of Tea Meditation',
      excerpt: 'Combine ancient meditation practices with your tea ritual for deeper relaxation and presence.',
      category: 'mindfulness',
      author: 'Dr. Sarah Mitchell',
      date: 'Oct 22, 2024',
      readTime: '5 min read',
      image: 'from-purple-200 to-indigo-200',
    },
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = activeCategory === 'all' 
    ? regularPosts 
    : regularPosts.filter(post => post.category === activeCategory);

  const recentPosts = blogPosts.slice(0, 5);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cream to-primary/20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              The Frutea Journal
            </h1>
            <p className="text-xl text-dark/80 mb-8">
              Wellness tips, tea stories, and mindful living
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-dark/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      <Container>
        <div className="py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {featuredPost && (
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className={`h-64 md:h-auto bg-gradient-to-br ${featuredPost.image} flex items-center justify-center text-8xl`}>
                      🌟
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span className="inline-block px-4 py-1 bg-secondary text-white text-sm font-semibold rounded-full w-fit mb-4">
                        Featured
                      </span>
                      <h2 className="text-3xl font-bold text-dark mb-4">
                        {featuredPost.title}
                      </h2>
                      <p className="text-dark/70 mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-dark/60 mb-6">
                        <span className="flex items-center gap-1">
                          <User size={16} />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <Button variant="secondary" size="md">
                        Read More
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Category Filters */}
            <div className="mb-8 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-white text-dark hover:bg-cream border border-dark/10'
                  }`}
                >
                  <cat.icon size={16} />
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col">
                    <div className={`h-48 bg-gradient-to-br ${post.image} flex items-center justify-center text-6xl`}>
                      {post.category === 'wellness' && '💚'}
                      {post.category === 'recipes' && '🫖'}
                      {post.category === 'mindfulness' && '🧘'}
                      {post.category === 'stories' && '✨'}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="inline-block px-3 py-1 bg-cream text-brown text-xs font-semibold rounded-full w-fit mb-3 capitalize">
                        {categories.find(c => c.id === post.category)?.label || post.category}
                      </span>
                      <h3 className="text-xl font-semibold text-dark mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-dark/70 mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-dark/60 mb-4">
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      <Button variant="secondary" size="sm" className="w-full">
                        Read More
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button variant="primary" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Categories Widget */}
              <Card>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark mb-4">
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.slice(1).map((cat) => (
                      <li key={cat.id}>
                        <button
                          onClick={() => setActiveCategory(cat.id)}
                          className="w-full text-left flex items-center gap-2 text-dark/80 hover:text-accent transition-colors"
                        >
                          <cat.icon size={16} />
                          {cat.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              {/* Recent Posts Widget */}
              <Card>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark mb-4">
                    Recent Posts
                  </h3>
                  <ul className="space-y-4">
                    {recentPosts.map((post) => (
                      <li key={post.id}>
                        <a href="#" className="block group">
                          <h4 className="text-sm font-medium text-dark group-hover:text-accent transition-colors line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <p className="text-xs text-dark/60">{post.date}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              {/* Newsletter Widget */}
              <Card>
                <div className="p-6 bg-gradient-to-br from-accent/10 to-primary/10">
                  <h3 className="text-xl font-semibold text-dark mb-3">
                    Newsletter
                  </h3>
                  <p className="text-sm text-dark/70 mb-4">
                    Get the latest articles delivered to your inbox
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg border border-dark/20 mb-3 focus:outline-none focus:border-accent"
                  />
                  <Button variant="secondary" size="sm" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}

