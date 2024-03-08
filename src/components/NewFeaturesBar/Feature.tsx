import React from "react";
import feature from "../../assets/features/feature.png";
import feature2 from "../../assets/features/feature2.png";
import feature3 from "../../assets/features/feature3.png";

interface featureProps {
  title: string;
  currentIndex: number;
}

const Feature: React.FC<featureProps> = ({ title, currentIndex }) => {
  return (
    <div
      className="app__landing__newFeatures-feature"
      style={{
        transform: `translateX(${currentIndex * -100}%)`,
        background: `linear-gradient(
          to bottom,
          rgba(0 0 0 /0.5),
          rgba(0 0 0 /0.6)
        ),
        url(${
          currentIndex % 3 === 0
            ? feature
            : currentIndex % 3 === 1
            ? feature2
            : feature3
        })`,
      }}>
      <div className="app__landing__newFeatures-feature-text">
        <p>{title}</p>
        <a href="#">Learn More</a>
      </div>
    </div>
  );
};

export default Feature;
