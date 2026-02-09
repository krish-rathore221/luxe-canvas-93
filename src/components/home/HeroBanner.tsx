import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const HeroBanner = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const tiltX = (mousePos.y - 0.5) * 6;
  const tiltY = (mousePos.x - 0.5) * -6;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary"
    >
      {/* Cursor follow light */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, hsl(35 92% 55% / 0.07), transparent 60%)`,
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ backgroundColor: "hsl(35 92% 55% / 0.06)" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{ backgroundColor: "hsl(35 92% 55% / 0.08)" }}
        animate={{ scale: [1.2, 1, 1.2], rotate: [0, -45, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-20 h-20 border border-accent/20 rounded-2xl hidden sm:block"
        animate={{ y: [-10, 10, -10], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[15%] w-16 h-16 border border-foreground/10 rounded-full hidden sm:block"
        animate={{ y: [10, -15, 10], x: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] left-[5%] w-12 h-12 rounded-lg hidden lg:block"
        style={{ backgroundColor: "hsl(35 92% 55% / 0.1)" }}
        animate={{ y: [-20, 0, -20], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero content with 3D tilt */}
      <motion.div
        className="relative z-20 text-center px-4 max-w-4xl"
        style={{
          transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border mb-6"
            style={{
              backgroundColor: "hsl(35 92% 55% / 0.1)",
              color: "hsl(35 92% 55%)",
              borderColor: "hsl(35 92% 55% / 0.2)",
            }}
          >
            New Collection 2024
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Redefine Your{" "}
          <span className="text-accent">Style</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Discover curated premium products designed for those who appreciate quality, craftsmanship, and timeless elegance.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link to="/shop">
            <motion.span className="btn-accent text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Shop Collection
            </motion.span>
          </Link>
          <Link to="/shop">
            <motion.span className="btn-outline text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Explore More
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroBanner;
