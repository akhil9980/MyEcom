import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ChevronDown, X, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import CustomCursor from "../components/CustomCursor";
import { PRODUCTS, CATEGORIES, SUBCATEGORIES, BRANDS, PRICE_RANGES } from "../data/products";
import { FilterOptions } from "../types";

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("Newest");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Initialize filters from URL params
  const [filters, setFilters] = useState<FilterOptions>({
    categories: searchParams.get("cat") ? [searchParams.get("cat")!] : [],
    subcategories: [],
    brands: [],
    priceRange: { min: 0, max: Infinity },
    sizes: [],
    colors: [],
    rating: 0,
    inStock: false,
    discount: false,
  });

  // Get available subcategories based on selected category
  const availableSubcategories = useMemo(() => {
    if (filters.categories.length === 1 && filters.categories[0] !== "All") {
      const category = filters.categories[0] as keyof typeof SUBCATEGORIES;
      return SUBCATEGORIES[category] || [];
    }
    return [];
  }, [filters.categories]);

  // Get all unique sizes from products
  const availableSizes = useMemo(() => {
    const sizes = new Set<string>();
    PRODUCTS.forEach((product) => {
      product.sizes.forEach((size) => sizes.add(size));
    });
    return Array.from(sizes).sort();
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let products = PRODUCTS.filter((product) => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes("All")) {
        if (!filters.categories.includes(product.category)) return false;
      }

      // Subcategory filter
      if (filters.subcategories.length > 0 && !filters.subcategories.includes("All")) {
        if (!product.subcategory || !filters.subcategories.includes(product.subcategory)) {
          return false;
        }
      }

      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes("All Brands")) {
        if (!filters.brands.includes(product.brand)) return false;
      }

      // Price range filter
      if (
        product.price < filters.priceRange.min ||
        product.price > filters.priceRange.max
      ) {
        return false;
      }

      // Size filter
      if (filters.sizes.length > 0) {
        const hasSize = product.sizes.some((size) =>
          filters.sizes.includes(size)
        );
        if (!hasSize) return false;
      }

      // Rating filter
      if (filters.rating > 0 && product.rating < filters.rating) {
        return false;
      }

      // In stock filter
      if (filters.inStock && !product.inStock) {
        return false;
      }

      // Discount filter
      if (filters.discount && !product.originalPrice) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case "Price: Low to High":
        products.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        products.sort((a, b) => b.price - a.price);
        break;
      case "Top Rated":
        products.sort((a, b) => b.rating - a.rating);
        break;
      case "Newest":
      default:
        products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return products;
  }, [filters, sortBy]);

  // Get active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.categories.length > 0 && !filters.categories.includes("All"))
      count += filters.categories.length;
    if (
      filters.subcategories.length > 0 &&
      !filters.subcategories.includes("All")
    )
      count += filters.subcategories.length;
    if (filters.brands.length > 0 && !filters.brands.includes("All Brands"))
      count += filters.brands.length;
    if (filters.priceRange.min > 0 || filters.priceRange.max < Infinity)
      count += 1;
    if (filters.sizes.length > 0) count += filters.sizes.length;
    if (filters.rating > 0) count += 1;
    if (filters.inStock) count += 1;
    if (filters.discount) count += 1;
    return count;
  }, [filters]);

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-slate-200 bg-white sticky top-[72px] z-20 lg:ml-80"
        >
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-1">
                  {filters.categories.length > 0 &&
                  !filters.categories.includes("All")
                    ? filters.categories.join(", ")
                    : "All Products"}
                </h1>
                <p className="text-sm text-zinc-500">
                  {filteredProducts.length} products found
                </p>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white text-xs font-bold tracking-wider uppercase"
              >
                <SlidersHorizontal size={16} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-white text-zinc-900 px-2 py-0.5 rounded-full text-[10px]">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
              <div className="flex gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() =>
                      setFilters({
                        ...filters,
                        categories: [cat],
                        subcategories: [],
                      })
                    }
                    className={`whitespace-nowrap px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase transition-all ${
                      filters.categories.includes(cat)
                        ? "bg-zinc-900 text-white"
                        : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="border-t border-slate-200 bg-zinc-50">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
              {/* Active Filters */}
              <div className="flex items-center gap-2 flex-1 overflow-x-auto no-scrollbar">
                {activeFilterCount > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500 whitespace-nowrap">
                      Active Filters:
                    </span>
                    {filters.discount && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-white border border-zinc-200 text-xs text-zinc-700 whitespace-nowrap">
                        On Sale
                        <X
                          size={12}
                          className="cursor-pointer hover:text-zinc-900"
                          onClick={() =>
                            setFilters({ ...filters, discount: false })
                          }
                        />
                      </span>
                    )}
                    {filters.inStock && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-white border border-zinc-200 text-xs text-zinc-700 whitespace-nowrap">
                        In Stock
                        <X
                          size={12}
                          className="cursor-pointer hover:text-zinc-900"
                          onClick={() =>
                            setFilters({ ...filters, inStock: false })
                          }
                        />
                      </span>
                    )}
                    <button
                      onClick={() =>
                        setFilters({
                          categories: [],
                          subcategories: [],
                          brands: [],
                          priceRange: { min: 0, max: Infinity },
                          sizes: [],
                          colors: [],
                          rating: 0,
                          inStock: false,
                          discount: false,
                        })
                      }
                      className="text-xs text-zinc-400 hover:text-zinc-900 underline whitespace-nowrap"
                    >
                      Clear All
                    </button>
                  </div>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-zinc-600 hover:text-zinc-900 whitespace-nowrap">
                  Sort: {sortBy}
                  <ChevronDown size={14} />
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                  {["Newest", "Price: Low to High", "Price: High to Low", "Top Rated"].map(
                    (opt) => (
                      <button
                        key={opt}
                        className="w-full text-left px-4 py-2.5 text-xs font-medium tracking-wide hover:bg-zinc-50 transition-colors"
                        onClick={() => setSortBy(opt)}
                      >
                        {opt}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-[1920px] mx-auto">
          <div className="flex">
            {/* Desktop Filter Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="h-0"></div>
              <FilterSidebar
                isOpen={true}
                onClose={() => {}}
                filters={filters}
                onFilterChange={setFilters}
                availableFilters={{
                  categories: CATEGORIES.filter((c) => c !== "All"),
                  subcategories: availableSubcategories.filter((s) => s !== "All"),
                  brands: BRANDS.filter((b) => b !== "All Brands"),
                  sizes: availableSizes,
                  priceRanges: PRICE_RANGES,
                }}
              />
            </div>

            {/* Mobile Filter Sidebar */}
            <AnimatePresence>
              {isMobileFilterOpen && (
                <div className="lg:hidden">
                  <FilterSidebar
                    isOpen={isMobileFilterOpen}
                    onClose={() => setIsMobileFilterOpen(false)}
                    filters={filters}
                    onFilterChange={setFilters}
                    availableFilters={{
                      categories: CATEGORIES.filter((c) => c !== "All"),
                      subcategories: availableSubcategories.filter(
                        (s) => s !== "All"
                      ),
                      brands: BRANDS.filter((b) => b !== "All Brands"),
                      sizes: availableSizes,
                      priceRanges: PRICE_RANGES,
                    }}
                  />
                </div>
              )}
            </AnimatePresence>

            {/* Products Grid */}
            <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-20"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-serif text-zinc-900 mb-2">
                      No products found
                    </h3>
                    <p className="text-zinc-500 mb-6">
                      Try adjusting your filters or search criteria
                    </p>
                    <button
                      onClick={() =>
                        setFilters({
                          categories: [],
                          subcategories: [],
                          brands: [],
                          priceRange: { min: 0, max: Infinity },
                          sizes: [],
                          colors: [],
                          rating: 0,
                          inStock: false,
                          discount: false,
                        })
                      }
                      className="px-6 py-3 bg-zinc-900 text-white text-xs font-bold tracking-wider uppercase hover:bg-zinc-800 transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
