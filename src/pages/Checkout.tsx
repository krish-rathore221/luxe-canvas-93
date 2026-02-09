import { useState } from "react";
import { motion } from "framer-motion";
import { Check, CreditCard, Truck, ClipboardList } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const steps = [
  { id: 1, label: "Shipping", icon: Truck },
  { id: 2, label: "Payment", icon: CreditCard },
  { id: 3, label: "Review", icon: ClipboardList },
];

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { items, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-32 text-center container-custom pb-20">
        <h1 className="text-3xl font-display font-bold mb-4">Nothing to Checkout</h1>
        <Link to="/shop" className="text-accent hover:underline">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 sm:pt-24">
      <div className="container-custom py-8 sm:py-12 max-w-4xl">
        <motion.h1
          className="text-3xl sm:text-4xl font-display font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Checkout
        </motion.h1>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-12">
          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center gap-2 sm:gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  currentStep >= step.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
              </div>
              <span className={`text-sm font-medium hidden sm:block ${currentStep >= step.id ? "text-foreground" : "text-muted-foreground"}`}>
                {step.label}
              </span>
              {i < steps.length - 1 && <div className={`w-8 sm:w-16 h-0.5 ${currentStep > step.id ? "bg-accent" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form area */}
          <motion.div
            className="lg:col-span-3"
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-display font-bold mb-4">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="First Name" className="input-floating" />
                  <input placeholder="Last Name" className="input-floating" />
                </div>
                <input placeholder="Email Address" type="email" className="input-floating" />
                <input placeholder="Street Address" className="input-floating" />
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="City" className="input-floating" />
                  <input placeholder="ZIP Code" className="input-floating" />
                </div>
                <input placeholder="Country" className="input-floating" />
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-display font-bold mb-4">Payment Method</h2>
                {["Credit Card", "PayPal", "Apple Pay"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-4 p-4 border border-border rounded-xl cursor-pointer hover:border-accent transition-colors"
                  >
                    <input type="radio" name="payment" className="accent-accent" defaultChecked={method === "Credit Card"} />
                    <span className="font-medium">{method}</span>
                  </label>
                ))}
                <div className="mt-6 space-y-4">
                  <input placeholder="Card Number" className="input-floating" />
                  <div className="grid grid-cols-2 gap-4">
                    <input placeholder="MM/YY" className="input-floating" />
                    <input placeholder="CVC" className="input-floating" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-display font-bold mb-4">Review Order</h2>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-4 p-3 bg-secondary rounded-xl">
                      <img src={item.product.image} alt={item.product.name} className="w-14 h-14 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{item.product.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-bold text-sm">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 ? (
                <button onClick={() => setCurrentStep(currentStep - 1)} className="btn-outline">
                  Back
                </button>
              ) : (
                <div />
              )}
              {currentStep < 3 ? (
                <motion.button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continue
                </motion.button>
              ) : (
                <motion.button
                  className="btn-accent"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => alert("Order placed! (Demo)")}
                >
                  Place Order
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Summary sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border/50 rounded-2xl p-6 sticky top-28">
              <h3 className="font-display font-bold mb-4">Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-accent">{totalPrice >= 100 ? "Free" : "$9.99"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between font-display font-bold text-lg">
                    <span>Total</span>
                    <span>${(totalPrice + (totalPrice < 100 ? 9.99 : 0) + totalPrice * 0.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
