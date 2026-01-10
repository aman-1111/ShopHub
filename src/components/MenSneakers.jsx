import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Star, Heart, Eye, ChevronDown } from 'lucide-react';
import './componenets/MenSneaker.css'

const MensSneakers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const sneakers = [
    {
      id: 1,
      name: "Air Max Classic",
      brand: "",
      price: 129.99,
      originalPrice: 159.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 324,
      colors: ["White", "Black", "Red"],
      sizes: [7, 8, 9, 10, 11, 12],
      category: "lifestyle",
      isOnSale: true,
      description: "Classic design meets modern comfort"
    },
    {
      id: 2,
      name: "Ultra Boost Performance",
      brand: "",
      price: 179.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 156,
      colors: ["Black", "White", "Navy"],
      sizes: [7, 8, 9, 10, 11, 12, 13],
      category: "running",
      isOnSale: false,
      description: "Premium running sneaker with boost technology"
    },
    {
      id: 3,
      name: "Classic Court Low",
      brand: "",
      price: 89.99,
      originalPrice: 109.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
      rating: 4.3,
      reviews: 89,
      colors: ["White", "Black", "Navy"],
      sizes: [7, 8, 9, 10, 11, 12],
      category: "lifestyle",
      isOnSale: true,
      description: "Timeless court-inspired design"
    },
    {
      id: 4,
      name: "Zoom Pegasus Elite",
      brand: "",
      price: 149.99,
      originalPrice: 149.99,
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 267,
      colors: ["Black", "Blue", "Gray"],
      sizes: [7, 8, 9, 10, 11, 12, 13],
      category: "running",
      isOnSale: false,
      description: "Professional running shoe with zoom air"
    },
    {
      id: 5,
      name: "Chuck Taylor All Star",
      brand: "",
      price: 59.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 445,
      colors: ["Black", "White", "Red", "Navy"],
      sizes: [6, 7, 8, 9, 10, 11, 12],
      category: "lifestyle",
      isOnSale: true,
      description: "Iconic canvas sneaker, timeless style"
    },
    {
      id: 6,
      name: "Stan Smith Original",
      brand: "",
      price: 99.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 378,
      colors: ["White", "Green"],
      sizes: [7, 8, 9, 10, 11, 12],
      category: "lifestyle",
      isOnSale: false,
      description: "Clean minimalist tennis shoe design"
    },
    {
      id: 7,
      name: "Air Jordan Retro High",
      brand: "",
      price: 199.99,
      originalPrice: 229.99,
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 523,
      colors: ["Black", "Red", "White"],
      sizes: [7, 8, 9, 10, 11, 12, 13],
      category: "basketball",
      isOnSale: true,
      description: "Legendary basketball shoe with premium materials"
    },
    {
      id: 8,
      name: "Vans Old Skool",
      brand: "",
      price: 64.99,
      originalPrice: 64.99,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=300&h=300&fit=crop",
      rating: 4.2,
      reviews: 289,
      colors: ["Black", "White", "Checkered"],
      sizes: [7, 8, 9, 10, 11, 12],
      category: "lifestyle",
      isOnSale: false,
      description: "Skate-inspired sneaker with side stripe"
    },
    {
      id: 9,
      name: "React Element 87",
      brand: "",
      price: 139.99,
      originalPrice: 169.99,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 167,
      colors: ["Gray", "Blue", "White"],
      sizes: [7, 8, 9, 10, 11, 12],
      category: "lifestyle",
      isOnSale: true,
      description: "Modern design with React foam technology"
    },
    {
      id: 10,
      name: "NMD R1 Primeknit",
      brand: "",
      price: 159.99,
      originalPrice: 159.99,
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 234,
      colors: ["Black", "White", "Gray"],
      sizes: [7, 8, 9, 10, 11, 12, 13],
      category: "lifestyle",
      isOnSale: false,
      description: "Street-style sneaker with boost cushioning"
    },
    {
      id: 11,
      name: "Gel-Lyte III",
      brand: "",
      price: 119.99,
      originalPrice: 139.99,
      image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=300&h=300&fit=crop",
      rating: 4.3,
      reviews: 145,
      colors: ["Navy", "Gray", "White"],
      sizes: [7, 8, 9, 10, 11, 12],
      category: "lifestyle",
      isOnSale: true,
      description: "Retro running shoe with split tongue design"
    },
    {
      id: 12,
      name: "990v5 Made in USA",
      brand: "",
      price: 189.99,
      originalPrice: 189.99,
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 201,
      colors: ["Gray", "Navy", "Black"],
      sizes: [7, 8, 9, 10, 11, 12, 13],
      category: "lifestyle",
      isOnSale: false,
      description: "Premium crafted sneaker made in USA"
    }
  ];

  const brands = ['all', 'Nike', 'Adidas', 'Converse', 'Vans', 'ASICS', 'New Balance'];
  const sizes = ['all', 7, 8, 9, 10, 11, 12, 13];
  const categories = ['all', 'lifestyle', 'running', 'basketball'];

  const filteredSneakers = sneakers.filter(sneaker => {
    const matchesSearch = sneaker.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || sneaker.category === selectedCategory;
    const matchesSize = selectedSize === 'all' || sneaker.sizes.includes(parseInt(selectedSize));
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'under100' && sneaker.price < 100) ||
                        (priceRange === '100-150' && sneaker.price >= 100 && sneaker.price <= 150) ||
                        (priceRange === 'over150' && sneaker.price > 150);
    
    return matchesSearch && matchesCategory && matchesSize && matchesPrice;
  });

  const sortedSneakers = [...filteredSneakers].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const addToCart = (sneaker) => {
    setCart(prev => [...prev, sneaker]);
  };

  const toggleFavorite = (sneakerId) => {
    setFavorites(prev => 
      prev.includes(sneakerId) 
        ? prev.filter(id => id !== sneakerId)
        : [...prev, sneakerId]
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Men's Sneakers</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search sneakers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Filters:</span>
            </div>
            
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>

            {/* Size Filter */}
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sizes.map(size => (
                <option key={size} value={size}>
                  {size === 'all' ? 'All Sizes' : `Size ${size}`}
                </option>
              ))}
            </select>

            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Prices</option>
              <option value="under100">Under $100</option>
              <option value="100-150">$100 - $150</option>
              <option value="over150">Over $150</option>
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedSneakers.length} of {sneakers.length} sneakers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedSneakers.map(sneaker => (
            <div key={sneaker.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={sneaker.image} 
                  alt={sneaker.name}
                  className="w-full h-48 object-cover"
                />
                {sneaker.isOnSale && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                    SALE
                  </span>
                )}
                <button
                  onClick={() => toggleFavorite(sneaker.id)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
                >
                  <Heart 
                    className={`w-5 h-5 ${favorites.includes(sneaker.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`}
                  />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{sneaker.name}</h3>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">{sneaker.description}</p>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {renderStars(sneaker.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {sneaker.rating} ({sneaker.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex items-center mb-3">
                  <span className="text-xl font-bold text-gray-900">${sneaker.price}</span>
                  {sneaker.isOnSale && (
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ${sneaker.originalPrice}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {sneaker.colors.map(color => (
                    <span key={color} className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700">
                      {color}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => addToCart(sneaker)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                  <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedSneakers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No sneakers found matching your criteria.</div>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MensSneakers;