'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-light rounded-full mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            What We Offer
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive manufacturing and fabrication solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const isFlipped = flippedCards.has(index);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[420px]"
                style={{ perspective: '1000px' }}
              >
                {/* Card Container */}
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/95 to-black border border-white/10 cursor-pointer backdrop-blur-sm relative"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                    }}
                    onClick={() => toggleFlip(index)}
                  >
                    {/* Image Section - Full Height */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/95" />
                      
                      {/* Title on Image */}
                      <div className="absolute bottom-20 left-0 right-0 px-6">
                        <h3 className="text-2xl font-semibold text-white font-display leading-tight mb-2">
                          {service.title}
                        </h3>
                        <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
                      </div>

                      {/* Learn More Button - Overlay on Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-2.5 px-4 bg-gradient-to-r from-primary via-primary to-accent text-white rounded-lg font-medium text-xs shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/95 to-black border border-primary/30 cursor-pointer backdrop-blur-sm"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(26, 147, 142, 0.2)'
                    }}
                    onClick={() => toggleFlip(index)}
                  >
                    <div className="relative h-full flex flex-col p-6">
                      {/* Image on back */}
                      <div className="relative h-32 mb-5 rounded-xl overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-4 font-display">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed text-sm flex-grow mb-5">
                        {service.description}
                      </p>
                      
                      {/* Back Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 px-4 bg-white/10 border border-white/20 text-white rounded-xl font-medium text-sm hover:bg-white/15 transition-all duration-300"
                      >
                        Back
                      </motion.button>
                      
                      {/* Accent Line */}
                      <div className="mt-4 h-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
