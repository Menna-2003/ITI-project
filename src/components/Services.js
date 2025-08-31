
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Services() {
  useScrollAnimation('.textAnimationUP', 'textAnimationUPShow');
  useScrollAnimation('.BoxAnimation', 'BoxAnimationShow');

  return (
    <section className="services" id="services">
      <h1 className="textAnimationUP">
        OUR <br />
        <span style={{color: "#d25b38"}}>SPECIAL</span> <br />
        SERVICES
      </h1>
      <div className="services-container">
        <div className="services-box BoxAnimation">
          <i className="fa-solid fa-globe"></i>
          <h3>designer name</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ut veritatis omnis nesciunt hic fuga?</p>
        </div>
        <div className="services-box BoxAnimation">
          <i className="fa-solid fa-cloud-bolt"></i>
          <h3>designer name</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ut veritatis omnis nesciunt hic fuga?</p>
        </div>
        <div className="services-box BoxAnimation">
          <i className="fa-solid fa-box"></i>
          <h3>designer name</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ut veritatis omnis nesciunt hic fuga?</p>
        </div>
        <div className="services-box BoxAnimation">
          <i className="fa-solid fa-umbrella"></i>
          <h3>designer name</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ut veritatis omnis nesciunt hic fuga?</p>
        </div>
        <div className="services-box BoxAnimation">
          <i className="fa-solid fa-file-signature"></i>
          <h3>designer name</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ut veritatis omnis nesciunt hic fuga?</p>
        </div>
        <div className="services-box BoxAnimation">
          <i className="fa-solid fa-hand-pointer"></i>
          <h3>designer name</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ut veritatis omnis nesciunt hic fuga?</p>
        </div>
      </div>
    </section>
  );
};