
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShieldCheck, Truck, RefreshCw, Heart, Share2, Plus, Minus } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (!product) navigate('/shop');
    window.scrollTo(0, 0);
  }, [product, navigate]);

  if (!product || !selectedColor) return null;

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({
      id: `${product.id}-${selectedColor.name}-${selectedSize}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: selectedColor.imageUrl,
      color: selectedColor.name,
      size: selectedSize || 'One Size',
      quantity: quantity
    });
    
    setTimeout(() => {
      setIsAdding(false);
      // Optional: open a mini cart notification or navigate
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Images Column */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:w-24">
            {product.colors.map((color, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedColor(color)}
                className={`flex-shrink-0 w-20 md:w-full aspect-[3/4] border-2 transition-all ${selectedColor.name === color.name ? 'border-black' : 'border-transparent'}`}
              >
                <img src={color.imageUrl} alt={color.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="flex-grow aspect-[3/4] bg-slate-50 relative group">
            <img 
              src={selectedColor.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-2">{product.brand}</p>
              <h1 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">{product.name}</h1>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-slate-400 hover:text-black transition-colors"><Share2 size={18} /></button>
              <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Heart size={18} /></button>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center text-sm font-semibold text-slate-900">
              <Star size={14} className="fill-yellow-400 text-yellow-400 mr-1" />
              {product.rating}
              <span className="ml-1 text-slate-400 font-normal">({product.reviewsCount} reviews)</span>
            </div>
            <div className="h-4 w-px bg-slate-200"></div>
            <span className="text-sm font-medium text-green-600">In Stock</span>
          </div>

          <div className="mb-8">
            <span className="text-2xl font-bold text-slate-900">${product.price}.00</span>
            {product.originalPrice && (
              <span className="ml-3 text-lg text-slate-400 line-through">${product.originalPrice}.00</span>
            )}
          </div>

          {/* Color Select */}
          <div className="mb-8">
            <p className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-3">Color: {selectedColor.name}</p>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border border-slate-200 transition-all ${selectedColor.name === color.name ? 'ring-2 ring-black ring-offset-2' : ''}`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size Select */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <p className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Size</p>
              <button className="text-[10px] font-bold tracking-widest uppercase underline text-slate-400">Size Guide</button>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-xs font-bold border transition-all ${
                    selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-slate-900 border-slate-200 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex items-center border border-slate-200 h-14">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="px-4 text-slate-500 hover:text-black transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-10 text-center font-bold">{quantity}</span>
              <button 
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-4 text-slate-500 hover:text-black transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`flex-grow h-14 bg-black text-white text-xs font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center space-x-2 ${isAdding ? 'opacity-70 cursor-not-allowed' : 'hover:bg-slate-800'}`}
            >
              {isAdding ? 'Adding...' : 'Add to Bag'}
            </button>
          </div>

          {/* Service Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-t border-slate-100">
            <div className="flex flex-col items-center text-center space-y-2">
              <Truck size={20} strokeWidth={1.5} className="text-slate-400" />
              <p className="text-[9px] font-bold tracking-widest uppercase text-slate-600">Fast Global Delivery</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <RefreshCw size={20} strokeWidth={1.5} className="text-slate-400" />
              <p className="text-[9px] font-bold tracking-widest uppercase text-slate-600">30-Day Easy Returns</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <ShieldCheck size={20} strokeWidth={1.5} className="text-slate-400" />
              <p className="text-[9px] font-bold tracking-widest uppercase text-slate-600">Secure Checkout</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-slate-500 mb-4">The Detail</h4>
            <p className="text-slate-600 font-light leading-relaxed">
              {product.description}
              <br /><br />
              • Relaxed fit<br />
              • Sustainable materials<br />
              • Expertly finished seams
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
