export const conflict = (positionX, positionY, positionZ) => {
  if (positionZ < -9.5) return false;
  if (positionX < -4.5) return false;
  if (positionZ > 9.5) return false;
  if (positionX > 12.5) return false;

  // Area 0
  if (positionZ > 7.7 && positionX < -2.9) return false;

  // Area 1
  if (positionZ > -0.5 && positionZ < 1.3 && positionX > -1.5) return false;

  // Area 2
  if (positionX > 3.5 && positionX < 5.2 && positionZ > 1.3 && positionZ < 7.5)
    return false;

  // Area 3
  if (positionX > 5.5 && positionX < 9 && positionZ < -3.5 && positionZ > -9)
    return false;

  // Area 4
  if (positionX > 5.5 && positionX < 12 && positionZ > -9 && positionZ < -6)
    return false;

  // Area 5
  if (positionX > 11 && positionZ > -2.2) return false;

  // Area 6
  if (positionX < 3.5 && positionX > 1 && positionZ < -3.5) return false;

  // Area 7
  if (positionX < -3 && positionZ < -5.5) return false;

  // Area 8
  if (positionX < 3.5 && positionZ < -8) return false;

  // Area 9
  if (positionZ < -4.8 && positionZ > -7 && positionX < 0.5 && positionX > -2.5)
    return false;

  // Area 10
  if (positionX < -3.5 && positionZ < -2.5 && positionZ > -5.3) return false;

  // Area 11
  if (
    positionZ > -0.5 &&
    positionZ < 2.2 &&
    positionX > -0.5 &&
    positionX < 2.3
  )
    return false;

  // Area 12
  if (positionX > 2.5 && positionX < 5.2 && positionZ > -0.5 && positionZ < 3.5)
    return false;

  // Area 13
  if (positionX > 2.7 && positionX < 5.2 && positionZ > 4.2 && positionZ < 7.5)
    return false;

  // Area 14
  if (positionX > 6.5 && positionZ > -0.5) return false;

  // Area 15
  if (positionX > 3.5 && positionZ > -0.5 && positionZ < 2.5) return false;

  // Area 16
  if (positionX > 6 && positionZ > 3.5 && positionZ < 4) return false;

  // Area 17
  if (positionX > 5.5 && positionZ > 8) return false;

  // Area 18
  if (positionX > 1 && positionX < 4 && positionZ < -6.5 && positionZ > -7.5)
    return false;

  // Area 19
  if (positionX > 1 && positionX < 4 && positionZ < -4.5 && positionZ > -5.5)
    return false;

  // Area 20
  if (positionZ > -0.5 && positionZ < 2.5 && positionX > 0.5 && positionX < 1.5)
    return false;

  return true;
};
