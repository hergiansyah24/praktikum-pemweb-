"use client";

import React, { useState, useMemo } from "react";

interface Product {
  id: string;
  letter: string;
  name: string;
  edition: string;
  volume: string;
  priceEur: number;
  priceIdr: number;
  category: "Eau de Parfum" | "Room Spray" | "Scented Candle";
  notes: string;
  topNotes: string;
  heartNotes: string;
  baseNotes: string;
  description: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: "terra-edp",
    letter: "T",
    name: "T · TERRA",
    edition: "Eau de Parfum",
    volume: "50 ML / 1.7 FL OZ",
    priceEur: 145,
    priceIdr: 2450000,
    category: "Eau de Parfum",
    notes: "Wet Slate · Smoked Frankincense · Raw Cedar",
    topNotes: "Pink Pepper, Bergamot",
    heartNotes: "Wet Stone Accord, Frankincense Resin",
    baseNotes: "Atlas Cedarwood, Haitian Vetiver",
    description: "A mineral, rain-soaked earth scent captured on raw granite plinths in natural morning light.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "umbra-edp",
    letter: "U",
    name: "U · UMBRA",
    edition: "Eau de Parfum",
    volume: "50 ML / 1.7 FL OZ",
    priceEur: 165,
    priceIdr: 2800000,
    category: "Eau de Parfum",
    notes: "Orris Root · Black Tea · Hinoki Wood",
    topNotes: "Smoked Black Tea, Crushed Cardamom",
    heartNotes: "Florentine Orris, Violet Leaf",
    baseNotes: "Hinoki Cypress, Clean White Musk",
    description: "Quiet shadow in a concrete corridor. Powdery Tuscan orris layered over deep Kyoto cypress.",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sillage-04",
    letter: "S",
    name: "S · SILLAGE NO. 04",
    edition: "Eau de Parfum",
    volume: "50 ML / 1.7 FL OZ",
    priceEur: 150,
    priceIdr: 2600000,
    category: "Eau de Parfum",
    notes: "Fig Leaf · Bergamot · Warm Suede",
    topNotes: "Sunlit Fig Leaf, Calabrian Bergamot",
    heartNotes: "Warm Skin Accord, Pale Iris",
    baseNotes: "Suede Leather, Blonde Woods, Amber",
    description: "The signature maison creation. An intimate, close-to-the-skin fragrance that lingers long after departure.",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "xerophyte-edp",
    letter: "X",
    name: "X · XEROPHYTE",
    edition: "Eau de Parfum",
    volume: "50 ML / 1.7 FL OZ",
    priceEur: 155,
    priceIdr: 2650000,
    category: "Eau de Parfum",
    notes: "Desert Sage · White Amber · Dry Papyrus",
    topNotes: "Wild Sage, Sunbaked Lime",
    heartNotes: "Egyptian Papyrus, Dry Grass Accord",
    baseNotes: "White Ambergris, Cedarwood",
    description: "Inspired by resilient flora thriving in minimalist arid environments. Clean, crisp, and ethereal.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "room-spray-u",
    letter: "U",
    name: "U · ROOM SPRAY",
    edition: "Interior Fragrance Mist",
    volume: "100 ML / 3.4 FL OZ",
    priceEur: 95,
    priceIdr: 1600000,
    category: "Room Spray",
    notes: "Hinoki Cypress · Smoked Amber · Cedar",
    topNotes: "Cypress Needles, Crushed Juniper",
    heartNotes: "Smoked Hinoki Wood, Warm Linen",
    baseNotes: "Dry Amber, Japanese Cedar",
    description: "An atmospheric interior mist designed to elevate quiet architectural living spaces.",
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "candle-s",
    letter: "S",
    name: "S · SCENTED CANDLE",
    edition: "Hand-Poured Soy Candle",
    volume: "250 G / 8.8 OZ",
    priceEur: 85,
    priceIdr: 1450000,
    category: "Scented Candle",
    notes: "Bergamot · Black Tea · French Wax",
    topNotes: "Earl Grey Accord, Lemon Rind",
    heartNotes: "Steeped Black Tea, Warm Honey",
    baseNotes: "Natural Vegetable Wax, Sandalwood",
    description: "Housed in heavy frosted glass. Burn time approximately 60 hours with a slow, even flame.",
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "room-spray-t",
    letter: "T",
    name: "T · ROOM SPRAY",
    edition: "Interior Fragrance Mist",
    volume: "100 ML / 3.4 FL OZ",
    priceEur: 95,
    priceIdr: 1600000,
    category: "Room Spray",
    notes: "Mineral Slate · Rain Water · Frankincense",
    topNotes: "Clean Rain Accord, Mint Leaf",
    heartNotes: "Wet Slate, Frankincense Smoke",
    baseNotes: "White Cedar, Cashmere Musk",
    description: "Cleansing atmospheric mist. Transforms any bedroom or gallery studio into a meditative sanctuary.",
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "monolith-edp",
    letter: "M",
    name: "M · MONOLITH",
    edition: "Eau de Parfum",
    volume: "100 ML / 3.4 FL OZ",
    priceEur: 210,
    priceIdr: 3500000,
    category: "Eau de Parfum",
    notes: "Haitian Vetiver · Cold Amber · Clean Musk",
    topNotes: "Black Pepper, Alpine Juniper",
    heartNotes: "Limestone Concrete Accord, Raw Cedar",
    baseNotes: "Haitian Vetiver, Fossilized Amber",
    description: "Heavy architectural mass translated into scent. Sharp vetiver structured against cold clean stone.",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
  },
];

interface CartItem {
  product: Product;
  quantity: number;
}

export default function Home() {
  const [currency, setCurrency] = useState<"EUR" | "IDR">("EUR");
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([
    { product: PRODUCTS[2], quantity: 1 }, // S · SILLAGE NO. 04 in bag
  ]);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        activeCategory === "ALL"
          ? true
          : activeCategory === "EDP"
          ? p.category === "Eau de Parfum"
          : activeCategory === "SPRAY"
          ? p.category === "Room Spray"
          : p.category === "Scented Candle";

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.letter.toLowerCase().includes(q) ||
        p.notes.toLowerCase().includes(q) ||
        p.edition.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const cartTotalItems = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const cartSubtotalEur = useMemo(() => {
    return cart.reduce((total, item) => total + item.product.priceEur * item.quantity, 0);
  }, [cart]);

  const cartSubtotalIdr = useMemo(() => {
    return cart.reduce((total, item) => total + item.product.priceIdr * item.quantity, 0);
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const formatPrice = (eur: number, idr: number) => {
    if (currency === "EUR") {
      return `€${eur}`;
    }
    return `Rp ${idr.toLocaleString("id-ID")}`;
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 5000);
      setNewsletterEmail("");
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
      {/* 1. CLEAN MODERN NAVBAR (No announcement bar above, exactly matching image1) */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-[#f0f0f0] transition-colors">
        <div className="w-full px-5 md:px-10 h-16 md:h-18 flex items-center justify-between">
          {/* Left Zone: Menu Icon (=) + Nav Links (Home, Katalog, Contact) */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Minimalist 2-line menu icon as seen in image1 */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-[#111111] hover:opacity-70 transition-opacity focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
              title="Menu"
            >
              <svg className="w-5 h-4" viewBox="0 0 20 14" fill="none">
                <line x1="0" y1="3" x2="20" y2="3" stroke="#111111" strokeWidth="1.5" />
                <line x1="0" y1="11" x2="20" y2="11" stroke="#111111" strokeWidth="1.5" />
              </svg>
            </button>

            {/* Nav links on desktop */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              <a href="#top" className="nav-item">
                Home
              </a>
              <a href="#katalog" className="nav-item">
                Katalog
              </a>
              <a href="#ambiance" className="nav-item">
                Ambiance
              </a>
              <a href="#contact" className="nav-item">
                Contact
              </a>
            </nav>
          </div>

          {/* Center Zone: Clean Modern Wordmark 'UY' (exactly like image1) */}
          <div className="flex items-center justify-center">
            <a href="#top" className="text-[26px] md:text-[32px] font-medium tracking-[2px] leading-none text-[#111111] hover:opacity-85 transition-opacity" aria-label="UY Studio">
              UY
            </a>
          </div>

          {/* Right Zone: Search, Account, Bag Icons & Currency */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Currency selector */}
            <button
              onClick={() => setCurrency(currency === "EUR" ? "IDR" : "EUR")}
              className="hidden sm:inline-block text-[12px] tracking-[0.5px] uppercase text-[#666666] hover:text-[#111111] transition-colors cursor-pointer"
              title="Switch currency"
            >
              {currency} ▾
            </button>

            {/* Search Icon (Pencarian) */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-1 text-[#111111] hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Search fragrances"
              title="Search"
            >
              <svg className="w-4 h-4" fill="none" stroke="#111111" strokeWidth="1.4" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            {/* Account Icon */}
            <a
              href="#contact"
              className="hidden sm:block p-1 text-[#111111] hover:opacity-70 transition-opacity"
              aria-label="Account"
              title="Account"
            >
              <svg className="w-4 h-4" fill="none" stroke="#111111" strokeWidth="1.4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </a>

            {/* Shopping Bag Icon (Keranjang Belanja) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 p-1 text-[#111111] hover:opacity-70 transition-opacity cursor-pointer relative"
              aria-label="Shopping bag"
              title="Shopping Bag"
            >
              <svg className="w-4 h-4" fill="none" stroke="#111111" strokeWidth="1.4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartTotalItems > 0 && (
                <span className="text-[12px] font-medium tracking-tight">
                  ({cartTotalItems})
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Expandable Clean Search Bar */}
        {isSearchOpen && (
          <div className="w-full bg-white border-t border-[#f0f0f0] py-4 px-6 md:px-12 flex items-center justify-between gap-4">
            <div className="flex-1 flex items-center gap-3 max-w-xl mx-auto">
              <svg className="w-4 h-4 text-[#888888]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by perfume name, note (e.g. Fig, Cedar, Orris)..."
                className="w-full bg-transparent border-none py-1.5 text-[14px] text-[#111111] placeholder:text-[#999999] outline-none"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[12px] uppercase text-[#888888] hover:text-[#111111]"
                >
                  Clear
                </button>
              )}
            </div>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-[#888888] hover:text-[#111111] text-lg px-2"
              aria-label="Close search"
            >
              ✕
            </button>
          </div>
        )}

        {/* Mobile Slide-down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full bg-white border-t border-[#f0f0f0] px-6 py-6 flex flex-col gap-4">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[13px] uppercase tracking-[1px] py-1 border-b border-[#f5f5f5]"
            >
              Home
            </a>
            <a
              href="#katalog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[13px] uppercase tracking-[1px] py-1 border-b border-[#f5f5f5]"
            >
              Katalog
            </a>
            <a
              href="#ambiance"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[13px] uppercase tracking-[1px] py-1 border-b border-[#f5f5f5]"
            >
              Ambiance
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[13px] uppercase tracking-[1px] py-1 border-b border-[#f5f5f5]"
            >
              Contact
            </a>
            <div className="flex items-center justify-between pt-2 text-[12px] uppercase text-[#777777]">
              <span>Currency:</span>
              <button
                onClick={() => setCurrency(currency === "EUR" ? "IDR" : "EUR")}
                className="underline text-[#111111]"
              >
                {currency}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION (Exactly reproducing Image 1: Minimalist Still Life with Perfumes on White Table, Cast Shadows, and Centered Text) */}
      <section id="top" className="relative w-full overflow-hidden bg-[#fafafa]">
        {/* Container with precise aspect ratio to crop hero photo from Image 1 cleanly */}
        <div className="relative w-full h-[52vw] min-h-[340px] max-h-[680px] overflow-hidden">
          <div className="relative w-full h-[152%] -mt-[15.5%] overflow-hidden">
            <img
              src="/hero-uy.png"
              alt="UY Studio Fragrance Collection — Refine yourself. Define yourself."
              className="w-full h-full object-cover object-top select-none pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* 3. AMBIANCE, CURATED BY DESIGN (Exactly like Image 1 subtitle) */}
      <section id="ambiance" className="py-14 md:py-20 px-6 text-center bg-white border-b border-[#f0f0f0]">
        <h2 className="text-[14px] md:text-[15px] uppercase tracking-[3px] font-medium text-[#111111]">
          AMBIANCE, CURATED BY DESIGN
        </h2>
        <p className="mt-2.5 text-[13px] md:text-[14px] text-[#777777] tracking-[0.2px] max-w-xl mx-auto leading-relaxed">
          Refined ambiances through multi-sensory lifestyle design.
        </p>
      </section>

      {/* 4. KATALOG PRODUK (Modern, clean, high-end perfume website layout) */}
      <section id="katalog" className="py-16 md:py-24 px-5 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header & Clean Category Filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#f0f0f0]">
            <div>
              <span className="text-[12px] uppercase tracking-[1.5px] text-[#888888]">
                Olfactory Collection · Archive 2026
              </span>
              <h3 className="text-[24px] md:text-[30px] font-medium tracking-[0.5px] text-[#111111] mt-1">
                Katalog Fragrance & Objects
              </h3>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "ALL", label: "All Products" },
                { id: "EDP", label: "Eau de Parfum" },
                { id: "SPRAY", label: "Room Sprays" },
                { id: "CANDLE", label: "Scented Candles" },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-1.5 text-[12px] uppercase tracking-[0.8px] transition-all cursor-pointer rounded-[2px] ${
                    activeCategory === category.id
                      ? "bg-[#111111] text-white"
                      : "bg-[#f8f8f8] text-[#555555] hover:text-[#111111] hover:bg-[#efefef]"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Search & Filter Indicator */}
          {(searchQuery || activeCategory !== "ALL") && (
            <div className="py-4 flex items-center justify-between text-[13px] text-[#666666] border-b border-[#f0f0f0]">
              <span>
                Found {filteredProducts.length} product{filteredProducts.length === 1 ? "" : "s"}
                {searchQuery && ` for "${searchQuery}"`}
              </span>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("ALL");
                }}
                className="text-[#111111] underline hover:opacity-70 text-[12px] uppercase"
              >
                Reset
              </button>
            </div>
          )}

          {/* Modern 4-Column Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="pt-16 pb-8 text-center border-b border-[#f0f0f0]">
              <p className="text-[14px] text-[#666666]">
                No fragrances match your current search or category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("ALL");
                }}
                className="btn-secondary mt-5"
              >
                Reset Catalog
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pt-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col justify-between transition-transform duration-300"
              >
                {/* Product Card Image Container */}
                <div>
                  <div className="relative aspect-[4/5] bg-[#fbfbfa] rounded-[2px] overflow-hidden border border-[#f0f0f0] group-hover:border-[#e0e0e0] transition-colors">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* The Letter System Badge (as seen on bottles T, U, S, X in image1) */}
                    <div className="absolute top-3 left-3 w-7 h-7 bg-white/95 border border-[#eeeeee] flex items-center justify-center text-[13px] font-medium text-[#111111] shadow-xs">
                      {product.letter}
                    </div>

                    {/* Volume Tag */}
                    <div className="absolute top-3 right-3 text-[10px] tracking-[0.5px] uppercase bg-white/90 px-2 py-0.5 text-[#555555]">
                      {product.volume}
                    </div>

                    {/* Quick Add Overlay on Hover */}
                    <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-[#111111] text-white py-2 text-[11px] uppercase tracking-[1px] font-medium hover:bg-[#333333] transition-colors cursor-pointer text-center"
                      >
                        + Add to Bag
                      </button>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="bg-white text-[#111111] px-3 py-2 text-[11px] uppercase tracking-[0.5px] hover:bg-[#f5f5f5] transition-colors border border-[#e0e0e0] cursor-pointer"
                        title="View Details"
                      >
                        Notes
                      </button>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="pt-4 space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-[14px] font-medium text-[#111111] tracking-[0.3px]">
                        {product.name}
                      </h4>
                      <span className="text-[14px] text-[#111111] font-medium whitespace-nowrap">
                        {formatPrice(product.priceEur, product.priceIdr)}
                      </span>
                    </div>

                    <p className="text-[11px] uppercase tracking-[0.8px] text-[#888888]">
                      {product.edition}
                    </p>

                    <p className="text-[12px] text-[#666666] line-clamp-1 pt-0.5">
                      {product.notes}
                    </p>
                  </div>
                </div>

                {/* Mobile direct Add button */}
                <div className="pt-3 block lg:hidden">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full btn-secondary text-[11px] py-1.5"
                  >
                    + Add to Bag ({formatPrice(product.priceEur, product.priceIdr)})
                  </button>
                </div>
              </div>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. MULTI-SENSORY DESIGN HIGHLIGHT (Clean, modern, not cluttered) */}
      <section className="py-20 px-6 md:px-12 bg-[#fafafa] border-t border-b border-[#f0f0f0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">
            <div className="space-y-3">
              <span className="text-[12px] uppercase tracking-[2px] text-[#999999]">01 / Formula</span>
              <h4 className="text-[16px] font-medium text-[#111111]">Natural Botanical Derivation</h4>
              <p className="text-[13px] text-[#666666] leading-relaxed">
                Compounded with natural essential extracts, cold-pressed citrus, and sustainably sourced woods distilled in Grasse and Paris.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-[12px] uppercase tracking-[2px] text-[#999999]">02 / Vessel</span>
              <h4 className="text-[16px] font-medium text-[#111111]">Architectural Glass Design</h4>
              <p className="text-[13px] text-[#666666] leading-relaxed">
                Heavy soda-lime cylindrical vessels finished with minimal typographic lettermarks, designed as permanent sculptural plinths.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-[12px] uppercase tracking-[2px] text-[#999999]">03 / Presence</span>
              <h4 className="text-[16px] font-medium text-[#111111]">18-Hour Intimate Sillage</h4>
              <p className="text-[13px] text-[#666666] leading-relaxed">
                Formulated for an intimate, close-to-the-skin projection that evolves beautifully across the skin as the day unfolds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION (Contac - Boutiques & Inquiries) */}
      <section id="contact" className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="pb-10 border-b border-[#f0f0f0] flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[12px] uppercase tracking-[1.5px] text-[#888888]">
                Studio & Consultations
              </span>
              <h3 className="text-[24px] md:text-[30px] font-medium text-[#111111] mt-1">
                Contact & Boutiques
              </h3>
            </div>
            <p className="text-[13px] text-[#777777]">
              Paris · Berlin · Jakarta · Private Appointments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-12">
            {/* Paris */}
            <div className="space-y-2">
              <h5 className="text-[14px] font-medium uppercase tracking-[1px] text-[#111111]">
                Paris Boutique
              </h5>
              <p className="text-[13px] text-[#666666] leading-relaxed">
                14 Rue de Turenne, 75004 Paris<br />
                Tue — Sat · 11:00 — 19:00
              </p>
              <p className="text-[13px] text-[#111111] pt-1">
                <a href="mailto:paris@uy-studio.com" className="hover:underline">paris@uy-studio.com</a>
              </p>
            </div>

            {/* Berlin */}
            <div className="space-y-2">
              <h5 className="text-[14px] font-medium uppercase tracking-[1px] text-[#111111]">
                Berlin Studio
              </h5>
              <p className="text-[13px] text-[#666666] leading-relaxed">
                Auguststraße 26, 10117 Berlin<br />
                Wed — Sun · 12:00 — 19:00
              </p>
              <p className="text-[13px] text-[#111111] pt-1">
                <a href="mailto:berlin@uy-studio.com" className="hover:underline">berlin@uy-studio.com</a>
              </p>
            </div>

            {/* Direct Inquiry Form */}
            <div className="space-y-4">
              <h5 className="text-[14px] font-medium uppercase tracking-[1px] text-[#111111]">
                Private Scent Consultation
              </h5>
              {contactSubmitted ? (
                <div className="p-4 bg-[#f8f8f8] border border-[#eeeeee] text-[13px] text-[#111111]">
                  Thank you. Your consultation request has been received. Our curator will be in touch shortly.
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="modern-input"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="modern-input"
                  />
                  <textarea
                    rows={3}
                    required
                    placeholder="Message or requested consultation date..."
                    className="modern-input resize-none"
                  />
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEWSLETTER SECTION */}
      <section className="py-16 px-6 bg-[#fafafa] border-t border-[#f0f0f0]">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <h4 className="text-[18px] md:text-[20px] font-medium text-[#111111]">
            Join the UY Archive
          </h4>
          <p className="text-[13px] text-[#666666] leading-relaxed">
            Receive private release dates, limited edition pourings, and boutique invitations.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto pt-2">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="modern-input flex-1"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          {newsletterSubscribed && (
            <p className="text-[12px] text-[#111111] font-medium pt-1">
              You are now subscribed to the UY Archive.
            </p>
          )}
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-14 px-6 md:px-12 bg-white border-t border-[#f0f0f0] text-[#777777]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-[#f0f0f0] text-[13px]">
          <div className="space-y-3">
            <p className="text-[#111111] font-medium uppercase tracking-[1px] text-[12px]">Boutiques</p>
            <p>Paris · Rue de Turenne</p>
            <p>Berlin · Auguststraße</p>
            <p>Jakarta · Senopati</p>
          </div>
          <div className="space-y-3">
            <p className="text-[#111111] font-medium uppercase tracking-[1px] text-[12px]">Customer Care</p>
            <p><a href="#katalog" className="hover:text-[#111111]">Shipping & Delivery</a></p>
            <p><a href="#contact" className="hover:text-[#111111]">Returns & Exchanges</a></p>
            <p><a href="#contact" className="hover:text-[#111111]">Bottle Refills</a></p>
          </div>
          <div className="space-y-3">
            <p className="text-[#111111] font-medium uppercase tracking-[1px] text-[12px]">About UY</p>
            <p><a href="#ambiance" className="hover:text-[#111111]">Curated by Design</a></p>
            <p><a href="#top" className="hover:text-[#111111]">The Letter System</a></p>
            <p><a href="#contact" className="hover:text-[#111111]">Sustainability</a></p>
          </div>
          <div className="space-y-3">
            <p className="text-[#111111] font-medium uppercase tracking-[1px] text-[12px]">Legal</p>
            <p><a href="#" className="hover:text-[#111111]">Terms & Conditions</a></p>
            <p><a href="#" className="hover:text-[#111111]">Privacy Policy</a></p>
            <p>© 2026 UY Studio</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px]">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#111111] text-[16px]">UY</span>
            <span>Refine yourself. Define yourself. All rights reserved.</span>
          </div>
          <a href="#top" className="text-[#111111] hover:underline uppercase tracking-[0.5px]">
            Back to Top ↑
          </a>
        </div>
      </footer>

      {/* 9. CART DRAWER (Keranjang Belanja) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-[1px] transition-opacity"
            aria-hidden="true"
          />

          <div className="relative w-full max-w-md bg-white border-l border-[#f0f0f0] h-full flex flex-col z-10 shadow-2xl">
            {/* Header */}
            <div className="p-6 border-b border-[#f0f0f0] flex items-center justify-between">
              <div>
                <h3 className="text-[16px] font-medium uppercase tracking-[1px] text-[#111111]">
                  Shopping Bag ({cartTotalItems})
                </h3>
                <p className="text-[12px] text-[#777777]">Complimentary shipping over €150</p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-[#777777] hover:text-[#111111] text-lg p-2 cursor-pointer"
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            {/* Item list */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {cart.length === 0 ? (
                <div className="py-20 text-center space-y-4">
                  <p className="text-[14px] text-[#888888]">Your shopping bag is currently empty.</p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      const el = document.getElementById("katalog");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-primary"
                  >
                    Explore Fragrances
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4 border-b border-[#f5f5f5] pb-4">
                    <div className="w-[72px] h-[88px] bg-[#fbfbfa] border border-[#f0f0f0] rounded-[2px] overflow-hidden flex-shrink-0 relative">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-1 left-1 w-5 h-5 bg-white border border-[#eeeeee] flex items-center justify-center text-[10px] font-medium">
                        {item.product.letter}
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="text-[13px] font-medium text-[#111111]">
                            {item.product.name}
                          </h4>
                          <span className="text-[13px] font-medium text-[#111111]">
                            {formatPrice(
                              item.product.priceEur * item.quantity,
                              item.product.priceIdr * item.quantity
                            )}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#888888] pt-0.5">
                          {item.product.edition} · {item.product.volume}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-[#e0e0e0] rounded-[2px]">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="px-2.5 py-0.5 text-[12px] hover:bg-[#f5f5f5] cursor-pointer"
                          >
                            –
                          </button>
                          <span className="px-2.5 text-[12px] font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="px-2.5 py-0.5 text-[12px] hover:bg-[#f5f5f5] cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[11px] uppercase text-[#999999] hover:text-[#111111] underline cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#f0f0f0] bg-white space-y-4">
                <div className="flex items-center justify-between text-[14px]">
                  <span className="font-medium text-[#111111]">Subtotal</span>
                  <span className="font-medium text-[#111111]">
                    {formatPrice(cartSubtotalEur, cartSubtotalIdr)}
                  </span>
                </div>
                <p className="text-[11px] text-[#888888]">
                  Shipping and taxes calculated at secure checkout.
                </p>
                <button
                  onClick={() =>
                    alert(`Proceeding to checkout for ${formatPrice(cartSubtotalEur, cartSubtotalIdr)}`)
                  }
                  className="btn-primary w-full py-3"
                >
                  Checkout · {formatPrice(cartSubtotalEur, cartSubtotalIdr)}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 10. PRODUCT DETAIL / NOTES MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px]"
            aria-hidden="true"
          />

          <div className="relative w-full max-w-2xl bg-white border border-[#eeeeee] rounded-[2px] z-10 overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/2 bg-[#fbfbfa] relative min-h-[260px]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 w-8 h-8 bg-white border border-[#eeeeee] flex items-center justify-center text-[14px] font-medium">
                {selectedProduct.letter}
              </div>
            </div>

            {/* Info */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between border-b border-[#f0f0f0] pb-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-[1px] text-[#888888]">
                      {selectedProduct.edition} · {selectedProduct.volume}
                    </span>
                    <h3 className="text-[20px] font-medium text-[#111111] mt-0.5">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-[#888888] hover:text-[#111111] text-lg p-1"
                  >
                    ✕
                  </button>
                </div>

                <div className="py-4 space-y-3 text-[13px]">
                  <p className="text-[16px] font-medium text-[#111111]">
                    {formatPrice(selectedProduct.priceEur, selectedProduct.priceIdr)}
                  </p>

                  <p className="text-[#666666] leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  <div className="pt-3 border-t border-[#f5f5f5] space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.5px] font-medium text-[#111111]">
                      Scent Pyramid:
                    </p>
                    <p className="text-[#666666]"><span className="text-[#111111] font-medium">Top:</span> {selectedProduct.topNotes}</p>
                    <p className="text-[#666666]"><span className="text-[#111111] font-medium">Heart:</span> {selectedProduct.heartNotes}</p>
                    <p className="text-[#666666]"><span className="text-[#111111] font-medium">Base:</span> {selectedProduct.baseNotes}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#f0f0f0] flex gap-3">
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="btn-primary flex-1"
                >
                  Add to Bag
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

