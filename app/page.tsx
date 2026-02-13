import { FloatingNav } from '@/components/FloatingNav';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { BentoGrid } from '@/components/BentoGrid';
import { Timeline } from '@/components/Timeline';
import { Skills } from '@/components/Skills';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <FloatingNav />
      <main>
        <Hero />
        <TrustBar />
        <BentoGrid />
        <Timeline />
        <Skills />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
