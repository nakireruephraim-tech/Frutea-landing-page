import HeroSection from '@/components/sections/HeroSection';
import BrandPromiseSection from '@/components/sections/BrandPromiseSection';
import FeaturedProductsSection from '@/components/sections/FeaturedProductsSection';
import BrandStorySection from '@/components/sections/BrandStorySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import InstagramSection from '@/components/sections/InstagramSection';
import NewsletterSection from '@/components/sections/NewsletterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandPromiseSection />
      <FeaturedProductsSection />
      <BrandStorySection />
      <TestimonialsSection />
      <InstagramSection />
      <NewsletterSection />
    </>
  );
}
