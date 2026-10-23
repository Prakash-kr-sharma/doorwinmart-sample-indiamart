import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategorySection } from '../components/home/CategorySection';
import { FeaturedProductsSection } from '../components/home/FeaturedProductsSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { ApplicationsSection } from '../components/home/ApplicationsSection';
import { GalleryPreviewSection } from '../components/home/GalleryPreviewSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CTASection } from '../components/home/CTASection';

interface HomePageProps {
  onOpenQuote: (productName?: string, categorySlug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote }) => {
  return (
    <main>
      <HeroSection onOpenQuote={() => onOpenQuote()} />
      <CategorySection />
      <FeaturedProductsSection onOpenQuote={onOpenQuote} />
      <WhyChooseUsSection />
      <ApplicationsSection />
      <GalleryPreviewSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection onOpenQuote={() => onOpenQuote()} />
    </main>
  );
};
