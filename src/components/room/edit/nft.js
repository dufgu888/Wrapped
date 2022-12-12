import React, { useRef, useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

import { animated } from "@react-spring/three";

const NFT = (props) => {
  const mesh = useRef();
  const [active, setActive] = useState(false);

  const NFTMap = useLoader(THREE.TextureLoader, props.name);
  const AddArtWork = useLoader(THREE.TextureLoader, "/nft/addartwork.png");

  useEffect(() => {
    setActive(false);
  }, [props.name]);

  return (
    <animated.mesh
      position={props.position}
      ref={mesh}
      rotation={props.rotation}
      onClick={async (event) => {
        setActive(!active);
        if (!active) {
          props.selectNFT({ no: props.no });
        } else {
          props.selectNFT({ no: -1 });
        }
      }}
      onPointerMissed={(event) => {
        setActive(false);
        props.selectNFT({ no: -1 });
      }}
    >
      <planeGeometry args={props.size} />
      <meshStandardMaterial map={active ? AddArtWork : NFTMap} />
    </animated.mesh>
  );
};

export default NFT;
