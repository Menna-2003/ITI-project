import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Blog() {
  useScrollAnimation('.textAnimationUP', 'textAnimationUPShow');
  useScrollAnimation('.BoxAnimation', 'BoxAnimationShow');

  return (
    <section className="blog" id="blog">
      <h1 className="textAnimationUP">
        LATEST<br />
        <span style={{color: "#d25b38"}}>DESIGN</span><br />
        BLOG
      </h1>
      <div className="blog-container">
        <div className="blog-col1">
          <div className="blog-box BoxAnimation">
            <img src="images/Post Image Place here2.png" alt="Blog post" />
          </div>
          <div className="blog-box BoxAnimation">
            <img src="images/Post Image Place here4.png" alt="Blog post" />
          </div>
          <div className="blog-box BoxAnimation">
            <img src="images/Post Image Place here3.png" alt="Blog post" />
          </div>
        </div>
        <div className="blog-col2">
          <div className="blog-box BoxAnimation">
            <h2>designed and built with care</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta rem minus aperiam! Rerum blanditiis cupiditate nostrum officia nobis repellat totam! Impedit officiis</p>
          </div>
          <div className="blog-box BoxAnimation">
            <h2>designed and built with care</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta rem minus aperiam! Rerum blanditiis cupiditate nostrum officia nobis repellat totam! Impedit officiis</p>
          </div>
          <div className="blog-box BoxAnimation">
            <h2>designed and built with care</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta rem minus aperiam! Rerum blanditiis cupiditate nostrum officia nobis repellat totam! Impedit officiis</p>
          </div>
        </div>
        <div className="blog-box blog-featured BoxAnimation">
          <img src="images/Post Image Place here.png" alt="Featured blog post" />
          <div className="blog-text">
            <h2>designed and built with care</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta rem minus aperiam! Rerum blanditiis cupiditate nostrum officia nobis repellat totam! Impedit officiis
              facere non iste. Nam temporibus suscipit nihil natus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};