export const conflict = (positionX, positionY, positionZ) => {
  if (positionZ > -0.6) return false;
  if (positionZ < -9.3) return false;

  if (positionX > 7.3) return false;
  if (positionX < 0.6) return false;

  // Area 0
  if (positionZ > -1.7 && positionX > 1.5 && positionX < 3.5) return false;

  // Area 1
  if (positionZ > -1.7 && positionX > 4.5 && positionX < 6.5) return false;

  return true;
};
