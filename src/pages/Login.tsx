import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
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
          <h1 className="text-2xl font-display font-bold mt-6 mb-2">Welcome Back</h1>
          <p className="text-muted-foreground text-sm">Sign in to access your account</p>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-accent" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <a href="#" className="text-accent hover:underline">Forgot password?</a>
            </div>
            <motion.button
              type="submit"
              className="btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
            </motion.button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground uppercase">or continue with</span>
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
          Don't have an account?{" "}
          <Link to="/register" className="text-accent hover:underline font-medium">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
