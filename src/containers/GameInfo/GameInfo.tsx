import React, { useState, useEffect, useRef } from 'react';
import { GameInfoFeature } from '../../components/exports';
import { Lens } from '@mui/icons-material';
import humor from '../../assets/gameInfo/humor.png';
import story from '../../assets/gameInfo/story.png';
import combat from '../../assets/gameInfo/combat.png';

interface Feature {
    title: string;
    text: string;
    image: string;
}
const features = [
  {
    title:"Non-linear narrative and meaningful decisions",
    text: "Each choice affects the story and characters, leading to multiple endings and different experiences.",
    image:humor,
  },
  {
    title:"Undertale features an innovative combat system",
    text: "Combines traditional RPG elements with original mechanics. Players can engage in dialogue, show compassion, or resolve conflicts peacefully, adding depth and strategy to the game.",
    image:story,
  },
  {
    title:" Each character has a distinctive personality and memorable moments",
    text:" Each character has a distinctive personality and memorable moments, creating a unique and captivating experience for players.",
    image:combat,
  },
  // {
  //   title:"Non-linear narrative and meaningful decisions",
  //   text:"  Each character has a distinctive personality and memorable moments, creating a unique and captivating experience for players.",
  //   image:story,
  // }
] 


const GameInfo = () => {
 

    return (
        <div className="app__gameInfo">
            <div className="container">
              <h3 className='app__gameInfo--title'>What is UNDERTALE?</h3>
                <div className='app__gameInfo_container'>
                  {features.map((feature)=>{
                    return (
                      <GameInfoFeature 
                      title = {feature.title}
                      text = {feature.text}
                      image = {feature.image}
                      />
                    )
                  })}
                </div>
            </div>
        </div>
    );
};

export default GameInfo;

