import React from 'react';

const Main = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          WELCOME TO THE <span>AWARD <br />WINNING</span> AGENCY
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At nam blanditiis do<br />lorum beatae numquam illo earum ea suscipit itaque ullam ratione expeditaa</p>
        <div className="button-container">
          <button className="button1">Read more</button>
          <button className="button2">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default Main;