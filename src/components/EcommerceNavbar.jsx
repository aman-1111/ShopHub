// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [cartCount, setCartCount] = useState(3);

//   const categories = [
//     { name: 'Men', subcategories: ['Sneakers', 'Boots', 'Sandals', 'Formal'] },
//     { name: 'Women', subcategories: ['Heels', 'Flats', 'Sneakers', 'Boots'] },
//     { name: 'Kids', subcategories: ['School Shoes', 'Sneakers', 'Sandals'] },
//     { name: 'Brands', subcategories: ['Nike', 'Adidas', 'Puma', 'Converse'] },
//     { name: 'Sale', subcategories: ['Up to 30% Off', 'Up to 50% Off', 'Clearance'] }
//   ];

//   const styles = {
//     topBanner: {
//       background: 'linear-gradient(to right, #2563eb, #7c3aed)',
//       color: 'white',
//       textAlign: 'center',
//       padding: '8px 0',
//       fontSize: '14px',
//       fontWeight: '500'
//     },
//     topBar: {
//       backgroundColor: '#f9fafb',
//       borderBottom: '1px solid #e5e7eb',
//       display: 'none',
//       '@media (min-width: 1024px)': {
//         display: 'block'
//       }
//     },
//     topBarContent: {
//       maxWidth: '1280px',
//       margin: '0 auto',
//       padding: '0 16px',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '8px 16px',
//       fontSize: '14px',
//       color: '#6b7280'
//     },
//     topBarLeft: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '24px'
//     },
//     topBarItem: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '8px'
//     },
//     topBarRight: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '16px'
//     },
//     topBarLink: {
//       color: '#6b7280',
//       textDecoration: 'none',
//       transition: 'color 0.2s',
//       cursor: 'pointer'
//     },
//     navbar: {
//       backgroundColor: 'white',
//       boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//       position: 'sticky',
//       top: '0',
//       zIndex: '50'
//     },
//     navbarContent: {
//       maxWidth: '1280px',
//       margin: '0 auto',
//       padding: '0 16px'
//     },
//     navbarMain: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       height: '64px'
//     },
//     logo: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '8px'
//     },
//     logoIcon: {
//       width: '32px',
//       height: '32px',
//       background: 'linear-gradient(to right, #2563eb, #7c3aed)',
//       borderRadius: '8px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
//     logoText: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//       color: '#111827'
//     },
//     desktopNav: {
//       display: 'none',
//       alignItems: 'center',
//       gap: '32px',
//       flex: '1',
//       justifyContent: 'center'
//     },
//     navItem: {
//       position: 'relative',
//       display: 'inline-block'
//     },
//     navButton: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '4px',
//       color: '#374151',
//       fontWeight: '500',
//       padding: '8px 0',
//       background: 'none',
//       border: 'none',
//       cursor: 'pointer',
//       transition: 'color 0.2s',
//       whiteSpace: 'nowrap'
//     },
//     dropdown: {
//       position: 'absolute',
//       left: '0',
//       marginTop: '8px',
//       width: '192px',
//       backgroundColor: 'white',
//       borderRadius: '6px',
//       boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//       opacity: '0',
//       visibility: 'hidden',
//       transition: 'all 0.2s',
//       zIndex: '50'
//     },
//     dropdownVisible: {
//       opacity: '1',
//       visibility: 'visible'
//     },
//     dropdownContent: {
//       padding: '8px 0'
//     },
//     dropdownItem: {
//       display: 'block',
//       padding: '8px 16px',
//       fontSize: '14px',
//       color: '#374151',
//       textDecoration: 'none',
//       transition: 'all 0.2s'
//     },
//     searchBar: {
//       display: 'none',
//       maxWidth: '384px',
//       margin: '0 16px'
//     },
//     searchContainer: {
//       position: 'relative',
//       width: '100%'
//     },
//     searchInput: {
//       width: '100%',
//       paddingLeft: '40px',
//       paddingRight: '16px',
//       paddingTop: '8px',
//       paddingBottom: '8px',
//       border: '1px solid #d1d5db',
//       borderRadius: '8px',
//       fontSize: '14px',
//       transition: 'all 0.2s'
//     },
//     searchIcon: {
//       position: 'absolute',
//       left: '12px',
//       top: '50%',
//       transform: 'translateY(-50%)',
//       color: '#9ca3af',
//       fontSize: '18px'
//     },
//     rightIcons: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '16px'
//     },
//     iconButton: {
//       padding: '8px',
//       color: '#374151',
//       background: 'none',
//       border: 'none',
//       cursor: 'pointer',
//       position: 'relative',
//       transition: 'color 0.2s'
//     },
//     badge: {
//       position: 'absolute',
//       top: '-4px',
//       right: '-4px',
//       backgroundColor: '#dc2626',
//       color: 'white',
//       borderRadius: '50%',
//       width: '20px',
//       height: '20px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontSize: '12px'
//     },
//     cartBadge: {
//       backgroundColor: '#2563eb'
//     },
//     mobileSearch: {
//       display: 'block',
//       borderTop: '1px solid #e5e7eb',
//       padding: '16px'
//     },
//     mobileMenu: {
//       display: 'block',
//       borderTop: '1px solid #e5e7eb'
//     },
//     mobileMenuContent: {
//       padding: '8px 16px',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '4px'
//     },
//     mobileCategory: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '4px'
//     },
//     mobileCategoryButton: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       width: '100%',
//       textAlign: 'left',
//       padding: '12px',
//       color: '#374151',
//       backgroundColor: 'transparent',
//       border: 'none',
//       borderRadius: '6px',
//       fontWeight: '500',
//       cursor: 'pointer',
//       transition: 'all 0.2s'
//     },
//     mobileSubcategories: {
//       paddingLeft: '16px',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '4px'
//     },
//     mobileSubcategoryLink: {
//       display: 'block',
//       padding: '8px 12px',
//       fontSize: '14px',
//       color: '#6b7280',
//       textDecoration: 'none',
//       borderRadius: '6px',
//       transition: 'all 0.2s'
//     },
//     mobileAccountLinks: {
//       borderTop: '1px solid #e5e7eb',
//       padding: '8px 16px',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '4px'
//     },
//     mobileAccountLink: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '12px',
//       padding: '12px',
//       color: '#374151',
//       textDecoration: 'none',
//       borderRadius: '6px',
//       transition: 'all 0.2s'
//     }
//   };

//   // Media queries for responsive design
//   const mediaQueries = `
//     @media (min-width: 768px) {
//       .search-bar { display: flex !important; }
//       .mobile-search-btn { display: none !important; }
//     }
//     @media (min-width: 640px) {
//       .hidden-sm { display: block !important; }
//     }
//     @media (min-width: 1024px) {
//       .desktop-nav { display: flex !important; }
//       .mobile-menu-btn { display: none !important; }
//       .top-bar { display: block !important; }
//     }
//     .nav-item:hover .dropdown {
//       opacity: 1 !important;
//       visibility: visible !important;
//     }
//     .icon-button:hover {
//       color: #2563eb !important;
//     }
//     .nav-button:hover {
//       color: #2563eb !important;
//     }
//     .top-bar-link:hover {
//       color: #2563eb !important;
//     }
//     .dropdown-item:hover {
//       background-color: #f3f4f6 !important;
//       color: #2563eb !important;
//     }
//     .mobile-category-button:hover {
//       background-color: #f3f4f6 !important;
//       color: #2563eb !important;
//     }
//     .mobile-subcategory-link:hover {
//       background-color: #f3f4f6 !important;
//       color: #2563eb !important;
//     }
//     .mobile-account-link:hover {
//       background-color: #f3f4f6 !important;
//       color: #2563eb !important;
//     }
//     .search-input:focus {
//       outline: none !important;
//       border-color: #2563eb !important;
//       box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2) !important;
//     }
//   `;

//   return (
//     <div style={{ width: '100%' }}>
//       <style>{mediaQueries}</style>
      
//       {/* Top Banner */}
//       <div style={styles.topBanner}>
//         🎉 FREE SHIPPING on orders over $75 | Use code: FREESHIP75
//       </div>

//       {/* Top Bar */}
//       <div style={styles.topBar} className="top-bar">
//         <div style={styles.topBarContent}>
//           <div style={styles.topBarLeft}>
//             <div style={styles.topBarItem}>
//               <span style={{ color: '#2563eb' }}>📍</span>
//               <span>Free Store Pickup</span>
//             </div>
//             <div style={styles.topBarItem}>
//               <span style={{ color: '#2563eb' }}>📞</span>
//               <span>1-800-SHOES-24</span>
//             </div>
//             <div style={styles.topBarItem}>
//               <span style={{ color: '#2563eb' }}>✉️</span>
//               <span>support@shoesstore.com</span>
//             </div>
//           </div>
//           <div style={styles.topBarRight}>
//             <a href="#" style={styles.topBarLink} className="top-bar-link">Track Order</a>
//             <a href="#" style={styles.topBarLink} className="top-bar-link">Size Guide</a>
//             <a href="#" style={styles.topBarLink} className="top-bar-link">Help</a>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav style={styles.navbar}>
//         <div style={styles.navbarContent}>
//           <div style={styles.navbarMain}>
//             {/* Logo */}
//             <div style={styles.logo}>
//               <div style={styles.logoIcon}>
//                 <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>S</span>
//               </div>
//               <span style={styles.logoText}>ShoesStore</span>
//             </div>

//             {/* Desktop Navigation */}
//             <div style={styles.desktopNav} className="desktop-nav">
//               {categories.map((category) => (
//                 <div key={category.name} style={styles.navItem} className="nav-item">
//                   <button style={styles.navButton} className="nav-button">
//                     <span>{category.name}</span>
//                     <span style={{ fontSize: '12px' }}>▼</span>
//                   </button>
//                   <div style={styles.dropdown} className="dropdown">
//                     <div style={styles.dropdownContent}>
//                       {category.subcategories.map((sub) => (
//                         <a
//                           key={sub}
//                           href="#"
//                           style={styles.dropdownItem}
//                           className="dropdown-item"
//                         >
//                           {sub}
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Search Bar */}
//             <div style={styles.searchBar} className="search-bar">
//               <div style={styles.searchContainer}>
//                 <input
//                   type="text"
//                   placeholder="Search shoes, brands, categories..."
//                   style={styles.searchInput}
//                   className="search-input"
//                 />
//                 <span style={styles.searchIcon}>🔍</span>
//               </div>
//             </div>

//             {/* Right Icons */}
//             <div style={styles.rightIcons}>
//               {/* Mobile Search */}
//               <button
//                 onClick={() => setIsSearchOpen(!isSearchOpen)}
//                 style={styles.iconButton}
//                 className="icon-button mobile-search-btn"
//               >
//                 <span style={{ fontSize: '20px' }}>🔍</span>
//               </button>

//               {/* Wishlist */}
//               <button style={styles.iconButton} className="icon-button hidden-sm">
//                 <span style={{ fontSize: '20px' }}>❤️</span>
//                 <span style={{...styles.badge}}>2</span>
//               </button>

//               {/* Account */}
//               <button style={styles.iconButton} className="icon-button hidden-sm">
//                 <span style={{ fontSize: '20px' }}>👤</span>
//               </button>

//               {/* Cart */}
//               <button style={styles.iconButton} className="icon-button">
//                 <span style={{ fontSize: '20px' }}>🛒</span>
//                 {cartCount > 0 && (
//                   <span style={{...styles.badge, ...styles.cartBadge}}>{cartCount}</span>
//                 )}
//               </button>

//               {/* Mobile Menu Toggle */}
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 style={styles.iconButton}
//                 className="icon-button mobile-menu-btn"
//               >
//                 <span style={{ fontSize: '20px' }}>{isMenuOpen ? '✕' : '☰'}</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Search Bar */}
//         {isSearchOpen && (
//           <div style={styles.mobileSearch}>
//             <div style={styles.searchContainer}>
//               <input
//                 type="text"
//                 placeholder="Search shoes, brands, categories..."
//                 style={styles.searchInput}
//                 className="search-input"
//               />
//               <span style={styles.searchIcon}>🔍</span>
//             </div>
//           </div>
//         )}

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div style={styles.mobileMenu}>
//             <div style={styles.mobileMenuContent}>
//               {categories.map((category) => (
//                 <div key={category.name} style={styles.mobileCategory}>
//                   <button style={styles.mobileCategoryButton} className="mobile-category-button">
//                     <span style={{ fontWeight: '500' }}>{category.name}</span>
//                     <span style={{ fontSize: '12px' }}>▼</span>
//                   </button>
//                   <div style={styles.mobileSubcategories}>
//                     {category.subcategories.map((sub) => (
//                       <a
//                         key={sub}
//                         href="#"
//                         style={styles.mobileSubcategoryLink}
//                         className="mobile-subcategory-link"
//                       >
//                         {sub}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* Mobile Account Links */}
//             <div style={styles.mobileAccountLinks}>
//               <a href="#" style={styles.mobileAccountLink} className="mobile-account-link">
//                 <span style={{ fontSize: '18px' }}>👤</span>
//                 <span>My Account</span>
//               </a>
//               <a href="#" style={styles.mobileAccountLink} className="mobile-account-link">
//                 <span style={{ fontSize: '18px' }}>❤️</span>
//                 <span>Wishlist</span>
//               </a>
//               <a href="#" style={styles.mobileAccountLink} className="mobile-account-link">
//                 <span style={{ fontSize: '18px' }}>📍</span>
//                 <span>Track Order</span>
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';

const EcommerceNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(3);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      alert(`Search functionality would be implemented here for: ${searchQuery}`);
    }
  };

  const handleCartClick = () => {
    alert('Cart functionality would be implemented here');
  };

  const handleUserClick = () => {
    alert('User account functionality would be implemented here');
  };

  const navbarStyle = {
    background: isScrolled 
      ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backdropFilter: isScrolled ? 'blur(15px)' : 'blur(10px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease'
  };

  const navContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px'
  };

  const logoStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'transform 0.3s ease'
  };

  const logoIconStyle = {
    width: '40px',
    height: '40px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px'
  };

  const navMenuStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    transition: '0.3s',
    ...(window.innerWidth <= 768 && {
      position: 'fixed',
      left: isMobileMenuOpen ? '0' : '-100%',
      top: '70px',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      width: '100%',
      textAlign: 'center',
      boxShadow: '0 10px 27px rgba(0, 0, 0, 0.05)',
      padding: '20px 0',
      gap: '10px'
    })
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '10px 15px',
    borderRadius: '25px',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const dropdownMenuStyle = {
    position: 'absolute',
    top: '100%',
    left: '0',
    background: 'white',
    minWidth: '200px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    borderRadius: '10px',
    overflow: 'hidden',
    zIndex: 1000
  };

  const dropdownItemStyle = {
    display: 'block',
    padding: '12px 20px',
    color: '#333',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    borderBottom: '1px solid #f0f0f0'
  };

  const searchBoxStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  };

  const searchInputStyle = {
    padding: '10px 15px 10px 40px',
    border: 'none',
    borderRadius: '25px',
    outline: 'none',
    width: '200px',
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    transition: 'all 0.3s ease'
  };

  const searchIconStyle = {
    position: 'absolute',
    left: '15px',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '16px',
    pointerEvents: 'none'
  };

  const actionButtonStyle = {
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: 'white',
    fontSize: '18px'
  };

  const cartBadgeStyle = {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    background: '#ff4757',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    animation: 'pulse 2s infinite'
  };

  const mobileToggleStyle = {
    display: window.innerWidth <= 768 ? 'flex' : 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    padding: '5px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    border: 'none'
  };

  const hamburgerLineStyle = {
    width: '25px',
    height: '3px',
    background: 'white',
    margin: '3px 0',
    transition: '0.3s',
    borderRadius: '2px'
  };

  const categories = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports',
    'Books'
  ];

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f5f5;
          padding-top: 80px;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .nav-link:hover::before {
          left: 0;
        }

        .dropdown-item:hover {
          background: #f8f9fa;
          padding-left: 30px;
          color: #667eea;
        }

        .dropdown-item:last-child {
          border-bottom: none;
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.8);
        }

        .search-input:focus {
          width: 250px;
          background: rgba(255, 255, 255, 0.3);
        }

        .action-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .mobile-toggle:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .hamburger-active .hamburger-line:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }

        .hamburger-active .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .hamburger-active .hamburger-line:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        .dropdown-menu {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }

        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .nav-actions {
            gap: 15px;
          }
          
          .search-input {
            width: 150px;
          }
          
          .search-input:focus {
            width: 180px;
          }
          
          .dropdown-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            background: rgba(255, 255, 255, 0.1);
            margin-top: 10px;
          }
          
          .dropdown-item {
            color: white;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .dropdown-item:hover {
            background: rgba(255, 255, 255, 0.1);
            color: white;
          }
        }
      `}</style>

      <nav style={navbarStyle}>
        <div className="nav-container" style={navContainerStyle}>
          <a href="#" style={logoStyle} className="logo">
            <div style={logoIconStyle}>🛒</div>
            ShopHub
          </a>

          <ul style={navMenuStyle} className="nav-menu">
            <li style={{ position: 'relative' }}>
              <a href="#" style={navLinkStyle} className="nav-link">
                Home
              </a>
            </li>
            <li 
              style={{ position: 'relative' }} 
              className="dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <a href="#" style={navLinkStyle} className="nav-link">
                Categories
              </a>
              <div style={dropdownMenuStyle} className="dropdown-menu">
                {categories.map((category, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    style={dropdownItemStyle}
                    className="dropdown-item"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </li>
            <li style={{ position: 'relative' }}>
              <a href="#" style={navLinkStyle} className="nav-link">
                Deals
              </a>
            </li>
            <li style={{ position: 'relative' }}>
              <a href="#" style={navLinkStyle} className="nav-link">
                About
              </a>
            </li>
            <li style={{ position: 'relative' }}>
              <a href="#" style={navLinkStyle} className="nav-link">
                Contact
              </a>
            </li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="nav-actions">
            <div style={searchBoxStyle}>
              <span style={searchIconStyle}>🔍</span>
              <input
                type="text"
                style={searchInputStyle}
                className="search-input"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearch}
              />
            </div>

            <button
              style={actionButtonStyle}
              className="action-button"
              onClick={handleCartClick}
            >
              🛒
              {cartCount > 0 && (
                <span style={cartBadgeStyle}>{cartCount}</span>
              )}
            </button>

            <button
              style={actionButtonStyle}
              className="action-button"
              onClick={handleUserClick}
            >
              👤
            </button>

            <button
              style={mobileToggleStyle}
              className={`mobile-toggle ${isMobileMenuOpen ? 'hamburger-active' : ''}`}
              onClick={toggleMobileMenu}
            >
              <span style={hamburgerLineStyle} className="hamburger-line"></span>
              <span style={hamburgerLineStyle} className="hamburger-line"></span>
              <span style={hamburgerLineStyle} className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Demo Content */}
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          background: 'white', 
          padding: '30px', 
          margin: '20px 0', 
          borderRadius: '10px', 
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' 
        }}>
          <h2>Welcome to ShopHub</h2>
          <p>This is a React JSX component for the ecommerce navbar. Features include:</p>
          <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
            <li>React hooks for state management</li>
            <li>Responsive design with mobile menu</li>
            <li>Search functionality with controlled input</li>
            <li>Cart counter with badge</li>
            <li>Scroll effects and animations</li>
            <li>Dropdown menu with hover effects</li>
          </ul>
        </div>
        
        <div style={{ 
          background: 'white', 
          padding: '30px', 
          margin: '20px 0', 
          borderRadius: '10px', 
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' 
        }}>
          <h3>React Features</h3>
          <p>
            This component uses modern React patterns including useState and useEffect hooks, 
            event handlers, and conditional rendering. It's fully functional and ready to 
            integrate into your React application.
          </p>
        </div>
      </div>
    </>
  );
};

export default EcommerceNavbar;