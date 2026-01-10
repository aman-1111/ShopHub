import React from 'react';

const shoes = [
  {
    src: 'shoe1.png',
    alt: 'Shoe 1',
    discount: '50% OFF'
  },
  {
    src: 'shoe2.jpg',
    alt: 'Shoe 2',
    discount: '40% OFF'
  },
  {
    src: 'shoe4.webp',
    alt: 'Shoe 2',
    discount: '40% OFF'
  },
  {
    src: 'shoe5.webp',
    alt: 'Shoe 2',
    discount: '40% OFF'
  },
  {
    src: 'shoe3.jpg',
    alt: 'Shoe 3',
    discount: '30% OFF'
  }
];

const ShoeMarquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {shoes.concat(shoes).map((shoe, index) => (
          <div className="shoe-wrapper" key={index}>
            <span className="discount-tag">{shoe.discount}</span>
            <img src={shoe.src} alt={shoe.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeMarquee;
