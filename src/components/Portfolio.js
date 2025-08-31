import React from 'react';

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-grid">
        <img src="images/img1.png" alt="Portfolio item" />        
        <img src="images/img2.png" alt="Portfolio item" />
        <img src="images/img3.png" alt="Portfolio item" />
        <div className="portfolio-text">
          our
          <span style={{color: "#d25b38"}}>portfolio</span>
          gallery
        </div>
        <img src="images/img4.png" alt="Portfolio item" />
        <img src="images/img5.png" alt="Portfolio item" />
        <img src="images/img6.png" alt="Portfolio item" />
      </div>
    </section>
  );
};