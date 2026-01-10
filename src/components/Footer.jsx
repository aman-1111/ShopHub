import React, { useState } from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard, 
  Shield, 
  Truck,
  RotateCcw,
  Heart,
  ChevronUp
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerStyle = {
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 25%, #1e1b4b 50%, #581c87 75%, #1e293b 100%)',
    color: '#ffffff',
    position: 'relative',
    overflow: 'hidden'
  };

  const gradientBorderStyle = {
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
    height: '4px',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  };

  const scrollButtonStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '40px',
    height: '40px',
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    border: 'none',
    borderRadius: '50%',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: 'all 0.2s ease',
    zIndex: 1000
  };

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      
      <footer style={footerStyle}>
        {/* Gradient border */}
        <div style={gradientBorderStyle}></div>
        
        {/* Newsletter Section */}
        <div className="py-4" style={footerStyle}>
          <div className="container">
            <div className="text-center">
              <h3 className="h5 fw-bold mb-2">Stay Updated</h3>
              <p className="text-light mb-3 small">Subscribe for special offers and deals</p>
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="form-control form-control-sm"
                      style={{fontSize: '14px'}}
                    />
                    <button
                      onClick={handleSubscribe}
                      className="btn btn-light btn-sm d-flex align-items-center gap-1"
                      style={{fontSize: '14px', whiteSpace: 'nowrap'}}
                    >
                      <Mail size={16} />
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              {isSubscribed && (
                <div className="mt-3 text-success small">
                  ✓ Thank you for subscribing!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container py-4">
          <div className="row">
            
            {/* Company Info */}
            <div className="col-lg-6 mb-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div 
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '24px',
                    height: '24px',
                    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                    borderRadius: '8px'
                  }}
                >
                  <Heart size={12} color="white" />
                </div>
                <h3 className="h5 fw-bold mb-0">ShopMart</h3>
              </div>
              <p className="text-light small mb-3" style={{fontSize: '12px'}}>
                Your trusted partner for quality products and exceptional service.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="text-secondary" style={{transition: 'color 0.2s'}}>
                  <Facebook size={16} />
                </a>
                <a href="#" className="text-secondary" style={{transition: 'color 0.2s'}}>
                  <Instagram size={16} />
                </a>
                <a href="#" className="text-secondary" style={{transition: 'color 0.2s'}}>
                  <Twitter size={16} />
                </a>
                <a href="#" className="text-secondary" style={{transition: 'color 0.2s'}}>
                  <Youtube size={16} />
                </a>
              </div>
            </div>

            {/* Links and Contact Section */}
            <div className="col-lg-6">
              {/* Customer Service */}
              <div className="mb-3">
                <h4 className="h6 fw-semibold mb-2">Customer Service</h4>
                <div className="d-flex flex-wrap gap-3" style={{fontSize: '12px'}}>
                  <a href="#" className="text-light text-decoration-none">Contact Us</a>
                  <a href="#" className="text-light text-decoration-none">FAQ</a>
                  <a href="#" className="text-light text-decoration-none">Shipping Info</a>
                  <a href="#" className="text-light text-decoration-none">Returns</a>
                  <a href="#" className="text-light text-decoration-none">Track Order</a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mb-3">
                <h4 className="h6 fw-semibold mb-2">Quick Links</h4>
                <div className="d-flex flex-wrap gap-3" style={{fontSize: '12px'}}>
                  <a href="#" className="text-light text-decoration-none">About Us</a>
                  <a href="#" className="text-light text-decoration-none">Privacy Policy</a>
                  <a href="#" className="text-light text-decoration-none">Terms of Service</a>
                  <a href="#" className="text-light text-decoration-none">Careers</a>
                  <a href="#" className="text-light text-decoration-none">Blog</a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mb-3">
                <h4 className="h6 fw-semibold mb-2">Contact</h4>
                <div className="d-flex flex-wrap gap-3" style={{fontSize: '12px'}}>
                  <div className="d-flex align-items-center gap-2 text-light">
                    <MapPin size={12} style={{color: '#3b82f6'}} />
                    <span>123 Commerce St, City, State</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-light">
                    <Phone size={12} style={{color: '#10b981'}} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-light">
                    <Mail size={12} style={{color: '#8b5cf6'}} />
                    <span>support@shopmart.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="border-top border-secondary mt-4 pt-4">
            <div className="row g-3">
              <div className="col-6 col-lg-3">
                <div className="d-flex align-items-center gap-2">
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: 'rgba(59, 130, 246, 0.2)',
                      borderRadius: '8px'
                    }}
                  >
                    <Truck size={16} style={{color: '#3b82f6'}} />
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-0" style={{fontSize: '12px'}}>Free Shipping</h5>
                    <p className="text-secondary mb-0" style={{fontSize: '10px'}}>On orders $50+</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="d-flex align-items-center gap-2">
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: 'rgba(16, 185, 129, 0.2)',
                      borderRadius: '8px'
                    }}
                  >
                    <RotateCcw size={16} style={{color: '#10b981'}} />
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-0" style={{fontSize: '12px'}}>Easy Returns</h5>
                    <p className="text-secondary mb-0" style={{fontSize: '10px'}}>30-day policy</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="d-flex align-items-center gap-2">
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: 'rgba(139, 92, 246, 0.2)',
                      borderRadius: '8px'
                    }}
                  >
                    <Shield size={16} style={{color: '#8b5cf6'}} />
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-0" style={{fontSize: '12px'}}>Secure Payment</h5>
                    <p className="text-secondary mb-0" style={{fontSize: '10px'}}>SSL protected</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="d-flex align-items-center gap-2">
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: 'rgba(249, 115, 22, 0.2)',
                      borderRadius: '8px'
                    }}
                  >
                    <CreditCard size={16} style={{color: '#f97316'}} />
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-0" style={{fontSize: '12px'}}>Multiple Payment</h5>
                    <p className="text-secondary mb-0" style={{fontSize: '10px'}}>Visa, PayPal, Apple Pay</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary" style={{background: 'rgba(0,0,0,0.2)'}}>
          <div className="container py-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="text-secondary small">
                  © 2025 ShopMart. All rights reserved.
                </div>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="d-flex align-items-center justify-content-md-end gap-2">
                  <span className="text-secondary small">We accept:</span>
                  <div className="d-flex gap-1">
                    <div 
                      className="d-flex align-items-center justify-content-center fw-bold text-white"
                      style={{
                        width: '24px',
                        height: '16px',
                        background: '#1e40af',
                        borderRadius: '2px',
                        fontSize: '10px'
                      }}
                    >
                      V
                    </div>
                    <div 
                      className="d-flex align-items-center justify-content-center fw-bold text-white"
                      style={{
                        width: '24px',
                        height: '16px',
                        background: '#dc2626',
                        borderRadius: '2px',
                        fontSize: '10px'
                      }}
                    >
                      M
                    </div>
                    <div 
                      className="d-flex align-items-center justify-content-center fw-bold text-white"
                      style={{
                        width: '24px',
                        height: '16px',
                        background: '#2563eb',
                        borderRadius: '2px',
                        fontSize: '10px'
                      }}
                    >
                      P
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          style={scrollButtonStyle}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <ChevronUp size={16} />
        </button>
      </footer>
    </>
  );
};

export default Footer;