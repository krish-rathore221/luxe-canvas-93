import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWished, setIsWished] = useState(false);
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-secondary">
          {discount > 0 && (
            <span className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
              -{discount}%
            </span>
          )}
          {product.badge && !discount && (
            <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
              {product.badge}
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Quick actions overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
        </div>
      </Link>

      {/* Wishlist button */}
      <motion.button
        className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-sm border border-border/50"
        whileTap={{ scale: 0.85 }}
        onClick={(e) => {
          e.preventDefault();
          setIsWished(!isWished);
        }}
      >
        <Heart
          className={`w-4 h-4 transition-colors duration-200 ${
            isWished ? "fill-destructive text-destructive" : "text-foreground/60"
          }`}
        />
      </motion.button>

      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? "fill-accent text-accent"
                  : "text-muted fill-muted"
              }`}
            />
          ))}
          <span className="text-[11px] text-muted-foreground ml-1">
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-sm mb-2 line-clamp-1 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Price + Add to cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <motion.button
            className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => addToCart(product)}
          >
            <ShoppingBag className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
