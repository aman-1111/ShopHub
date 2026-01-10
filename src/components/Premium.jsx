import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Star, Filter, Search, Eye, Zap, Award, Truck } from 'lucide-react';

const ShoeStore = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlist, setWishlist] = useState(new Set());
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedColors, setSelectedColors] = useState({});

  const shoes = [
    {
      id: 1,
      name: "Air Max Revolution",
      brand: "Nike",
      description: "Revolutionary cushioning technology meets street-ready style",
      price: 159,
      originalPrice: 199,
      images: [
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop"
      ],
      category: "running",
      rating: 4.8,
      reviews: 234,
      badge: "Best Seller",
      colors: ["Black", "White", "Red", "Blue"],
      sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
      features: ["Air Cushioning", "Breathable Mesh", "Durable Sole"]
    },
    {
      id: 2,
      name: "Urban Street Walker",
      brand: "Adidas",
      description: "Perfect blend of comfort and urban style for daily wear",
      price: 129,
      originalPrice: 169,
      images: [
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop"
      ],
      category: "casual",
      rating: 4.6,
      reviews: 189,
      badge: "New Arrival",
      colors: ["White", "Black", "Grey", "Navy"],
      sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
      features: ["Boost Technology", "Lightweight", "Flexible Sole"]
    },
    {
      id: 3,
      name: "Elite Basketball Pro",
      brand: "Jordan",
      description: "Professional-grade basketball shoes for serious players",
      price: 199,
      originalPrice: 249,
      images: [
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=400&h=400&fit=crop"
      ],
      category: "basketball",
      rating: 4.9,
      reviews: 156,
      badge: "Pro Choice",
      colors: ["Black/Red", "White/Blue", "Grey/Orange"],
      sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
      features: ["Zoom Air", "High-Top Support", "Traction Pattern"]
    },
    {
      id: 4,
      name: "Classic Canvas Low",
      brand: "Converse",
      description: "Timeless style that never goes out of fashion",
      price: 69,
      originalPrice: 89,
      images: [
        "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop"
      ],
      category: "casual",
      rating: 4.7,
      reviews: 342,
      badge: "Classic",
      colors: ["White", "Black", "Red", "Navy", "Pink"],
      sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
      features: ["Canvas Upper", "Rubber Toe", "Iconic Design"]
    },
    {
      id: 5,
      name: "Trail Master Hiker",
      brand: "Merrell",
      description: "Rugged outdoor shoes built for any terrain",
      price: 139,
      originalPrice: 179,
      images: [
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
      ],
      category: "hiking",
      rating: 4.8,
      reviews: 98,
      badge: "Outdoor",
      colors: ["Brown", "Black", "Olive", "Tan"],
      sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
      features: ["Waterproof", "Vibram Sole", "Ankle Support"]
    },
    {
      id: 6,
      name: "Luxury Leather Loafer",
      brand: "Cole Haan",
      description: "Premium leather craftsmanship for sophisticated style",
      price: 229,
      originalPrice: 289,
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop"
      ],
      category: "formal",
      rating: 4.9,
      reviews: 87,
      badge: "Luxury",
      colors: ["Brown", "Black", "Tan"],
      sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
      features: ["Genuine Leather", "Cushioned Insole", "Handcrafted"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Shoes', icon: '👟' },
    { id: 'running', label: 'Running', icon: '🏃' },
    { id: 'casual', label: 'Casual', icon: '👕' },
    { id: 'basketball', label: 'Basketball', icon: '🏀' },
    { id: 'hiking', label: 'Hiking', icon: '🥾' },
    { id: 'formal', label: 'Formal', icon: '👔' }
  ];

  const filteredShoes = shoes.filter(shoe => {
    const matchesCategory = activeFilter === 'all' || shoe.category === activeFilter;
    const matchesSearch = shoe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shoe.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shoe.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleWishlist = (shoeId) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(shoeId)) {
      newWishlist.delete(shoeId);
      showNotificationMessage('Removed from wishlist');
    } else {
      newWishlist.add(shoeId);
      showNotificationMessage('Added to wishlist');
    }
    setWishlist(newWishlist);
  };

  const addToCart = (shoe) => {
    const selectedSize = selectedSizes[shoe.id];
    const selectedColor = selectedColors[shoe.id];
    
    if (!selectedSize) {
      showNotificationMessage('Please select a size first');
      return;
    }
    
    const cartItem = {
      ...shoe,
      selectedSize,
      selectedColor: selectedColor || shoe.colors[0],
      cartId: `${shoe.id}-${selectedSize}-${selectedColor || shoe.colors[0]}`
    };
    
    setCart([...cart, cartItem]);
    showNotificationMessage(`${shoe.name} added to cart!`);
  };

  const selectSize = (shoeId, size) => {
    setSelectedSizes(prev => ({ ...prev, [shoeId]: size }));
  };

  const selectColor = (shoeId, color) => {
    setSelectedColors(prev => ({ ...prev, [shoeId]: color }));
  };

  const showNotificationMessage = (message) => {
    setNotification(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const getBadgeColor = (badge) => {
    const colors = {
      'Best Seller': 'bg-gradient-danger',
      'New Arrival': 'bg-gradient-success',
      'Pro Choice': 'bg-gradient-primary',
      'Classic': 'bg-gradient-info',
      'Outdoor': 'bg-gradient-success',
      'Luxury': 'bg-gradient-warning'
    };
    return colors[badge] || 'bg-gradient-secondary';
  };

  const getColorStyle = (color) => {
    const colorMap = {
      'Black': { backgroundColor: '#000' },
      'White': { backgroundColor: '#fff', border: '2px solid #dee2e6' },
      'Red': { backgroundColor: '#dc3545' },
      'Blue': { backgroundColor: '#0d6efd' },
      'Navy': { backgroundColor: '#001f3f' },
      'Grey': { backgroundColor: '#6c757d' },
      'Brown': { backgroundColor: '#8b4513' },
      'Tan': { backgroundColor: '#d2691e' },
      'Pink': { backgroundColor: '#e91e63' },
      'Olive': { backgroundColor: '#6b8e23' },
      'Black/Red': { background: 'linear-gradient(45deg, #000, #dc3545)' },
      'White/Blue': { background: 'linear-gradient(45deg, #fff, #0d6efd)' },
      'Grey/Orange': { background: 'linear-gradient(45deg, #6c757d, #fd7e14)' }
    };
    return colorMap[color] || { backgroundColor: '#6c757d' };
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      {/* Custom Styles */}
      <style jsx>{`
        .shoe-store {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%);
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .hero-section {
          background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(106,17,203,0.3) 100%);
          backdrop-filter: blur(10px);
          padding: 80px 0;
          text-align: center;
        }
        
        .hero-title {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          color: rgba(255,255,255,0.9);
          margin-bottom: 2rem;
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .search-container {
          position: relative;
          max-width: 400px;
          margin: 0 auto 2rem;
        }
        
        .search-input {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          backdrop-filter: blur(10px);
          padding-left: 45px;
        }
        
        .search-input::placeholder {
          color: rgba(255,255,255,0.6);
        }
        
        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.6);
        }
        
        .category-btn {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          margin: 0.25rem;
        }
        
        .category-btn:hover, .category-btn.active {
          background: white;
          color: #6f42c1;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .product-card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          height: 100%;
        }
        
        .product-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 60px rgba(0,0,0,0.2);
        }
        
        .product-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .product-card:hover .product-image {
          transform: scale(1.1);
        }
        
        .product-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          color: white;
          z-index: 2;
        }
        
        .brand-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: rgba(255,255,255,0.9);
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #333;
          z-index: 2;
        }
        
        .wishlist-btn {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background: rgba(255,255,255,0.9);
          border: none;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 2;
        }
        
        .wishlist-btn:hover {
          background: #dc3545;
          color: white;
          transform: scale(1.1);
        }
        
        .wishlist-btn.active {
          background: #dc3545;
          color: white;
        }
   
        .color-option {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 2px solid #dee2e6;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-right: 8px;
        }
        
        .color-option:hover {
          transform: scale(1.1);
        }
        
        .color-option.selected {
          border-color: #6f42c1;
          transform: scale(1.2);
          box-shadow: 0 0 0 2px rgba(111, 66, 193, 0.3);
        }
        
        .size-option {
          min-width: 50px;
          height: 45px;
          border: 2px solid #dee2e6;
          background: #f8f9fa;
          color: #495057;
          transition: all 0.2s ease;
          margin-right: 8px;
          margin-bottom: 8px;
        }
        
        .size-option:hover {
          background: #e9ecef;
          border-color: #6f42c1;
        }
        
        .size-option.selected {
          background: #6f42c1;
          color: white;
          border-color: #6f42c1;
        }
        
        .btn-gradient-primary {
          background: linear-gradient(45deg, #6f42c1, #4c63d2);
          border: none;
          color: white;
          transition: all 0.3s ease;
        }
        
        .btn-gradient-primary:hover {
          background: linear-gradient(45deg, #5a359a, #3c4fd1);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(111, 66, 193, 0.4);
          color: white;
        }
        
        .btn-outline-gradient {
          border: 2px solid #6f42c1;
          color: #6f42c1;
          background: transparent;
          transition: all 0.3s ease;
        }
        
        .btn-outline-gradient:hover {
          background: #6f42c1;
          color: white;
          transform: translateY(-2px);
        }
        
        .notification {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1050;
          transition: transform 0.3s ease;
        }
        
        .notification.show {
          transform: translateX(0);
        }
        
        .notification.hide {
          transform: translateX(400px);
        }
        
        .cart-summary {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: white;
          border-radius: 50px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          padding: 15px 20px;
          z-index: 1040;
        }
        
        .bg-gradient-danger {
          background: linear-gradient(45deg, #dc3545, #fd7e14);
        }
        
        .bg-gradient-success {
          background: linear-gradient(45deg, #198754, #20c997);
        }
        
        .bg-gradient-primary {
          background: linear-gradient(45deg, #6f42c1, #4c63d2);
        }
        
        .bg-gradient-info {
          background: linear-gradient(45deg, #0dcaf0, #0d6efd);
        }
        
        .bg-gradient-warning {
          background: linear-gradient(45deg, #ffc107, #fd7e14);
        }
        
        .bg-gradient-secondary {
          background: linear-gradient(45deg, #6c757d, #495057);
        }
        
        .feature-badge {
          background: #e9ecef;
          color: #495057;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          margin-right: 4px;
          margin-bottom: 4px;
          display: inline-block;
        }
        
        .stars {
          color: #ffc107;
        }
        
        .load-more-btn {
          background: linear-gradient(45deg, #6f42c1, #4c63d2);
          border: none;
          color: white;
          padding: 15px 40px;
          font-size: 1.1rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .load-more-btn:hover {
          background: linear-gradient(45deg, #5a359a, #3c4fd1);
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(111, 66, 193, 0.4);
          color: white;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .product-card {
            margin-bottom: 2rem;
          }
        }
      `}</style>

      <div className="shoe-store">
        {/* Notification */}
        <div className={`notification ${showNotification ? 'show' : 'hide'}`}>
          <div className="alert alert-success mb-0" role="alert">
            <strong>{notification}</strong>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👟</div>
                <h1 className="hero-title">
                  Step Into <span className="gradient-text">Style</span>
                </h1>
                <p className="hero-subtitle">
                  Discover premium footwear that combines comfort, style, and performance
                </p>
                
                {/* Search Bar */}
                <div className="search-container">
                  <Search className="search-icon" size={20} />
                  <input
                    type="text"
                    className="form-control search-input rounded-pill"
                    placeholder="Search shoes, brands..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Features */}
                <div className="d-flex flex-wrap justify-content-center gap-4 text-white-50">
                  <div className="d-flex align-items-center">
                    <Truck size={20} className="me-2" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Award size={20} className="me-2" />
                    <span>Authentic Products</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Zap size={20} className="me-2" />
                    <span>Fast Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex flex-wrap justify-content-center">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`btn category-btn rounded-pill ${activeFilter === category.id ? 'active' : ''}`}
                  >
                    <span className="me-2">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container ">
          <div className="row g-4">
            {filteredShoes.map(shoe => (
              <div key={shoe.id} className="col-lg-4 col-md-6">
                <div className="card product-card h-100">
                  {/* Product Image */}
                  <div className="position-relative">
                    <img
                      src={shoe.images[0]}
                      alt={shoe.name}
                      className="product-image"
                    />
                    
                    {/* Badge */}
                    <div className={`product-badge ${getBadgeColor(shoe.badge)}`}>
                      {shoe.badge}
                    </div>
                    
                    {/* Brand */}
                    <div className="brand-badge">
                      {shoe.brand}
                    </div>
                    
                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(shoe.id)}
                      className={`wishlist-btn ${wishlist.has(shoe.id) ? 'active' : ''}`}
                    >
                      <Heart size={20} fill={wishlist.has(shoe.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{shoe.name}</h5>
                    <p className="card-text text-muted small">{shoe.description}</p>
                    
                    {/* Rating */}
                    <div className="d-flex align-items-center mb-3">
                      <div className="stars me-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill={i < Math.floor(shoe.rating) ? 'currentColor' : 'none'} />
                        ))}
                      </div>
                      <small className="text-muted">({shoe.reviews} reviews)</small>
                    </div>

                    {/* Features */}
                    <div className="mb-3">
                      {shoe.features.map((feature, index) => (
                        <span key={index} className="feature-badge">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Color Selection */}
                    <div className="mb-3">
                      <p className="small fw-medium mb-2">Color:</p>
                      <div className="d-flex">
                        {shoe.colors.map((color, index) => (
                          <div
                            key={index}
                            onClick={() => selectColor(shoe.id, color)}
                            className={`color-option ${selectedColors[shoe.id] === color ? 'selected' : ''}`}
                            style={getColorStyle(color)}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Size Selection */}
                    <div className="mb-3">
                      <p className="small fw-medium mb-2">Size:</p>
                      <div className="d-flex flex-wrap">
                        {shoe.sizes.map((size, index) => (
                          <button
                            key={index}
                            onClick={() => selectSize(shoe.id, size)}
                            className={`btn size-option ${selectedSizes[shoe.id] === size ? 'selected' : ''}`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="d-flex align-items-center mb-3">
                      <span className="h4 fw-bold text-primary me-2">${shoe.price}</span>
                      <span className="text-muted text-decoration-line-through me-2">${shoe.originalPrice}</span>
                      <span className="badge bg-success">
                        {Math.round(((shoe.originalPrice - shoe.price) / shoe.originalPrice) * 100)}% OFF
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="d-flex gap-2">
                      <button
                        onClick={() => addToCart(shoe)}
                        className="btn btn-gradient-primary flex-fill d-flex align-items-center justify-content-center"
                      >
                        <ShoppingCart size={16} className="me-2" />
                        Add to Cart
                      </button>
                      <button className="btn btn-outline-gradient">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredShoes.length > 0 && (
            <div className="text-center mt-5">
              <button className="btn load-more-btn rounded-pill">
                Load More Shoes
              </button>
            </div>
          )}

          {/* No Results */}
          {filteredShoes.length === 0 && (
            <div className="text-center py-5">
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👟</div>
              <h3 className="text-white mb-2">No shoes found</h3>
              <p className="text-white-50">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="cart-summary d-flex align-items-center">
            <ShoppingCart size={24} className="text-primary me-3" />
            <span className="fw-medium me-3">{cart.length} items</span>
            <button className="btn btn-primary btn-sm rounded-pill">
              View Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoeStore;