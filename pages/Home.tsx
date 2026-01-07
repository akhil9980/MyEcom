
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="Hero Background"
            className="w-full h-full object-cover brightness-[0.85] animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-white text-5xl md:text-7xl font-serif mb-6 leading-tight animate-fade-in">
            Define Your <span className="italic text-slate-200">Aesthetic</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl mx-auto font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Discover the latest collection of premium clothing designed by MyEcom for the modern lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link 
              to="/shop?cat=Womens" 
              className="bg-white text-black px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-slate-100 transition-colors w-full sm:w-auto"
            >
              Shop Women
            </Link>
            <Link 
              to="/shop?cat=Mens" 
              className="bg-transparent text-white border border-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all w-full sm:w-auto"
            >
              Shop Men
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-slate-400 block mb-2">CURATED BY MyEcom</span>
            <h2 className="text-4xl font-serif text-slate-900">The Season's Best</h2>
          </div>
          <Link to="/shop" className="group flex items-center text-sm font-bold tracking-widest uppercase hover:text-slate-500 transition-colors mt-4 md:mt-0">
            View All <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Campaign Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Campaign"
                className="w-full rounded-sm shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-slate-400">MyEcom ORIGINALS</span>
              <h3 className="text-4xl md:text-5xl font-serif leading-tight">Comfort meets luxury in our Essentials line.</h3>
              <p className="text-slate-600 text-lg font-light leading-relaxed">
                Made from 100% organic cotton, our heavyweight essentials are designed to last. Each piece is meticulously crafted to provide a perfect fit that stays comfortable all day.
              </p>
              <Link to="/shop?cat=Essentials" className="inline-block border-b-2 border-black pb-1 text-sm font-bold tracking-widest uppercase hover:text-slate-500 transition-colors">
                Discover Essentials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">Join the MyEcom Circle</h2>
          <p className="text-slate-500 mb-8 font-light italic">Be the first to hear about new arrivals and exclusive seasonal drops.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-grow border-b border-slate-300 py-3 focus:border-black outline-none text-sm tracking-widest uppercase transition-colors"
            />
            <button className="bg-black text-white px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-slate-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
