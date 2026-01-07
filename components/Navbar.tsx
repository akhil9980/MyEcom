
import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold tracking-[0.2em] text-slate-900">
              MyEcom
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wider text-slate-600">
            <Link to="/shop" className="hover:text-black transition-colors">NEW ARRIVALS</Link>
            <Link to="/shop?cat=Womens" className="hover:text-black transition-colors">WOMEN</Link>
            <Link to="/shop?cat=Mens" className="hover:text-black transition-colors">MEN</Link>
            <Link to="/shop?cat=Essentials" className="hover:text-black transition-colors">ESSENTIALS</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-5">
            <button className="hidden sm:block p-2 text-slate-600 hover:text-black transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="hidden sm:block p-2 text-slate-600 hover:text-black transition-colors">
              <User size={20} strokeWidth={1.5} />
            </button>
            <Link to="/checkout" className="p-2 relative text-slate-600 hover:text-black transition-colors">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-slate-900">New Arrivals</Link>
            <Link to="/shop?cat=Womens" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-slate-900">Women</Link>
            <Link to="/shop?cat=Mens" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-slate-900">Men</Link>
            <Link to="/shop?cat=Essentials" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-slate-900">Essentials</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
