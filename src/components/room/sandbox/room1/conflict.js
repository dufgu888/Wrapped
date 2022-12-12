export const conflict = (positionX, positionY, positionZ) => {
  if (positionZ > 12.5) {
    return false;
  }

  if (positionZ < -8.5) {
    return false;
  }

  if (positionX < -6.5) {
    return false;
  }

  if (positionX > 6.5) {
    return false;
  }

  // Area 0
  if (positionZ > -3.5 && positionX > -1.5) {
    return false;
  }

  // Area 1
  if (
    positionZ > 5.5 &&
    positionX < -1.5 &&
    positionZ < 7.5 &&
    positionX > -2.5
  ) {
    return false;
  }

  // Area 2
  if (
    positionZ > 5.5 &&
    positionX < -5.5 &&
    positionZ < 7.5 &&
    positionX > -6.5
  ) {
    return false;
  }

  // Area 3
  if (
    positionZ > -3.5 &&
    positionX < -1.5 &&
    positionZ < -1.5 &&
    positionX > -2.5
  ) {
    return false;
  }

  // Area 4
  if (
    positionZ > -3.5 &&
    positionX < -5.5 &&
    positionZ < -1.5 &&
    positionX > -6.5
  ) {
    return false;
  }

  return true;
};
