import { useState } from "react";
import { motion } from "framer-motion";
import { Package, User, Settings, LogOut, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const mockOrders = [
  { id: "ORD-7829", date: "Jan 15, 2024", status: "Delivered", total: 478.0, items: 3 },
  { id: "ORD-6543", date: "Dec 28, 2023", status: "Shipped", total: 189.0, items: 1 },
  { id: "ORD-5417", date: "Dec 10, 2023", status: "Delivered", total: 299.0, items: 2 },
  { id: "ORD-4102", date: "Nov 22, 2023", status: "Delivered", total: 79.0, items: 1 },
];

const tabs = [
  { id: "orders", label: "Orders", icon: Package },
  { id: "profile", label: "Profile", icon: User },
  { id: "settings", label: "Settings", icon: Settings },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="pt-20 sm:pt-24">
      <div className="container-custom py-8 sm:py-12">
        <motion.h1
          className="text-3xl sm:text-4xl font-display font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Account
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-card border border-border/50 rounded-2xl p-4 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/70 hover:bg-secondary"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </button>
              ))}
              <Link
                to="/"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-secondary transition-all"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Link>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="md:col-span-3"
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "orders" && (
              <div className="bg-card border border-border/50 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h2 className="font-display font-bold text-xl">Order History</h2>
                </div>
                <div className="divide-y divide-border">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="p-4 sm:p-6 flex items-center justify-between hover:bg-secondary/30 transition-colors">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.date} · {order.items} item{order.items > 1 ? "s" : ""}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-display font-bold">${order.total.toFixed(2)}</p>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8">
                <h2 className="font-display font-bold text-xl mb-6">Profile Information</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">First Name</label>
                      <input defaultValue="John" className="input-floating" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Last Name</label>
                      <input defaultValue="Doe" className="input-floating" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email</label>
                    <input type="email" defaultValue="john@example.com" className="input-floating" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone</label>
                    <input type="tel" defaultValue="+1 (555) 123-4567" className="input-floating" />
                  </div>
                  <motion.button
                    type="submit"
                    className="btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Save Changes
                  </motion.button>
                </form>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8">
                <h2 className="font-display font-bold text-xl mb-6">Settings</h2>
                <div className="space-y-6">
                  {[
                    { label: "Email Notifications", desc: "Receive order updates and promotions" },
                    { label: "SMS Notifications", desc: "Get text alerts for shipping updates" },
                    { label: "Marketing Emails", desc: "Stay updated with new arrivals and sales" },
                  ].map((setting, i) => (
                    <div key={setting.label} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{setting.label}</p>
                        <p className="text-xs text-muted-foreground">{setting.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={i === 0} />
                        <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-accent transition-colors after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
