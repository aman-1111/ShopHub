import React, { useState } from 'react';
import { ShoppingBag, Star, Eye, Heart } from 'lucide-react';

const ProductShowcase = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Sample product data - replace with your actual products
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      category: "Electronics",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "$199",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      category: "Wearables",
      badge: "New"
    },
    {
      id: 3,
      name: "Luxury Leather Backpack",
      price: "$149",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      category: "Fashion",
      badge: "Limited"
    },
    {
      id: 4,
      name: "Professional Camera",
      price: "$899",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      category: "Photography",
      badge: "Pro"
    },
    {
      id: 5,
      name: "Minimalist Desk Setup",
      price: "$399",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      category: "Furniture",
      badge: "Trending"
    },
    {
      id: 6,
      name: "Organic Skincare Set",
      price: "$79",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
      category: "Beauty",
      badge: "Natural"
    }
  ];

  const getBadgeClass = (badge) => {
    switch (badge) {
      case 'Best Seller': return 'bg-warning text-dark';
      case 'New': return 'bg-success text-white';
      case 'Limited': return 'bg-danger text-white';
      case 'Pro': return 'bg-dark text-white';
      case 'Trending': return 'bg-info text-white';
      default: return 'bg-primary text-white';
    }
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <style jsx>{`
        .product-showcase {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 25%, #1e1b4b 50%, #581c87 75%, #1e293b 100%);
          min-height: 100vh;
          padding: 4rem 0;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 700;
          background: linear-gradient(45deg, #fff, #f0f8ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
        }

        .section-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .product-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          height: 100%;
        }

        .product-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .product-card:hover::before {
          opacity: 1;
        }

        .product-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
        }

        .product-image {
          height: 250px;
          overflow: hidden;
          position: relative;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.1);
        }

        .product-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          z-index: 2;
          font-size: 0.8rem;
          font-weight: bold;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
        }

        .action-buttons {
          position: absolute;
          top: 15px;
          right: 15px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }

        .product-card:hover .action-buttons {
          opacity: 1;
        }

        .action-btn {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .gradient-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .product-card:hover .gradient-overlay {
          opacity: 1;
        }

        .product-info {
          padding: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .category-badge {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #a78bfa;
        }

        .rating-container {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .star-icon {
          color: #fbbf24;
          fill: currentColor;
        }

        .product-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
          margin: 0.8rem 0;
          transition: color 0.3s ease;
        }

        .product-card:hover .product-title {
          color: #ddd6fe;
        }

        .product-price {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
        }

        .add-to-cart-btn {
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          border: none;
          border-radius: 25px;
          color: white;
          font-weight: 600;
          padding: 0.6rem 1.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
        }

        .add-to-cart-btn:hover {
          background: linear-gradient(45deg, #7c3aed, #db2777);
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(139, 92, 246, 0.6);
        }

        .hover-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          transform: scaleX(0);
          transition: transform 0.5s ease;
          transform-origin: left;
        }

        .product-card:hover .hover-line {
          transform: scaleX(1);
        }

        .header-icon {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          padding: 0.8rem 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .view-all-btn {
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          border: none;
          border-radius: 30px;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          padding: 1rem 2rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
        }

        .view-all-btn:hover {
          background: linear-gradient(45deg, #7c3aed, #db2777);
          transform: scale(1.05);
          box-shadow: 0 12px 35px rgba(139, 92, 246, 0.6);
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="product-showcase">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-5">
            <div className="header-icon">
              <ShoppingBag size={24} />
              <span>Featured Products</span>
            </div>
            
            <h1 className="section-title mb-4">
              Our Best Products
            </h1>
            
            <p className="section-subtitle text-white mx-auto" style={{maxWidth: '600px'}}>
              Discover our carefully curated collection of premium products, designed to elevate your lifestyle and exceed your expectations.
            </p>
          </div>

          {/* Products Grid */}
          <div className="row g-4 mb-5">
            {products.map((product) => (
              <div key={product.id} className="col-12 col-md-6 col-lg-4">
                <div
                  className="product-card h-100"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Product Image */}
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid"
                    />
                    
                    {/* Badge */}
                    <div className={`product-badge ${getBadgeClass(product.badge)}`}>
                      {product.badge}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="action-buttons">
                      <button className="action-btn">
                        <Heart size={16} />
                      </button>
                      <button className="action-btn">
                        <Eye size={16} />
                      </button>
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="gradient-overlay"></div>
                  </div>

                  {/* Product Info */}
                  <div className="product-info">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="category-badge">
                        {product.category}
                      </span>
                      <div className="rating-container">
                        <Star className="star-icon" size={16} />
                        <span className="text-white-50 small">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="product-title">
                      {product.name}
                    </h3>
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="product-price">
                        {product.price}
                      </span>
                      
                      <button className="add-to-cart-btn">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className="hover-line"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="view-all-btn">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductShowcase;