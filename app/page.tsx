import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/pictures/welder-engineer-ss2495429543.webp"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-800/75 to-gray-900/80" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Footer />
      </div>
    </main>
  );
}
