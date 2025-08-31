import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Team = () => {
  useScrollAnimation('.textAnimationUP', 'textAnimationUPShow');
  useScrollAnimation('.BoxAnimation', 'BoxAnimationShow');

  return (
    <section className="team" id="team">
      <div className="team-text textAnimationUP">
        creative<span style={{color: "#d25b38"}}> team </span>members
      </div>
      <div className="team-container">
        <div className="team-member BoxAnimation">
          <img src="images/Imaeg place here5.png" alt="Team member" width="150" height="auto" />
          <div className="team-top">
            <h3>DESIGNER</h3>
            <h5>GRAPHIC DESIGNER</h5>
          </div>
          <div className="team-description">
            Lorem ipsum dolor sit amet consecte tur adipisicing elit. Possimus natus
            beatae atque nihil cum earum aperiam totam, aspernatur sequi doloremque.
          </div>
        </div>
        <div className="team-member BoxAnimation">
          <img src="images/Imaeg place here6.png" alt="Team member" width="150" height="auto" />
          <div className="team-top">
            <h3>DESIGNER</h3>
            <h5>GRAPHIC DESIGNER</h5>
          </div>
          <div className="team-description">
            Lorem ipsum dolor sit amet consecte tur adipisicing elit. Possimus natus
            beatae atque nihil cum earum aperiam totam, aspernatur sequi doloremque.
          </div>
        </div>
        <div className="team-member BoxAnimation">
          <img src="images/Imaeg place here7.png" alt="Team member" width="150" height="auto" />
          <div className="team-top">
            <h3>DESIGNER</h3>
            <h5>GRAPHIC DESIGNER</h5>
          </div>
          <div className="team-description">
            Lorem ipsum dolor sit amet consecte tur adipisicing elit. Possimus natus
            beatae atque nihil cum earum aperiam totam, aspernatur sequi doloremque.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;