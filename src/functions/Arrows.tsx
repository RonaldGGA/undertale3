const handleLeftClick = (
  features: number,
  currentIndex: number,
  setCurrentIndex: (arg0: number) => void
) => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  } else {
    setCurrentIndex(features);
  }
};

const handleRightClick = (
  features: number,
  currentIndex: number,
  setCurrentIndex: (arg0: number) => void
) => {
  if (currentIndex < features) {
    setCurrentIndex(currentIndex + 1);
  } else {
    setCurrentIndex(0);
  }
};

export { handleLeftClick, handleRightClick };
