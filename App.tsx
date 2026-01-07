import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import { X, Phone } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-400 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <h3 className="text-white text-xl font-serif font-bold tracking-widest">
            ONCY TECH
          </h3>
          <p className="text-sm font-light leading-relaxed">
            Elevating everyday aesthetics through premium materials and timeless
            design.
          </p>
        </div>
        <div>
          <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            Explore
          </h4>
          <ul className="space-y-4 text-xs tracking-widest uppercase font-medium">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Sustainability
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            Service
          </h4>
          <ul className="space-y-4 text-xs tracking-widest uppercase font-medium">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Track Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Shipping Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            Connect
          </h4>
          <ul className="space-y-4 text-xs tracking-widest uppercase font-medium">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Pinterest
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Stores
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-bold tracking-widest uppercase">
          © 2024 MyEcom. All Rights Reserved.
        </p>
        <div className="flex space-x-6 text-[10px] font-bold tracking-widest uppercase">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const WelcomePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-fade-in"
        onClick={() => setIsVisible(false)}
      ></div>
      <div className="relative bg-[#262626] border border-white/10 w-full max-w-lg p-12 text-center shadow-2xl animate-fade-in flex flex-col items-center rounded-sm overflow-hidden">
        {/* Animated Background Element */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 mb-10 relative">
          Developed by
        </p>

        {/* Company Logo */}
        <div className="relative w-full max-w-[280px] mb-10 flex items-center justify-center">
          <img 
            src="/assets/oncyTech-removebg-preview.png" 
            alt="OncyTech Logo" 
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

        <h2 className="text-3xl font-serif text-white mb-3 tracking-[0.2em] uppercase">
          OncyTech
        </h2>
        <div className="w-16 h-[1px] bg-white/20 mb-10"></div>

        <div className="space-y-4 relative">
          <div className="flex items-center justify-center space-x-2 text-white/50">
            <Phone size={14} />
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase">
              Connect with Us
            </p>
          </div>
          <a
            href="tel:9599663171"
            className="text-3xl font-bold text-white hover:text-blue-400 transition-all flex items-center justify-center"
          >
            9599663171
          </a>
        </div>

        <div className="mt-12 flex items-center space-x-2 text-white/20">
          <div className="w-8 h-[1px] bg-white/10"></div>
          <p className="text-[9px] font-bold tracking-widest uppercase">
            Auto-closing in 20s
          </p>
          <div className="w-8 h-[1px] bg-white/10"></div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <WelcomePopup />
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
