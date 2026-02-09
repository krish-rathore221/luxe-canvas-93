import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-32 sm:pt-40 pb-20 text-center container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-muted-foreground/30" />
          <h1 className="text-3xl font-display font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">Looks like you haven't added anything yet.</p>
          <Link to="/shop">
            <motion.span className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Start Shopping
            </motion.span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 sm:pt-24">
      <div className="container-custom py-8 sm:py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl sm:text-4xl font-display font-bold">
              Cart <span className="text-muted-foreground text-lg font-normal">({totalItems} items)</span>
            </h1>
            <button onClick={clearCart} className="text-sm text-muted-foreground hover:text-destructive transition-colors">
              Clear All
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.product.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, height: 0 }}
                  className="flex gap-4 sm:gap-6 p-4 bg-card border border-border/50 rounded-2xl"
                >
                  <Link to={`/product/${item.product.id}`} className="shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link to={`/product/${item.product.id}`}>
                          <h3 className="font-medium text-sm sm:text-base line-clamp-1 hover:text-accent transition-colors">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="text-xs text-muted-foreground capitalize mt-1">{item.product.category}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1.5 rounded-full hover:bg-secondary transition-colors shrink-0"
                      >
                        <X className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="font-display font-bold">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-card border border-border/50 rounded-2xl p-6 space-y-4">
              <h3 className="font-display font-bold text-lg">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-accent">{totalPrice >= 100 ? "Free" : "$9.99"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium">${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="font-display font-bold text-lg">Total</span>
                  <span className="font-display font-bold text-lg">
                    ${(totalPrice + (totalPrice < 100 ? 9.99 : 0) + totalPrice * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>
              <Link to="/checkout" className="block">
                <motion.button
                  className="btn-primary w-full gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Checkout <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/shop" className="block text-center text-sm text-muted-foreground hover:text-accent transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
