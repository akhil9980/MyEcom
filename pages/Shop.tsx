
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('cat') || 'All';
  const [sortBy, setSortBy] = useState('Newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = PRODUCTS.filter(p => 
    currentCategory === 'All' || p.category === currentCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      <header className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-serif text-slate-900 mb-2">{currentCategory} Collection</h1>
        <p className="text-slate-500 text-sm font-light">Explore our curated selection of high-quality clothing.</p>
      </header>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-6 border-b border-slate-100 gap-4">
        {/* Categories Tabs */}
        <div className="flex overflow-x-auto no-scrollbar space-x-8 w-full md:w-auto pb-2 md:pb-0">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSearchParams({ cat })}
              className={`text-xs font-bold tracking-widest uppercase transition-colors whitespace-nowrap border-b-2 pb-2 ${
                currentCategory === cat ? 'border-black text-black' : 'border-transparent text-slate-400 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
          <button 
            className="flex items-center text-xs font-bold tracking-widest uppercase text-slate-600 hover:text-black"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={14} className="mr-2" />
            Filter
          </button>
          <div className="relative group">
            <button className="flex items-center text-xs font-bold tracking-widest uppercase text-slate-600 hover:text-black">
              Sort by: {sortBy}
              <ChevronDown size={14} className="ml-2" />
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 border border-slate-100">
              {['Newest', 'Price: Low to High', 'Price: High to Low', 'Top Rated'].map(opt => (
                <button
                  key={opt}
                  className="w-full text-left px-4 py-2 text-[10px] font-bold tracking-widest uppercase hover:bg-slate-50 transition-colors"
                  onClick={() => setSortBy(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-400 font-serif italic text-xl">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
