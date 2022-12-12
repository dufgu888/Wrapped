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
  }, [event, target]);
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

  const mouseReference = {
    x: 0,
    y: 0,
    pressed: false,
  };

  const moveHandler = (evt) => {
    if (mouseReference.pressed && evt.which === 1) {
      keys.current.deltaX = mouseReference.x - evt.pageX;
      keys.current.deltaY = mouseReference.y - evt.pageY;

      mouseReference.x = evt.pageX;
      mouseReference.y = evt.pageY;
    }
  };

  const downHandler = (evt) => {
    mouseReference.pressed = true;
    mouseReference.x = evt.pageX;
    mouseReference.y = evt.pageY;
  };

  const upHandler = (evt) => {
    mouseReference.pressed = false;
    keys.current.deltaX = 0;
    keys.current.deltaY = 0;
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mousedown", downHandler);
    window.addEventListener("mouseup", upHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mousedown", downHandler);
      window.removeEventListener("mouseup", upHandler);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return keys;
};
