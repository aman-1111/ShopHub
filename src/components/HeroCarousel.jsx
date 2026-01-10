import React from 'react';

const HeroCarousel = () => {
  return (
    <div
      id="heroCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="usama-akram-kP6knT7tjn4-unsplash.jpg"
            className="d-block w-100"
            alt="Banner 1"
            style={{
              height: '400px',
              objectFit: 'cover',
              width: '100%',
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="shyam-mishra-zuo1zb6mEcY-unsplash.jpg"
            className="d-block w-100"
            alt="Banner 2"
            style={{
              height: '400px',
              objectFit: 'cover',
              width: '100%',
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="maksim-larin-NOpsC3nWTzY-unsplash.jpg"
            className="d-block w-100"
            alt="Banner 2"
            style={{
              height: '400px',
              objectFit: 'cover',
              width: '100%',
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="jeff-tumale-SD9Jyl1xNQ4-unsplash.jpg"
            className="d-block w-100"
            alt="Banner 3"
            style={{
              height: '400px',
              objectFit: 'cover',
              width: '100%',
            }}
          />
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroCarousel;
