import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CinematicHero from "../components/CinematicHero";
import ScrollStory from "../components/ScrollStory";
import ProductCard from "../components/ProductCard";
import CustomCursor from "../components/CustomCursor";
import { PRODUCTS } from "../constants";

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  // Smooth scroll behavior
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      <div className="flex flex-col bg-white">
        {/* Cinematic Hero Section */}
        <CinematicHero />

        {/* Scroll-Based Storytelling Section */}
        <ScrollStory />

        {/* Featured Collections Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 block mb-3"
              >
                Curated by ONCY TECH
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-serif text-zinc-900 leading-tight"
              >
                The Season's
                <br />
                <span className="italic text-zinc-700">Finest</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                to="/shop"
                className="group flex items-center gap-2 text-sm font-bold tracking-[0.2em] uppercase hover:gap-4 transition-all duration-300 mt-6 md:mt-0"
                data-cursor-hover
              >
                <span className="relative">
                  View All
                  <motion.span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-900 group-hover:w-full transition-all duration-500" />
                </span>
                <ArrowRight
                  size={16}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Campaign Section */}
        <section className="bg-zinc-50 py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="relative overflow-hidden group">
                  <motion.img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800&h=1000"
                    alt="Campaign"
                    className="w-full rounded-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 space-y-8"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400"
                >
                  ONCY TECH Originals
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-serif leading-[1.1]"
                >
                  Where comfort
                  <br />
                  meets <span className="italic text-zinc-700">luxury</span>
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-zinc-600 text-lg font-light leading-relaxed max-w-md"
                >
                  Crafted from 100% organic cotton, our heavyweight essentials
                  are designed to transcend seasons. Each piece is meticulously
                  engineered for the perfect fit that never compromises.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to="/shop?cat=Essentials"
                    className="group inline-block relative text-sm font-bold tracking-[0.2em] uppercase"
                    data-cursor-hover
                  >
                    <span className="relative pb-2">
                      Discover Essentials
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-black"
                        initial={{ scaleX: 1 }}
                        whileHover={{ scaleX: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.span className="absolute bottom-0 left-0 w-0 h-[2px] bg-zinc-400 group-hover:w-full transition-all duration-500" />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-32 bg-black text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 block mb-6"
              >
                Stay Connected
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif mb-6"
              >
                Join the ONCY TECH Circle
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-white/70 mb-12 font-light text-lg italic"
              >
                Be the first to discover new arrivals and exclusive seasonal
                drops
              </motion.p>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              >
                <input
                  type="email"
                  placeholder="YOUR EMAIL ADDRESS"
                  className="flex-grow bg-transparent border-b-2 border-white/30 py-4 focus:border-white outline-none text-sm tracking-[0.2em] uppercase placeholder:text-white/40 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-all"
                  data-cursor-hover
                >
                  Subscribe
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
