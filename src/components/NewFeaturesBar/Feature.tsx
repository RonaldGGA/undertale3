import React from "react";
import feature1 from "../../assets/feature/feature1.png";
import feature2 from "../../assets/feature/feature2.png";
import feature3 from "../../assets/feature/feature3.png";

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
            ? feature1
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
