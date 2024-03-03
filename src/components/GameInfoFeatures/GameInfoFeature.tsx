import React from 'react';

const GameInfoFeature = ({ title, text, image}) => {

  return (
    <div className="app__gameInfo_container_feature" >
       <div className='app__gameInfo_container_feature-text'>
          <h5>{title}</h5>
          <p>{text}</p>
          <a href="#">Read More --</a>
       </div>
       <div className='app__gameInfo_container_feature-image'>
          <img src={image} alt='feature1'/>
       </div>
    </div>
  );
}

export default GameInfoFeature;
