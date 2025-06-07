'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/sections/HeroSection';
import WhoWeAreSection from '@/components/sections/WhoWeAreSection';
import VisionSection from '@/components/sections/VisionSection';
import ImpactMetrics from '@/components/sections/ImpactMetrics';
import ForDonorsSection from '@/components/sections/ForDonorsSection';
import CTASection from '@/components/sections/CTASection';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Scroll progress indicator
    gsap.to('.scroll-indicator', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhoWeAreSection />
      <VisionSection />
      <ImpactMetrics />
      <ForDonorsSection />
      <CTASection />
    </div>
  );
}