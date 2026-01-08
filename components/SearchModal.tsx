import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../constants";

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
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
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
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-3xl z-50 px-4"
          >
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-4 p-6 border-b border-zinc-200">
                <SearchIcon size={24} className="text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search for products, brands..."
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
              <div className="max-h-[500px] overflow-y-auto">
                {searchQuery.length > 0 ? (
                  filteredProducts.length > 0 ? (
                    <div className="p-4 space-y-2">
                      {filteredProducts.slice(0, 8).map((product) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          whileHover={{ backgroundColor: "#f4f4f5" }}
                          onClick={() => handleProductClick(product.id)}
                          className="flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors"
                        >
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-zinc-900">
                              {product.name}
                            </p>
                            <p className="text-xs text-zinc-500">
                              {product.brand} • {product.category}
                            </p>
                          </div>
                          <p className="text-sm font-semibold text-zinc-900">
                            ${product.price}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-12 text-center">
                      <p className="text-zinc-500">No products found</p>
                      <p className="text-sm text-zinc-400 mt-2">
                        Try searching for something else
                      </p>
                    </div>
                  )
                ) : (
                  <div className="p-12 text-center">
                    <SearchIcon
                      size={48}
                      className="mx-auto text-zinc-300 mb-4"
                    />
                    <p className="text-zinc-500">Start typing to search</p>
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
