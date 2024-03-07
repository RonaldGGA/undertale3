import React from "react";

interface featureProps {
  title: string;
  currentIndex: number;
}

const Feature: React.FC<featureProps> = ({ title, currentIndex }) => {
  return (
    <div
      className="app__landing__newFeatures-feature"
      style={{ transform: `translateX(${currentIndex * -100}%)` }}>
      <div className="app__landing__newFeatures-feature-text">
        <p>{title}</p>
        <a href="#">Learn More</a>
      </div>
    </div>
  );
};

export default Feature;
