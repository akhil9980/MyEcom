import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredProducts = PRODUCTS.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.subcategory &&
        product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    onClose();
    setSearchQuery("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-6xl z-50 px-4"
          >
            <div className="bg-white rounded-sm shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-4 p-6 border-b border-zinc-200">
                <SearchIcon size={24} className="text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search for products, brands, categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-lg outline-none text-zinc-900 placeholder:text-zinc-400"
                  autoFocus
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-zinc-600" />
                </motion.button>
              </div>

              {/* Search Results */}
              <div className="max-h-[600px] overflow-y-auto">
                {searchQuery.length > 0 ? (
                  filteredProducts.length > 0 ? (
                    <div className="p-6">
                      <div className="mb-4 text-sm text-zinc-500">
                        {filteredProducts.length} products found
                      </div>
                      {/* Grid Layout */}
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredProducts.slice(0, 12).map((product, index) => (
                          <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => handleProductClick(product.id)}
                            className="group cursor-pointer"
                          >
                            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-2">
                              <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              {/* Badges */}
                              {product.originalPrice && (
                                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-[9px] font-bold tracking-wider">
                                  {Math.round(
                                    ((product.originalPrice - product.price) /
                                      product.originalPrice) *
                                      100
                                  )}
                                  % OFF
                                </div>
                              )}
                              {product.isNew && !product.originalPrice && (
                                <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-[9px] font-bold tracking-wider">
                                  NEW
                                </div>
                              )}
                            </div>
                            <div className="space-y-1">
                              <p className="text-[9px] text-zinc-400 font-bold tracking-wider uppercase">
                                {product.brand}
                              </p>
                              <h3 className="text-xs font-medium text-zinc-900 line-clamp-2 group-hover:underline">
                                {product.name}
                              </h3>
                              <div className="flex items-center gap-2">
                                <p className="text-sm font-semibold text-zinc-900">
                                  ${product.price}
                                </p>
                                {product.originalPrice && (
                                  <p className="text-xs text-zinc-400 line-through">
                                    ${product.originalPrice}
                                  </p>
                                )}
                              </div>
                              <div className="flex items-center text-[10px] text-zinc-400">
                                <Star
                                  size={10}
                                  className="fill-yellow-400 text-yellow-400 mr-1"
                                />
                                <span>{product.rating}</span>
                                <span className="mx-1">·</span>
                                <span>{product.reviewsCount}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      {filteredProducts.length > 12 && (
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          onClick={() => {
                            navigate(`/shop?search=${searchQuery}`);
                            onClose();
                          }}
                          className="mt-6 w-full py-3 bg-zinc-900 text-white text-xs font-bold tracking-wider uppercase hover:bg-zinc-800 transition-colors"
                        >
                          View All {filteredProducts.length} Results
                        </motion.button>
                      )}
                    </div>
                  ) : (
                    <div className="p-12 text-center">
                      <p className="text-zinc-500 font-medium">No products found</p>
                      <p className="text-sm text-zinc-400 mt-2">
                        Try searching with different keywords
                      </p>
                    </div>
                  )
                ) : (
                  <div className="p-12 text-center">
                    <SearchIcon
                      size={48}
                      className="mx-auto text-zinc-300 mb-4"
                    />
                    <p className="text-zinc-500 font-medium">Start typing to search</p>
                    <p className="text-sm text-zinc-400 mt-2">
                      Search for products, brands, or categories
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
