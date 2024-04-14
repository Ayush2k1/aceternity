import React from 'react'
import HeroSection from '@/components/HeroSection'
import { FeaturedSection } from '@/components/FeaturedSection';
import { StickyScrollRevealDemo } from '@/components/Scroll';
import { InfiniteMovingCardsDemo } from '@/components/MovingCards';
import { CardHoverEffectDemo } from '@/components/CardHover';
import  Instructors  from "@/components/Instructors";
import Footer from '@/components/Footer';
const page = () => {
  return (
    <main className="bg-black/[0.96] min-h-screen antialiased dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div>
        <HeroSection />
        <FeaturedSection />
        <StickyScrollRevealDemo />
        <InfiniteMovingCardsDemo />
        <CardHoverEffectDemo />
        <Instructors />
        <Footer />
      </div>
    </main>
  );
}

export default page