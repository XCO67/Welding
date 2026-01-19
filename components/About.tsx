'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'Quality Assurance',
    description: 'Rigorous quality control on every project',
    icon: '✓',
  },
  {
    title: 'Expert Team',
    description: 'Certified professionals with years of experience',
    icon: '✓',
  },
  {
    title: 'Modern Equipment',
    description: 'State-of-the-art manufacturing technology',
    icon: '✓',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 200 }}
            className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-6"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display"
          >
            Precision Manufacturing Excellence
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '6rem' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            With years of experience in the industry, we specialize in delivering high-quality manufacturing services that meet the most demanding standards.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-accent rounded-full" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Our Commitment
                </h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team of skilled professionals combines traditional craftsmanship with modern techniques to ensure exceptional results. We take pride in our attention to detail, commitment to safety, and dedication to exceeding client expectations.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every project is approached with precision and care, ensuring durability and excellence in every deliverable. We believe in building lasting relationships with our clients through trust, quality, and innovation.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        boxShadow: [
                          '0 10px 40px rgba(26, 147, 142, 0.15)',
                          '0 20px 60px rgba(26, 147, 142, 0.25)',
                          '0 10px 40px rgba(26, 147, 142, 0.15)',
                        ],
                      }
                    : {}
                }
                transition={{
                  opacity: { duration: 0.6, delay: 0.5 + index * 0.15 },
                  y: { duration: 0.6, delay: 0.5 + index * 0.15, type: "spring", stiffness: 100 },
                  scale: { duration: 0.6, delay: 0.5 + index * 0.15, type: "spring", stiffness: 100 },
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5 + index * 0.15,
                  },
                }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:border-primary/30 transition-all group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-2xl"
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="flex-grow pt-1">
                    <motion.h4
                      whileHover={{ x: 5 }}
                      className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors"
                    >
                      {feature.title}
                    </motion.h4>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"
        />
      </div>
    </section>
  );
}
