import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 text-center"
          style={{ backgroundColor: "hsl(35 92% 55% / 0.08)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px]"
            style={{ backgroundColor: "hsl(35 92% 55% / 0.1)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[80px]"
            style={{ backgroundColor: "hsl(35 92% 55% / 0.08)" }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Join the LUXE Community
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Subscribe for early access to new drops, exclusive offers, and style inspiration.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-floating flex-1"
              />
              <motion.button
                className="btn-accent gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Send className="w-4 h-4" />
                Subscribe
              </motion.button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe anytime. By subscribing you agree to our Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
