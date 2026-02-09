import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

const FeaturedProducts = () => {
  const featured = products.slice(0, 8);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Handpicked essentials for the modern lifestyle.</p>
          </div>
          <Link
            to="/shop"
            className="flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
