import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const PromoSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
          alt="Premium lifestyle"
          className="w-full h-[120%] object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-6">
            Limited Time
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Up to 40% Off
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
            Elevate your everyday with premium essentials. Shop the seasonal sale before it ends.
          </p>
          <Link to="/shop">
            <motion.span
              className="btn-accent text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop the Sale
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoSection;
