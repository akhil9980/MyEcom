import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";

const ScrollStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Get products with discounts for offers
  const offerProducts = PRODUCTS.filter(
    (p) => p.originalPrice && p.originalPrice > p.price
  ).slice(0, 4);

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-zinc-900 py-32 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[120px] before:bg-gradient-to-b before:from-transparent before:to-amber-400 before:z-10 before:pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Sticky Left Text Column */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <span className="text-zinc-900/70 text-xs tracking-[0.3em] uppercase mb-4 block font-bold">
                Limited Time Offers
              </span>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-[0.95]">
                Designed for
                <br />
                <span className="italic text-zinc-800">those who</span>
                <br />
                dare to define
              </h2>
              <p className="text-zinc-800 text-lg font-light leading-relaxed max-w-md mb-8">
                Each piece tells a story. Discover exclusive deals on our
                curated collection.
              </p>

              {/* Offers List */}
              <div className="space-y-4 mb-8">
                {offerProducts.map((product, idx) => {
                  const discount = Math.round(
                    ((product.originalPrice! - product.price) /
                      product.originalPrice!) *
                      100
                  );
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-full bg-zinc-900 text-yellow-400 flex items-center justify-center text-xs font-bold">
                        {discount}%
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{product.name}</p>
                        <p className="text-xs text-zinc-700">
                          <span className="line-through">
                            ${product.originalPrice}
                          </span>
                          <span className="ml-2 font-bold">
                            ${product.price}
                          </span>
                        </p>
                      </div>
                      <motion.div
                        className="w-2 h-2 rounded-full bg-zinc-900"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          delay: idx * 0.2,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>

              <Link
                to="/shop"
                className="inline-block bg-zinc-900 text-yellow-400 px-8 py-4 text-sm font-bold tracking-wider uppercase hover:bg-zinc-800 transition-colors"
              >
                Shop All Offers
              </Link>
            </motion.div>
          </div>

          {/* Scrolling Right Products Column */}
          <div className="space-y-8">
            {offerProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Individual product card with scroll reveal
const ProductCard: React.FC<{ product: any; index: number }> = ({
  product,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container with Parallax */}
        <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/5] bg-white shadow-2xl">
          <motion.div style={{ y: imageY }} className="w-full h-full">
            <motion.img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* Discount Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-4 left-4 bg-zinc-900 text-yellow-400 px-4 py-2 rounded-full shadow-lg"
          >
            <span className="text-lg font-bold">{discount}% OFF</span>
          </motion.div>

          {/* Hover overlay */}
          <motion.div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Shop Now on hover */}
          <motion.div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-yellow-400 text-zinc-900 px-6 py-3 text-sm font-bold tracking-wider uppercase shadow-xl">
              Shop Now
            </span>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <p className="text-xs tracking-[0.2em] uppercase text-zinc-800 font-bold">
            {product.brand}
          </p>
          <h3 className="text-2xl font-serif text-zinc-900 group-hover:text-zinc-700 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-zinc-900">
              ${product.price}
            </span>
            <span className="text-lg line-through text-zinc-600">
              ${product.originalPrice}
            </span>
            <span className="text-sm font-bold text-red-600">
              Save ${product.originalPrice - product.price}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ScrollStory;
