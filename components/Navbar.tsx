import React, { useState, useEffect } from "react";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import SearchModal from "./SearchModal";
import logoImage from "../assets/logo.png";

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Detect scroll for navbar style changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/shop", label: "NEW ARRIVALS" },
    { to: "/shop?cat=Womens", label: "WOMEN" },
    { to: "/shop?cat=Mens", label: "MEN" },
    { to: "/shop?cat=Essentials", label: "ESSENTIALS" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-zinc-200 shadow-sm"
          : "bg-white/80 backdrop-blur-md border-b border-zinc-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-zinc-600 hover:text-zinc-900 focus:outline-none"
              data-cursor-hover
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="group" data-cursor-hover>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={logoImage}
                  alt="SnappBuy"
                  className="h-8 sm:h-10 w-auto"
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Links with animated underline */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wider text-zinc-600">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} label={link.label} />
            ))}
          </div>

          {/* Actions with staggered entrance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center space-x-5"
          >
            <IconButton
              icon={<Search size={20} strokeWidth={1.5} />}
              label="Search"
              onClick={() => setIsSearchOpen(true)}
            />
            <Link to="/profile">
              <IconButton
                icon={<User size={20} strokeWidth={1.5} />}
                label="Account"
              />
            </Link>
            <Link to="/checkout" className="relative group" data-cursor-hover>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-zinc-600 hover:text-black transition-colors"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu with slide animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </motion.nav>
  );
};

// Individual nav link with custom underline animation
const NavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor-hover
    >
      <motion.span
        className="text-zinc-600 group-hover:text-black transition-colors duration-300"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
      {/* Animated underline */}
      <motion.span
        className="absolute -bottom-1 left-0 h-[2px] bg-black"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </Link>
  );
};

// Icon button with ripple effect
const IconButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}> = ({ icon, label, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="hidden sm:block p-2 text-zinc-600 hover:text-black transition-colors relative overflow-hidden group"
      aria-label={label}
      data-cursor-hover
    >
      {icon}
      {/* Ripple effect */}
      <motion.span
        className="absolute inset-0 bg-zinc-100 rounded-full scale-0 group-hover:scale-100 -z-10"
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.button>
  );
};

export default Navbar;
