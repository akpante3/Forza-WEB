import React from 'react';
import { ReactComponent as ThinkingImage } from '../../icons/thinking.svg';
import { ReactComponent as ThinkingCloud } from '../../icons/thinkingcloud.svg';

const Thinking = (props) => {

  return (
      <div className="thinking">
        <div>
            <ThinkingCloud className="thinking__cloud"/>
            <ThinkingImage className="thinking__cloud-image"/>
        </div>
        <div className="thinking__text">
            <div className="thinking__text__header"> Thinking</div>
            <p className="thinking__text__body">At Forza, every decision is data-driven. We go through repeated iterations and tests before coming up with decisions. It could be a simple problem such as what background color to use for your social media posts or a more complex problem like how to deliver an integrated marketing campaign to launch your brand. Either way, we are obsessively focused on delivering solutions that work.</p>
        </div>
      </div>
  );
}

export default Thinking;