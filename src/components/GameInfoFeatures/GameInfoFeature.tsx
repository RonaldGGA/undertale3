import { OpenInNew } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

interface GameInfoFeatureProps {
  title: string;
  text: string;
  image: string;
  finalSection: boolean;
}

const FeatureComponent: React.FC<GameInfoFeatureProps> = ({
  title,
  text,
  image,
  finalSection,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const feature = useRef(null);

  useEffect(() => {
    const options = {
      once: true,
      root: null,
      margin: "0 0 -50% 0",
      behavior: "smooth",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.target === feature.current &&
          !animationCompleted
        ) {
          setIsVisible(true);
          if (entry.target === finalSection) {
            setAnimationCompleted(true);
          }
        }
      });
    }, options);

    if (feature.current) {
      observer.observe(feature.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [finalSection, animationCompleted]);

  return (
    <div
      ref={feature}
      className={`app__gameInfo_container_feature ${
        isVisible ? "animate" : ""
      }`}>
      <div className="app__gameInfo_container_feature-text">
        <h5>{title}</h5>
        <p>{text}</p>
        <a href="#">
          Read More <OpenInNew />
        </a>
      </div>
      <div className="app__gameInfo_container_feature-image">
        <img src={image} alt="feature1" />
      </div>
    </div>
  );
};

export default FeatureComponent;
