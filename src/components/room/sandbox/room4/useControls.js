import { useEffect, useRef } from "react";

export const useKeyPress = (target, event) => {
  useEffect(() => {
    const downHandler = ({ key }) => target.indexOf(key) !== -1 && event(true);
    const upHandler = ({ key }) => target.indexOf(key) !== -1 && event(false);

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
};

export const useControls = () => {
  const keys = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });
  useKeyPress(["ArrowUp", "w"], (pressed) => (keys.current.forward = pressed));
  useKeyPress(
    ["ArrowDown", "s"],
    (pressed) => (keys.current.backward = pressed)
  );
  useKeyPress(["ArrowLeft", "a"], (pressed) => (keys.current.left = pressed));
  useKeyPress(["ArrowRight", "d"], (pressed) => (keys.current.right = pressed));
  return keys;
};

export const useRotate = () => {
  const keys = useRef({
    deltaX: 0,
    deltaY: 0,
  });

  const moveHandler = (evt) => {
    evt.preventDefault();
    keys.current.deltaX = evt.clientX;
    keys.current.deltaY = evt.clientY;

    if (Math.abs(keys.current.deltaX) === 1) keys.current.deltaX = 0;
    if (Math.abs(keys.current.deltaY) === 1) keys.current.deltaY = 0;

    if (evt.clientX > 1000) evt.PageX = 0;
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return keys;
};

export const useInfiniRotate = () => {
  const keys = useRef({
    deltaX: 0,
    deltaY: 0,
  });

  const canvas = document.querySelector("canvas");

  const updatePosition = (e) => {
    keys.current.deltaX += e.movementX;
    keys.current.deltaY += e.movementY;
  };

  const lockChangeAlert = () => {
    if (
      document.pointerLockElement === canvas ||
      document.mozPointerLockElement === canvas
    ) {
      console.log("The pointer lock status is now locked");
      document.addEventListener("mousemove", updatePosition, false);
    } else {
      console.log("The pointer lock status is now unlocked");
      document.removeEventListener("mousemove", updatePosition, false);
    }
  };

  useEffect(() => {
    canvas.requestPointerLock =
      canvas.requestPointerLock || canvas.mozRequestPointerLock;

    document.exitPointerLock =
      document.exitPointerLock || document.mozExitPointerLock;

    canvas.onclick = () => {
      canvas.requestPointerLock();
    };

    document.addEventListener("pointerlockchange", lockChangeAlert, false);
    document.addEventListener("mozpointerlockchange", lockChangeAlert, false);

    return () => {
      document.removeEventListener("pointerlockchange", lockChangeAlert, false);
      document.removeEventListener(
        "mozpointerlockchange",
        lockChangeAlert,
        false
      );
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return keys;
};
