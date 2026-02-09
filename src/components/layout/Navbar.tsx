import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Search, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Categories", path: "/shop" },
  { name: "About", path: "/" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
          LUXE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.path ? "text-accent" : "text-foreground/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <Link to="/shop" className="p-2 rounded-full hover:bg-secondary transition-colors">
            <Search className="w-5 h-5" />
          </Link>
          <Link to="/dashboard" className="p-2 rounded-full hover:bg-secondary transition-colors hidden sm:flex">
            <User className="w-5 h-5" />
          </Link>
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-secondary transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-full hover:bg-secondary transition-colors md:hidden"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="py-2 text-lg font-medium text-foreground/80 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/login" className="py-2 text-lg font-medium text-foreground/80 hover:text-accent transition-colors">
                Account
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
