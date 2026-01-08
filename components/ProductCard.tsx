import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, Eye } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Magnetic card effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Subtle 3D tilt effect
    rotateY.set(deltaX / 20);
    rotateX.set(-deltaY / 20);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  // Color change triggers image swap with smooth transition
  const handleColorChange = (
    color: (typeof product.colors)[0],
    index: number
  ) => {
    setSelectedColor(color);
    setImageIndex(index);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor-hover
    >
      {/* Product Image Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        <Link
          to={`/product/${product.id}`}
          className="relative aspect-[3/4] overflow-hidden bg-zinc-100 block"
        >
          {/* Image swap with crossfade animation */}
          <AnimatePresence mode="wait">
            <motion.img
              key={`${selectedColor.name}-${imageIndex}`}
              src={
                isHovered && product.images[1]
                  ? product.images[1]
                  : selectedColor.imageUrl
              }
              alt={product.name}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: isHovered ? 1.05 : 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </AnimatePresence>

          {/* Gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Badge animations */}
          {product.isNew && (
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 left-4 bg-white px-3 py-1.5 text-[9px] font-bold tracking-[0.25em] uppercase text-black"
            >
              NEW IN
            </motion.span>
          )}
          {product.originalPrice && (
            <motion.span
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 right-4 bg-black text-white px-3 py-1.5 text-[9px] font-bold tracking-[0.25em] uppercase"
            >
              SALE
            </motion.span>
          )}
        </Link>

        {/* Floating Quick View Button - appears on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
            >
              <Link
                to={`/product/${product.id}`}
                className="group/btn flex items-center gap-2 bg-white text-black px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300"
              >
                <Eye size={14} />
                <span>Quick View</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Card lift shadow effect */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-sm"
          animate={{
            boxShadow: isHovered
              ? "0 20px 40px -10px rgba(0, 0, 0, 0.2)"
              : "0 0 0 0 rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Product Info with staggered animations */}
      <div className="mt-4 flex flex-col space-y-2">
        {/* Brand & Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-[10px] text-zinc-400 font-bold tracking-[0.25em] uppercase mb-1">
            {product.brand}
          </p>
          <Link
            to={`/product/${product.id}`}
            className="group/link inline-block"
          >
            <motion.h3
              className="text-sm font-medium text-zinc-900 relative inline-block"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              {product.name}
              {/* Animated underline on name hover */}
              <motion.span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-zinc-900 group-hover/link:w-full transition-all duration-500" />
            </motion.h3>
          </Link>
        </motion.div>

        {/* Price with slide animation */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            className="text-base font-semibold text-zinc-900"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            ${product.price}
          </motion.span>
          {product.originalPrice && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-sm text-zinc-400 line-through"
            >
              ${product.originalPrice}
            </motion.span>
          )}
        </motion.div>

        {/* Color Swatches with ripple effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 pt-1"
        >
          {product.colors.map((color, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleColorChange(color, idx)}
              className={`relative w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                selectedColor.name === color.name
                  ? "border-zinc-900 scale-110"
                  : "border-zinc-200 hover:border-zinc-400"
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              data-cursor-hover
            >
              {/* Ripple effect on select */}
              {selectedColor.name === color.name && (
                <motion.span
                  className="absolute inset-0 rounded-full border-2 border-zinc-900"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center text-[11px] text-zinc-400"
        >
          <Star size={11} className="fill-yellow-400 text-yellow-400 mr-1" />
          <span className="font-medium">{product.rating}</span>
          <span className="mx-1.5">·</span>
          <span>{product.reviewsCount} reviews</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
