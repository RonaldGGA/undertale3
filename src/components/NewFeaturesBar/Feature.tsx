import React from "react";
import feature from "../../assets/features/feature.png";
import feature2 from "../../assets/features/feature2.png";
import feature4 from "../../assets/features/feature4.png";

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
          currentIndex === 0
            ? feature
            : currentIndex === 1
            ? feature2
            : currentIndex === 2
            ? feature4
            : feature
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
