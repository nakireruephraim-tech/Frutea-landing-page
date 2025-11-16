# 🫖 Frutea Landing Page

A beautiful, modern multi-page website for **Frutea** - a natural fruit tea brand focused on wellness, mindfulness, and celebrating moments of rest.

## ✨ Features

### Pages Included
- **Homepage** - Full-screen hero, brand promises, featured products, testimonials, Instagram feed, and newsletter signup
- **About** - Brand story, mission, vision, values, timeline, and sustainability commitment
- **Products** - Product grid with filtering by category, detailed product cards, and subscription CTA
- **Blog** - Featured posts, category filtering, blog grid, sidebar widgets, and search functionality
- **Contact** - Contact form with validation, FAQ section, and wholesale inquiry
- **404 Page** - Custom error page with navigation options

### Design & UI
- 🎨 **Brand Colors**: Yellow (#faea2c), Red (#e41e26), Green (#39b54a), Cream (#f5e6d3)
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- ✨ **Smooth Animations** - Framer Motion animations throughout
- 🎭 **Modern UI** - Clean, beautiful interface with hover effects and micro-interactions
- 🌙 **Accessibility** - ARIA labels, keyboard navigation, and proper semantic HTML

### Technical Features
- ⚡ **Next.js 14+** - Built with App Router for optimal performance
- 🔷 **TypeScript** - Full type safety throughout the codebase
- 🎨 **Tailwind CSS** - Utility-first styling with custom design system
- 📝 **Form Validation** - React Hook Form + Zod for robust form handling
- 🔍 **SEO Optimized** - Meta tags, sitemap, robots.txt, and structured data
- 🚀 **Performance** - Optimized images, code splitting, and lazy loading

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
```bash
cd "/Users/ephraimnakireru/Documents/Frutea landing page"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Frutea landing page/
├── app/
│   ├── about/          # About page
│   ├── blog/           # Blog page
│   ├── contact/        # Contact page
│   ├── products/       # Products page
│   ├── layout.tsx      # Root layout with nav & footer
│   ├── page.tsx        # Homepage
│   ├── not-found.tsx   # 404 page
│   ├── sitemap.ts      # SEO sitemap
│   └── globals.css     # Global styles
├── components/
│   ├── layout/         # Navigation & Footer
│   ├── sections/       # Homepage sections
│   └── ui/             # Reusable UI components
├── lib/                # Utility functions
├── public/
│   └── images/         # Static images (logo, etc.)
└── package.json
```

## 🎨 Design System

### Typography
- **Headings**: Geist Sans (bold)
- **Body**: Geist Sans (regular)
- Responsive font sizes using Tailwind classes

### Color Palette
```css
Primary (Yellow):  #faea2c
Secondary (Red):   #e41e26
Accent (Green):    #39b54a
Cream:             #f5e6d3
Brown:             #8b7355
Dark:              #2d2d2d
White:             #ffffff
```

### Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-6`

## 🧩 Key Components

### UI Components
- **Button** - 4 variants (primary, secondary, ghost, cta) with animations
- **Card** - Reusable card with hover effects
- **Container** - Consistent width container wrapper
- **Input** - Form input with validation error display
- **Textarea** - Form textarea with validation

### Section Components
- **HeroSection** - Full-screen hero with CTAs
- **BrandPromiseSection** - Three icon cards
- **FeaturedProductsSection** - Product grid
- **BrandStorySection** - Split layout with images
- **TestimonialsSection** - Auto-rotating carousel
- **InstagramSection** - Social media grid
- **NewsletterSection** - Email signup CTA

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements
- Alt text on all images
- WCAG AA color contrast compliance
- Screen reader friendly

## 🔍 SEO Features

- Unique meta titles and descriptions for each page
- Open Graph tags for social media sharing
- Structured data with JSON-LD
- XML sitemap (`/sitemap.xml`)
- robots.txt file
- Semantic HTML structure
- Optimized images with Next.js Image component

## 🎯 Features to Implement Next

While the site is fully functional, here are some enhancements you could add:

1. **E-commerce Integration** - Connect to Shopify or Stripe for actual purchases
2. **Blog CMS** - Integrate with Contentful, Sanity, or WordPress
3. **Analytics** - Add Google Analytics or Plausible
4. **Newsletter Integration** - Connect to Mailchimp, ConvertKit, or SendGrid
5. **Search Functionality** - Implement Algolia or similar search
6. **User Authentication** - Add account creation and login
7. **Product Reviews** - Allow customers to leave reviews
8. **Live Chat** - Integrate customer support chat
9. **Multi-language Support** - Add i18n for international audiences
10. **Dark Mode** - Implement theme switching

## 🛠 Technologies Used

- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)

## 📝 Customization Guide

### Changing Brand Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  --accent: #your-color;
  /* ... */
}
```

### Adding New Products

Edit the products array in `app/products/page.tsx`:

```typescript
const products = [
  {
    id: 1,
    name: 'Your Product',
    category: 'fruit',
    description: 'Product description',
    // ...
  },
];
```

### Updating Contact Information

Edit `components/layout/Footer.tsx` and `app/contact/page.tsx` to update email, phone, and address details.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Other Options
- **Netlify** - Works great with Next.js
- **AWS Amplify** - Scalable hosting
- **DigitalOcean App Platform** - Simple deployment

## 📄 License

This project is built for Frutea. All rights reserved.

## 🤝 Support

For questions or support, contact the development team or refer to the Next.js documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Built with 💚 for mindful living**

*Crafted to inspire moments of rest and reflection*
