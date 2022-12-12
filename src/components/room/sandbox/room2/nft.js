import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { animated } from "@react-spring/three";

const NFT = (props) => {
  const mesh = useRef();

  const NFTMap = useLoader(THREE.TextureLoader, props.name);

  return (
    <animated.mesh
      position={props.position}
      ref={mesh}
      rotation={props.rotation}
    >
      <planeGeometry args={props.size} />
      <meshStandardMaterial map={NFTMap} />
    </animated.mesh>
  );
};

export default NFT;
