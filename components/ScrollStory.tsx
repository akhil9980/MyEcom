import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Stories data
  const stories = [
    {
      id: 1,
      title: "Effortless Elegance",
      subtitle: "Spring Essentials",
      description:
        "Discover pieces that blend timeless sophistication with contemporary edge. Our Spring collection celebrates the art of understated luxury.",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1400",
    },
    {
      id: 2,
      title: "Urban Nomad",
      subtitle: "City Movement",
      description:
        "For those who navigate the concrete jungle with confidence. Functional designs that never compromise on style.",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1400",
    },
    {
      id: 3,
      title: "Rebel Spirit",
      subtitle: "Statement Pieces",
      description:
        "Bold silhouettes for those who refuse to blend in. Fashion is your voice—make it loud.",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=1400",
    },
    {
      id: 4,
      title: "Minimalist Poetry",
      subtitle: "Clean Lines",
      description:
        "Less is more, but never boring. Precision-cut pieces that speak volumes through silence.",
      image:
        "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1400",
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Sticky Left Text Column */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <span className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4 block">
                The Collection
              </span>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-[0.95]">
                Designed for
                <br />
                <span className="italic text-white/80">those who</span>
                <br />
                dare to define
              </h2>
              <p className="text-white/70 text-lg font-light leading-relaxed max-w-md">
                Each piece tells a story. Scroll through our curated narratives
                and find the chapter that resonates with your soul.
              </p>
            </motion.div>
          </div>

          {/* Scrolling Right Image + Text Column */}
          <div className="space-y-32">
            {stories.map((story, index) => (
              <StoryCard key={story.id} story={story} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Individual story card with scroll reveal
const StoryCard: React.FC<{ story: any; index: number }> = ({
  story,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Parallax image movement
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.95]);

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
      viewport={{ once: true, margin: "-100px" }}
      className="group"
    >
      {/* Image Container with Parallax */}
      <div className="relative overflow-hidden rounded-sm mb-8 aspect-[3/4] bg-zinc-900">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="w-full h-full"
        >
          <motion.img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Hover overlay */}
        <motion.div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating number indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
        >
          <span className="text-white text-xl font-light">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="space-y-3">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/50 text-xs tracking-[0.3em] uppercase"
        >
          {story.subtitle}
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl font-serif group-hover:text-white/80 transition-colors duration-300"
        >
          {story.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/60 text-base font-light leading-relaxed"
        >
          {story.description}
        </motion.p>

        {/* Animated underline link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-4"
        >
          <a
            href="/shop"
            className="group/link inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase"
            data-cursor-hover
          >
            <span className="relative">
              Explore
              <motion.span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover/link:w-full transition-all duration-500" />
            </span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollStory;
