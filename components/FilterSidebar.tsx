import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp, Star } from "lucide-react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    categories: string[];
    subcategories: string[];
    brands: string[];
    priceRange: { min: number; max: number };
    sizes: string[];
    rating: number;
    inStock: boolean;
    discount: boolean;
  };
  onFilterChange: (filters: any) => void;
  availableFilters: {
    categories: string[];
    subcategories: string[];
    brands: string[];
    sizes: string[];
    priceRanges: { label: string; min: number; max: number }[];
  };
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  availableFilters,
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "category",
    "price",
    "size",
  ]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handleSubcategoryChange = (subcategory: string) => {
    const newSubcategories = filters.subcategories.includes(subcategory)
      ? filters.subcategories.filter((s) => s !== subcategory)
      : [...filters.subcategories, subcategory];
    onFilterChange({ ...filters, subcategories: newSubcategories });
  };

  const handleBrandChange = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters, brand];
    onFilterChange({ ...filters, brands: newBrands });
  };

  const handlePriceRangeChange = (range: { min: number; max: number }) => {
    onFilterChange({ ...filters, priceRange: range });
  };

  const handleSizeChange = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    onFilterChange({ ...filters, sizes: newSizes });
  };

  const handleRatingChange = (rating: number) => {
    onFilterChange({ ...filters, rating });
  };

  const clearAllFilters = () => {
    onFilterChange({
      categories: [],
      subcategories: [],
      brands: [],
      priceRange: { min: 0, max: Infinity },
      sizes: [],
      rating: 0,
      inStock: false,
      discount: false,
    });
  };

  const FilterSection = ({
    title,
    id,
    children,
  }: {
    title: string;
    id: string;
    children: React.ReactNode;
  }) => {
    const isExpanded = expandedSections.includes(id);

    return (
      <div className="border-b border-slate-200 py-4">
        <button
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between text-left mb-3"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-900">
            {title}
          </span>
          {isExpanded ? (
            <ChevronUp size={16} className="text-zinc-400" />
          ) : (
            <ChevronDown size={16} className="text-zinc-400" />
          )}
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-[72px] left-0 h-[calc(100vh-72px)] w-80 bg-white border-r border-slate-200 z-30 lg:z-30 overflow-y-auto"
      >
        {/* Header */}
        <div className="lg:sticky lg:top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between z-10">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-900">
            Filters
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={clearAllFilters}
              className="text-[10px] font-bold tracking-wider uppercase text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Filter Content */}
        <div className="p-6">
          {/* Category Filter */}
          <FilterSection title="Category" id="category">
            <div className="space-y-2">
              {availableFilters.categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer"
                  />
                  <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Subcategory Filter */}
          {filters.categories.length > 0 &&
            filters.categories[0] !== "All" &&
            availableFilters.subcategories.length > 0 && (
              <FilterSection title="Type" id="subcategory">
                <div className="space-y-2">
                  {availableFilters.subcategories.map((subcategory) => (
                    <label
                      key={subcategory}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={filters.subcategories.includes(subcategory)}
                        onChange={() => handleSubcategoryChange(subcategory)}
                        className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer"
                      />
                      <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">
                        {subcategory}
                      </span>
                    </label>
                  ))}
                </div>
              </FilterSection>
            )}

          {/* Price Range Filter */}
          <FilterSection title="Price" id="price">
            <div className="space-y-2">
              {availableFilters.priceRanges.map((range) => (
                <label
                  key={range.label}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    checked={
                      filters.priceRange.min === range.min &&
                      filters.priceRange.max === range.max
                    }
                    onChange={() =>
                      handlePriceRangeChange({ min: range.min, max: range.max })
                    }
                    className="w-4 h-4 border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer"
                  />
                  <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Brand Filter */}
          <FilterSection title="Brand" id="brand">
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {availableFilters.brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer"
                  />
                  <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Size Filter */}
          <FilterSection title="Size" id="size">
            <div className="flex flex-wrap gap-2">
              {availableFilters.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={`px-3 py-1.5 text-xs font-medium border rounded transition-all ${
                    filters.sizes.includes(size)
                      ? "bg-zinc-900 text-white border-zinc-900"
                      : "bg-white text-zinc-700 border-zinc-300 hover:border-zinc-900"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </FilterSection>

          {/* Rating Filter */}
          <FilterSection title="Rating" id="rating">
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.rating === rating}
                    onChange={() => handleRatingChange(rating)}
                    className="w-4 h-4 border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer"
                  />
                  <div className="flex items-center gap-1">
                    {[...Array(rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-zinc-900 text-zinc-900"
                      />
                    ))}
                    <span className="text-sm text-zinc-700 ml-1">& Up</span>
                  </div>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Additional Filters */}
          <FilterSection title="More Filters" id="more">
            <div className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) =>
                    onFilterChange({ ...filters, inStock: e.target.checked })
                  }
                  className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer"
                />
                <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">
                  In Stock Only
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.discount}
                  onChange={(e) =>
                    onFilterChange({ ...filters, discount: e.target.checked })
                  }
                  className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer"
                />
                <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">
                  On Sale
                </span>
              </label>
            </div>
          </FilterSection>
        </div>
      </motion.div>
    </>
  );
};

export default FilterSidebar;
