const handleLeftClick = (features, currentIndex:number, setCurrentIndex) => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  } else {
    setCurrentIndex(features );
  }
}

const handleRightClick = (features, currentIndex, setCurrentIndex) => {
  if (currentIndex < features  ) {
    setCurrentIndex(currentIndex + 1);
  } else {
    setCurrentIndex(0);
  }
}

export {handleLeftClick, handleRightClick}