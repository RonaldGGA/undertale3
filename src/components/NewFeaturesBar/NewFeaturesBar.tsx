import { useState, useEffect } from "react";
import Feature from "./Feature";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { handleLeftClick, handleRightClick } from "../../functions/exports";

const NewFeaturesBar = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number>(0);
  console.log(currentIndex);
  console.log(intervalId);
  const features = 2; // Set the number of new features to show here;

  const handleLeft = () => {
    clearInterval(intervalId); // Clear interval when left arrow is clicked
    handleLeftClick(features, currentIndex, setCurrentIndex);
  };

  const handleRight = () => {
    clearInterval(intervalId); // Clear interval when right arrow is clicked
    handleRightClick(features, currentIndex, setCurrentIndex);
  };

  useEffect(() => {
    const id: number = setInterval(handleRight, 2000); // Start with handleRight
    setIntervalId(id);

    return () => clearInterval(id);
  }, []); // No dependencies to start the interval

  useEffect(() => {
    const restartInterval = () => {
      clearInterval(intervalId); // Clear current interval
      const newId = setInterval(handleRight, 2000); // Restart with handleRight
      setIntervalId(newId);
    };

    const timeoutId = setTimeout(restartInterval, 2000); // Restart interval after 2 seconds

    return () => clearTimeout(timeoutId);
  }, [handleLeft, handleRight]); // Restart interval when currentIndex changes

  return (
    <>
      <div className="app__landing__newFeatures">
        <Feature
          title="Get On a New Adventure Experience, we have some new routes for you"
          currentIndex={currentIndex}
        />

        <Feature
          title="Okay we got the best for you"
          currentIndex={currentIndex}
        />

        <Feature
          title="Test The New Character Ritha, She is ready for the battle"
          currentIndex={currentIndex}
        />
      </div>
      <div id="featuresBack" className="arrow" onClick={handleLeft}>
        <ArrowBackIosNewOutlined />
      </div>
      <div id="featuresForward" className="arrow" onClick={handleRight}>
        <ArrowForwardIosOutlined />
      </div>
    </>
  );
};

export default NewFeaturesBar;
