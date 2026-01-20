'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { COMPANY_INFO } from '@/lib/constants';
import type { ContactFormData } from '@/types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Trim and validate inputs
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    // Basic validation
    if (!trimmedData.name || !trimmedData.email || !trimmedData.phone || !trimmedData.message) {
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedData.email)) {
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(trimmedData.phone)) {
      return;
    }

    try {
      // TODO: Replace with actual API endpoint
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(trimmedData),
      // });
      
      setFormData({ name: '', email: '', phone: '', message: '' });
      onClose();
    } catch {
      // Error handling - in production, use proper error logging service
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="bg-white/10 backdrop-blur-xl rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-white/20 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center mb-5">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h2 className="text-2xl font-bold text-white font-display">
                      Contact Us
                    </h2>
                  </motion.div>
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white text-3xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                  >
                    ×
                  </motion.button>
                </div>

                {/* Contact Info - Top Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <div className="grid grid-cols-3 gap-3">
                    {/* Phone */}
                    <motion.a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center cursor-pointer hover:bg-white/10 transition-all group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-400 mb-1">Phone</p>
                      <p className="text-white hover:text-primary transition-colors text-sm font-light">
                        {COMPANY_INFO.phone}
                      </p>
                    </motion.a>

                    {/* Location */}
                    <motion.a
                      href={COMPANY_INFO.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center cursor-pointer hover:bg-white/10 transition-all group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-400 mb-1">Location</p>
                      <p className="text-white hover:text-primary transition-colors text-xs leading-tight">
                        {COMPANY_INFO.location}
                      </p>
                    </motion.a>

                    {/* Instagram */}
                    <motion.a
                      href={COMPANY_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center cursor-pointer hover:bg-white/10 transition-all group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-400 mb-1">Instagram</p>
                      <p className="text-white hover:text-primary transition-colors text-sm font-light">
                        @anmcnc
                      </p>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Contact Form - Bottom Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
                >
                  <h3 className="text-base font-bold text-white mb-4">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-light text-gray-300 mb-1.5"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          maxLength={100}
                          autoComplete="name"
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all backdrop-blur-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-light text-gray-300 mb-1.5"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          maxLength={255}
                          autoComplete="email"
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all backdrop-blur-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-medium text-gray-300 mb-1.5"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        maxLength={20}
                        autoComplete="tel"
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all backdrop-blur-sm"
                        placeholder="+965 123 456 789"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium text-gray-300 mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        maxLength={1000}
                        rows={3}
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none backdrop-blur-sm"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white py-3 rounded-xl font-light text-base transition-all shadow-lg hover:shadow-primary/30"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
