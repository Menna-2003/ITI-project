import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  useScrollAnimation('.animationText', 'show');
  useScrollAnimation('.textAnimationUP', 'textAnimationUPShow');
  useScrollAnimation('.BoxAnimation', 'BoxAnimationShow');

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h1 className="textAnimationUP">
            <span className="f word">about </span>
            <span className="s word">creative </span>
            <span className="t word">agency </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic labore cum libero ea, eius sed iusto repellendus totam neque eos aut autem! Voluptatibus amet maiores harum. Quae
            id magni consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facere quaerat eius cumque repellat aliquam sapiente magni praesentium? Ad libero
            molestias vel et quidem optio nulla unde sed consectetur assumenda?
          </p>
        </div>
        <div className="about-box">
          <img src="images/Layer man.png" alt="Man working" />
          <div className="about-overlay"></div>
          <div className="about-section about-section-one BoxAnimation">
            <div className="about-fixed">
              <h2>working hours</h2>
              <p>designer name</p>
            </div>
            <i className="fa-solid fa-tag about-icon"></i>
            <div className="about-hidden animationText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In voluptates officia quis hic iusto quisquam eius nam! Error, consequuntur quas. Nesciunt corporis odio magni rem
              velit ipsa temporibus ut veritatis.
            </div>
          </div>
          <div className="about-section about-section-two BoxAnimation">
            <div className="about-fixed">
              <h2>working hours</h2>
              <p>designer name</p>
            </div>
            <i className="fa-solid fa-tag about-icon"></i>
            <div className="about-hidden animationText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In voluptates officia quis hic iusto quisquam eius nam! Error, consequuntur quas. Nesciunt corporis odio magni rem
              velit ipsa temporibus ut veritatis.
            </div>
          </div>
          <div className="about-section about-section-three BoxAnimation">
            <div className="about-fixed">
              <h2>working hours</h2>
              <p>designer name</p>
            </div>
            <i className="fa-solid fa-tag about-icon"></i>
            <div className="about-hidden animationText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In voluptates officia quis hic iusto quisquam eius nam! Error, consequuntur quas. Nesciunt corporis odio magni rem
              velit ipsa temporibus ut veritatis.
            </div>
          </div>
          <div className="about-section about-section-four BoxAnimation">
            <div className="about-fixed">
              <h2>working hours</h2>
              <p>designer name</p>
            </div>
            <i className="fa-solid fa-tag about-icon"></i>
            <div className="about-hidden animationText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In voluptates officia quis hic iusto quisquam eius nam! Error, consequuntur quas. Nesciunt corporis odio magni rem
              velit ipsa temporibus ut veritatis.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};