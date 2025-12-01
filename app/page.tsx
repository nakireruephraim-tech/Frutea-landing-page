import HeroSection from '@/components/sections/HeroSection';
import BrandPromiseSection from '@/components/sections/BrandPromiseSection';
import FeaturedProductsSection from '@/components/sections/FeaturedProductsSection';
import BrandStorySection from '@/components/sections/BrandStorySection';
import VideoSection from '@/components/sections/VideoSection';
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
      <VideoSection />
      <TestimonialsSection />
      <InstagramSection />
      <NewsletterSection />
    </>
  );
}
