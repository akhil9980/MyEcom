import { Variants } from "framer-motion";

// Premium easing functions - avoiding generic ease-in-out
export const EASING = {
  // Smooth and confident - used for hero elements
  smooth: [0.22, 1, 0.36, 1] as const,

  // Snappy but refined - for interactive elements
  snappy: [0.34, 1.56, 0.64, 1] as const,

  // Luxury slow - for large image movements
  luxury: [0.43, 0.13, 0.23, 0.96] as const,

  // Bouncy premium - subtle bounce without being playful
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
};

// Staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASING.smooth,
    },
  },
};

// Fade in from bottom - hero text
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASING.smooth,
    },
  },
};

// Scale in - product cards
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASING.smooth,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASING.smooth,
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASING.smooth,
    },
  },
};

// Image reveal - curtain effect
export const imageReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 1.2,
      ease: EASING.luxury,
    },
  },
};

// Page transition
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: EASING.smooth,
    },
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3, ease: EASING.smooth },
};

export const hoverLift = {
  y: -8,
  transition: { duration: 0.3, ease: EASING.smooth },
};

// Button ripple effect keyframe
export const buttonRipple = {
  scale: [1, 1.5],
  opacity: [0.5, 0],
  transition: { duration: 0.6, ease: "easeOut" },
};

// Magnetic button attraction strength
export const MAGNETIC_STRENGTH = 0.3;

// Scroll progress indicators
export const scrollProgress = {
  scaleX: [0, 1],
  transformOrigin: "left",
  transition: { duration: 0.3, ease: EASING.smooth },
};
