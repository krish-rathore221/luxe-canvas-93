import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="pt-20 sm:pt-24 min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <Link to="/" className="font-display text-3xl font-bold tracking-tight">LUXE</Link>
          <h1 className="text-2xl font-display font-bold mt-6 mb-2">Create Account</h1>
          <p className="text-muted-foreground text-sm">Join LUXE for exclusive access</p>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">First Name</label>
                <input placeholder="John" className="input-floating" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Last Name</label>
                <input placeholder="Doe" className="input-floating" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <input type="email" placeholder="you@example.com" className="input-floating" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input-floating pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Confirm Password</label>
              <input type="password" placeholder="••••••••" className="input-floating" />
            </div>
            <label className="flex items-start gap-2 cursor-pointer text-sm text-muted-foreground">
              <input type="checkbox" className="accent-accent mt-0.5" />
              <span>I agree to the <a href="#" className="text-accent hover:underline">Terms of Service</a> and <a href="#" className="text-accent hover:underline">Privacy Policy</a></span>
            </label>
            <motion.button
              type="submit"
              className="btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Create Account
            </motion.button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground uppercase">or sign up with</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {["Google", "Apple", "GitHub"].map((provider) => (
              <button
                key={provider}
                className="py-2.5 border border-border rounded-xl text-sm font-medium hover:bg-secondary transition-colors"
              >
                {provider}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-accent hover:underline font-medium">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
