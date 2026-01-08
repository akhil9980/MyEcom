import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import { CartProvider } from "./context/CartContext";

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

const App: React.FC = () => {
  return (
    <CartProvider>
      <PageLoader />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/home"
            element={
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                  <Home />
                </main>
                <Footer />
              </div>
            }
          />
          <Route
            path="/shop"
            element={
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                  <Shop />
                </main>
                <Footer />
              </div>
            }
          />
          <Route
            path="/product/:id"
            element={
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                  <ProductDetails />
                </main>
                <Footer />
              </div>
            }
          />
          <Route
            path="/checkout"
            element={
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                  <Checkout />
                </main>
                <Footer />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                  <Profile />
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
