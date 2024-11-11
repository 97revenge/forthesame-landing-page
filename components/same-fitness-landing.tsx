"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Instagram, X } from "lucide-react";
import Link from "next/link";

const AnimatedLogo = () => {
  return (
    <>
      <div className="w-screen  flex justify-center items-center ">
        <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-5xl  text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-[#C4E716]">
            Same Fitness ™
          </span>{" "}
        </h1>
      </div>
    </>
  );
};

export function SameFitnessLanding() {
  const [_mounted, setMounted] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    console.log(_mounted);
    setMounted(true);
    const timer = setTimeout(() => setShowCTA(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    { name: "Ultra Comfort Running Shoes", url: "#" },
    { name: "Breathable Performance Shirt", url: "#" },
    { name: "Hydration Belt", url: "#" },
    { name: "Compression Socks", url: "#" },
    { name: "Reflective Running Jacket", url: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at center, 
              rgba(55, 75, 37, 0.9) 0%,
              rgba(17, 24, 12, 1) 100%
            )
          `,
        }}
      />

      {/* Noise overlay */}
      <div
        className="fixed inset-0 z-10 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-20 w-full max-w-4xl flex flex-col items-center">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="text-center mb-12 mt-8"
        >
          <AnimatedLogo />
          <div className="flex items-center justify-center space-x-2 text-[#CDE316]/80 mt-4">
            <p className="text-3xl font-light tracking-wider">
              Feito para os mesmos corredores
            </p>
          </div>
        </motion.header>

        <AnimatePresence>
          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3 w-full max-w-md"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Link
                  href={product.url}
                  className="block w-full bg-[#374B25]/30 backdrop-blur-sm border border-[#CDE316]/10 text-[#CDE316] rounded-lg p-4 text-center transition-colors hover:bg-[#374B25]/40 hover:border-[#CDE316]/20 focus:outline-none focus:ring-2 focus:ring-[#CDE316]/50"
                >
                  <span className="text-sm tracking-wide font-light">
                    {product.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.main>
        </AnimatePresence>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link
            href="https://www.instagram.com/forthesame.fitness/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 text-[#CDE316]/80 hover:text-[#CDE316] transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm tracking-wide font-light">
              Follow us on Instagram
            </span>
          </Link>
        </motion.footer>
      </div>

      {/* CTA Component */}
      <AnimatePresence>
        {showCTA && (
          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-4 right-4 z-30 w-72 bg-[#374B25] border border-[#CDE316]/20 rounded-lg p-4 shadow-lg backdrop-blur-sm"
          >
            <button
              onClick={() => setShowCTA(false)}
              className="absolute top-2 right-2 text-[#CDE316]/60 hover:text-[#CDE316] transition-colors"
              aria-label="Close promotion"
            >
              <X className="w-4 h-4" />
            </button>
            <h2 className="text-[#CDE316] text-lg font-semibold mb-2">
              Limited Time Offer!
            </h2>
            <p className="text-[#CDE316]/90 text-sm mb-3">
              Get 15% off on our Ultra Comfort Running Shoes. Dont miss out!
            </p>
            <Link
              href="#"
              className="block w-full bg-[#CDE316] text-[#11180C] rounded py-2 text-center text-sm font-medium transition-colors hover:bg-[#CDE316]/90 focus:outline-none focus:ring-2 focus:ring-[#CDE316]/50"
            >
              Shop Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
