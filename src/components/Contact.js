import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  useScrollAnimation('.textAnimationUP', 'textAnimationUPShow');

  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <h2 className="textAnimationUP">How <span style={{fontSize: "50px"}}>find us</span></h2>
        <div className="contact-info">
          <h3><i className="fa-solid fa-map-location-dot"></i> Address</h3>
          <p className="add">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="contact-info">
          <h3><i className="fa-solid fa-phone"></i> call us</h3>
          <p>+123 4567 8900</p>
          <p>+123 4567 8900</p>
        </div>
        <div className="contact-info">
          <h3><i className="fa-solid fa-envelope"></i> email</h3>
          <p>free@paskj.com</p>
        </div>
        <div className="contact-info">
          <h3><i className="fa-solid fa-desktop"></i> website</h3>
          <p>www.paskj.com</p>
        </div>
      </div>
      <div className="contact-right">
        <img src="images/Image-footer.png" alt="Contact us" />
      </div>
    </section>
  );
};