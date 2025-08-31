import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Pricing() {
  useScrollAnimation('.textAnimationUP', 'textAnimationUPShow');
  useScrollAnimation('.BoxAnimation', 'BoxAnimationShow');

  return (
    <section className="pricing" id="pricing">
      <h2 className="textAnimationUP">Our<span>Desigins</span>Package</h2>
      <div className="pricing-container">
        <div className="pricing-box BoxAnimation">
          <i className="fa-regular fa-lightbulb"></i>
          <h3>designer name</h3>
          <span> garphic designer </span><br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda provident error laboriosam ratione non adipisci! Animi harum maiores non culpa qui repellendus illum
            laborum voluptates.
          </p>
          <br />
          <h3>$50</h3>
          <br />
          <button>Read more</button>
        </div>
        <div className="pricing-box BoxAnimation">
          <i className="fa-solid fa-cart-shopping"></i>
          <h3>designer name</h3>
          <span> garphic designer </span><br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda provident error laboriosam ratione non adipisci! Animi harum maiores non culpa qui repellendus illum
            laborum voluptates.
          </p>
          <br />
          <h3 style={{color: "#d25b38"}}>$500</h3>
          <br />
          <button>Read more</button>
        </div>
        <div className="pricing-box BoxAnimation">
          <i className="fa-regular fa-image"></i>
          <h3>designer name</h3>
          <span> garphic designer </span><br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda provident error laboriosam ratione non adipisci! Animi harum maiores non culpa qui repellendus illum
            laborum voluptates.
          </p>
          <br />
          <h3>$1000</h3>
          <br />
          <button>Read more</button>
        </div>
      </div>
    </section>
  );
};
