
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div 
      className="group relative flex flex-col animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-slate-100 rounded-sm">
        <img 
          src={isHovered && product.images[1] ? product.images[1] : selectedColor.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-white px-2 py-1 text-[10px] font-bold tracking-widest uppercase text-black border border-black/5">
            NEW
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 text-[10px] font-bold tracking-widest uppercase">
            SALE
          </span>
        )}
      </Link>

      <div className="mt-4 flex flex-col space-y-1">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[11px] text-slate-400 font-bold tracking-widest uppercase">{product.brand}</p>
            <Link to={`/product/${product.id}`} className="text-sm font-medium text-slate-800 hover:underline">{product.name}</Link>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm font-semibold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>

        {/* Color Selectors */}
        <div className="flex items-center space-x-2 mt-2">
          {product.colors.map((color, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedColor(color)}
              className={`w-3.5 h-3.5 rounded-full border border-slate-200 transition-all ${selectedColor.name === color.name ? 'ring-1 ring-offset-1 ring-slate-400' : ''}`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>

        <div className="flex items-center text-xs text-slate-400 mt-1">
          <Star size={10} className="fill-yellow-400 text-yellow-400 mr-1" />
          <span>{product.rating}</span>
          <span className="mx-1">•</span>
          <span>{product.reviewsCount} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
