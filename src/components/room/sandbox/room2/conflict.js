export const conflict = (positionX, positionY, positionZ) => {
  if (positionZ < -9) return false;
  if (positionZ > -0.5) return false;
  if (positionX < -4) return false;
  if (positionX > 14) return false;

  // Area 0
  if (positionX < 0.5 && positionZ < -4.5) return false;

  // Area 1
  if (positionX > 9 && positionZ > -6) return false;

  return true;
};
