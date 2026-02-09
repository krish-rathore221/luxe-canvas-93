import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, ArrowRight } from "lucide-react";

const footerLinks = {
  Shop: [
    { name: "New Arrivals", path: "/shop" },
    { name: "Best Sellers", path: "/shop" },
    { name: "Sale", path: "/shop" },
    { name: "All Products", path: "/shop" },
  ],
  Company: [
    { name: "About Us", path: "/" },
    { name: "Careers", path: "/" },
    { name: "Press", path: "/" },
    { name: "Blog", path: "/" },
  ],
  Support: [
    { name: "Help Center", path: "/" },
    { name: "Shipping", path: "/" },
    { name: "Returns", path: "/" },
    { name: "Contact", path: "/" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-3xl font-bold tracking-tight">
              LUXE
            </Link>
            <p className="mt-4 text-primary-foreground/60 max-w-sm leading-relaxed">
              Curated premium products for those who appreciate quality craftsmanship and timeless design.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-semibold mb-1">Stay in the loop</h4>
            <p className="text-primary-foreground/50 text-sm">Get the latest drops and exclusive offers.</p>
          </div>
          <div className="flex w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-xl text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent w-full sm:w-64"
            />
            <button className="px-5 py-3 bg-accent text-accent-foreground rounded-r-xl hover:brightness-110 transition-all">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>© 2024 LUXE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
