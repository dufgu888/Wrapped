import React, { useRef, useState } from "react";
import { animated } from "@react-spring/three";

const VideoNFT = (props) => {
  const mesh = useRef();

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/video/nft.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = "muted";
    vid.play();
    return vid;
  });

  return (
    <animated.mesh
      position={[10.005, 1.55, -0.01]}
      ref={mesh}
      rotation={[0, Math.PI, 0]}
    >
      <planeGeometry args={[3.84, 1.82]} />
      <meshStandardMaterial emissive={"white"}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
    </animated.mesh>
  );
};

export default VideoNFT;
