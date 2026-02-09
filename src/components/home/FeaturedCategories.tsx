import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const FeaturedCategories = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explore our curated collections across premium lifestyle categories.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/shop?category=${cat.id}`}
                className="group relative block aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-white mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-white/60 text-sm">{cat.count} Products</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
