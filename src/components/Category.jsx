import React, { useState } from 'react';
import { ShoppingBag, Star, Eye, Heart, User, Users, Baby } from 'lucide-react';

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('men');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Product data organized by category
  const products = {
    men: [
      {
        id: 1,
        name: "Classic Leather Jacket",
        price: "$299",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
        badge: "Best Seller"
      },
      {
        id: 2,
        name: "Premium Dress Shirt",
        price: "$89",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop",
        badge: "New"
      },
      {
        id: 3,
        name: "Smart Watch Pro",
        price: "$399",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        badge: "Tech"
      },
      {
        id: 4,
        name: "Athletic Sneakers",
        price: "$149",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        badge: "Sport"
      },
      {
        id: 5,
        name: "Casual Denim Jeans",
        price: "$79",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1542272454315-7ad85ba6ee4e?w=400&h=300&fit=crop",
        badge: "Casual"
      },
      {
        id: 6,
        name: "Business Briefcase",
        price: "$199",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
        badge: "Professional"
      }
    ],
    women: [
      {
        id: 7,
        name: "Elegant Evening Dress",
        price: "$199",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop",
        badge: "Elegant"
      },
      {
        id: 8,
        name: "Designer Handbag",
        price: "$249",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop",
        badge: "Luxury"
      },
      {
        id: 9,
        name: "Silk Scarf Collection",
        price: "$69",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop",
        badge: "Trendy"
      },
      {
        id: 10,
        name: "High Heel Sandals",
        price: "$129",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop",
        badge: "Fashion"
      },
      {
        id: 11,
        name: "Jewelry Set",
        price: "$159",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        badge: "Sparkle"
      },
      {
        id: 12,
        name: "Yoga Activewear",
        price: "$89",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1506629905607-37375d4e5de0?w=400&h=300&fit=crop",
        badge: "Active"
      }
    ],
    kids: [
      {
        id: 13,
        name: "Colorful Sneakers",
        price: "$49",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=300&fit=crop",
        badge: "Fun"
      },
      {
        id: 14,
        name: "Superhero T-Shirt",
        price: "$24",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=300&fit=crop",
        badge: "Hero"
      },
      {
        id: 15,
        name: "School Backpack",
        price: "$39",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
        badge: "School"
      },
      {
        id: 16,
        name: "Winter Jacket",
        price: "$69",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        badge: "Warm"
      },
      {
        id: 17,
        name: "Princess Dress",
        price: "$35",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=300&fit=crop",
        badge: "Princess"
      },
      {
        id: 18,
        name: "Educational Toy Set",
        price: "$59",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1558618047-71c0c3d541c2?w=400&h=300&fit=crop",
        badge: "Learn"
      }
    ]
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'men': return <User size={20} />;
      case 'women': return <Users size={20} />;
      case 'kids': return <Baby size={20} />;
      default: return <User size={20} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'men': return {
        primary: '#3b82f6',
        secondary: '#1e40af',
        accent: '#60a5fa'
      };
      case 'women': return {
        primary: '#ec4899',
        secondary: '#be185d',
        accent: '#f9a8d4'
      };
      case 'kids': return {
        primary: '#10b981',
        secondary: '#059669',
        accent: '#6ee7b7'
      };
      default: return {
        primary: '#8b5cf6',
        secondary: '#7c3aed',
        accent: '#c4b5fd'
      };
    }
  };

  const getBadgeClass = (badge) => {
    const colors = getCategoryColor(activeCategory);
    return `badge-${activeCategory}`;
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

        .category-nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .category-btn {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          color: white;
          padding: 1rem 2rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .category-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .category-btn.active-men {
          background: linear-gradient(45deg, #3b82f6, #1e40af);
          border-color: #60a5fa;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }

        .category-btn.active-women {
          background: linear-gradient(45deg, #ec4899, #be185d);
          border-color: #f9a8d4;
          box-shadow: 0 8px 25px rgba(236, 72, 153, 0.4);
        }

        .category-btn.active-kids {
          background: linear-gradient(45deg, #10b981, #059669);
          border-color: #6ee7b7;
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }

        .category-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
        }

        .category-title.men {
          background: linear-gradient(45deg, #3b82f6, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .category-title.women {
          background: linear-gradient(45deg, #ec4899, #f9a8d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .category-title.kids {
          background: linear-gradient(45deg, #10b981, #6ee7b7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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
          color: white;
        }

        .badge-men {
          background: linear-gradient(45deg, #3b82f6, #1e40af);
        }

        .badge-women {
          background: linear-gradient(45deg, #ec4899, #be185d);
        }

        .badge-kids {
          background: linear-gradient(45deg, #10b981, #059669);
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

        .product-info {
          padding: 1.5rem;
          position: relative;
          z-index: 2;
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

        .product-price {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
        }

        .add-to-cart-btn {
          border: none;
          border-radius: 25px;
          color: white;
          font-weight: 600;
          padding: 0.6rem 1.5rem;
          transition: all 0.3s ease;
        }

        .add-to-cart-btn.men {
          background: linear-gradient(45deg, #3b82f6, #1e40af);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }

        .add-to-cart-btn.women {
          background: linear-gradient(45deg, #ec4899, #be185d);
          box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);
        }

        .add-to-cart-btn.kids {
          background: linear-gradient(45deg, #10b981, #059669);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
        }

        .add-to-cart-btn:hover {
          transform: scale(1.05);
        }

        .hover-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          transform: scaleX(0);
          transition: transform 0.5s ease;
          transform-origin: left;
        }

        .hover-line.men {
          background: linear-gradient(45deg, #3b82f6, #1e40af);
        }

        .hover-line.women {
          background: linear-gradient(45deg, #ec4899, #be185d);
        }

        .hover-line.kids {
          background: linear-gradient(45deg, #10b981, #059669);
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
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .view-all-btn {
          border: none;
          border-radius: 30px;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          padding: 1rem 2rem;
          transition: all 0.3s ease;
          margin-top: 2rem;
        }

        .view-all-btn.men {
          background: linear-gradient(45deg, #3b82f6, #1e40af);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }

        .view-all-btn.women {
          background: linear-gradient(45deg, #ec4899, #be185d);
          box-shadow: 0 8px 25px rgba(236, 72, 153, 0.4);
        }

        .view-all-btn.kids {
          background: linear-gradient(45deg, #10b981, #059669);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }

        .view-all-btn:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
          
          .category-title {
            font-size: 2rem;
          }
          
          .category-nav {
            flex-direction: column;
            align-items: center;
          }
          
          .category-btn {
            width: 200px;
            justify-content: center;
          }
        }
      `}</style>

      <div className="product-showcase">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-5">
            <div className="header-icon">
              <ShoppingBag size={24} />
              <span>Product Collection</span>
            </div>
            
            <h1 className="section-title mb-4">
              Shop by Category
            </h1>
            
            <p className="section-subtitle text-white mx-auto" style={{maxWidth: '600px'}}>
              Explore our diverse collection tailored for every member of your family
            </p>
          </div>

          {/* Category Navigation */}
          <div className="category-nav">
            {['men', 'women', 'kids'].map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? `active-${category}` : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {getCategoryIcon(category)}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Category Title */}
          <h2 className={`category-title ${activeCategory}`}>
            {activeCategory === 'men' && 'Men\'s Collection'}
            {activeCategory === 'women' && 'Women\'s Collection'}
            {activeCategory === 'kids' && 'Kids\' Collection'}
          </h2>

          {/* Products Grid */}
          <div className="row g-4">
            {products[activeCategory].map((product) => (
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
                  </div>

                  {/* Product Info */}
                  <div className="product-info">
                    <div className="d-flex justify-content-between align-items-center mb-2">
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
                      
                      <button className={`add-to-cart-btn ${activeCategory}`}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className={`hover-line ${activeCategory}`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className={`view-all-btn ${activeCategory}`}>
              View All {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}'s Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductShowcase;