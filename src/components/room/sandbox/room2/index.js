import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "./loader";
import { Room } from "./room";
import NFT from "./nft";

import HomeButton from "./homeButton";
import "./index.scss";

const Room2 = () => {
  const roomData = {
    information: {
      name: "MVP Room",
      filename: "Room 2.glb",
      description: "This room is one of excellent Room",
      price: 0.5,
      image: "/img/mvp-room.png",
    },
    camera: {
      position: [12, 1.5, -7.4],
      fov: 60,
      rotation: [0, Math.PI / 2, 0],
    },
    lights: [
      {
        intensity: 0.5,
        color: "rgb(255, 255, 255)",
        position: [-2.3, 2.5, -2.3],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 255, 255)",
        position: [4.5, 2.5, -4.6],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 255, 255)",
        position: [11.3, 2.5, -7],
      },
    ],
    nfts: [
      {
        position: [13.79, 1.5, -9.94],
        rotation: [0, 0, 0],
        name: "/nft/1.png",
        size: [1, 1],
      },
      {
        position: [11.79, 1.5, -9.94],
        rotation: [0, 0, 0],
        name: "/nft/2.png",
        size: [1, 1],
      },
      {
        position: [9.79, 1.5, -9.94],
        rotation: [0, 0, 0],
        name: "/nft/3.png",
        size: [1, 1],
      },
      {
        position: [7.79, 1.5, -9.94],
        rotation: [0, 0, 0],
        name: "/nft/4.png",
        size: [1, 1],
      },
      {
        position: [5.79, 1.5, -9.94],
        rotation: [0, 0, 0],
        name: "/nft/5.png",
        size: [1, 1],
      },
      {
        position: [3.79, 1.5, -9.94],
        rotation: [0, 0, 0],
        name: "/nft/6.png",
        size: [1, 1],
      },
      {
        position: [1.79, 1.5, -9.94],
        rotation: [0, 0, 0],
        name: "/nft/7.png",
        size: [1, 1],
      },
      {
        position: [-3.56, 1.5, -0.01],
        rotation: [0, -Math.PI, 0],
        name: "/nft/8.png",
        size: [1, 1],
      },
      {
        position: [-1.56, 1.5, -0.01],
        rotation: [0, -Math.PI, 0],
        name: "/nft/9.png",
        size: [1, 1],
      },
      {
        position: [0.44, 1.5, -0.01],
        rotation: [0, -Math.PI, 0],
        name: "/nft/10.png",
        size: [1, 1],
      },
      {
        position: [2.44, 1.5, -0.01],
        rotation: [0, -Math.PI, 0],
        name: "/nft/11.png",
        size: [1, 1],
      },
      {
        position: [4.44, 1.5, -0.01],
        rotation: [0, -Math.PI, 0],
        name: "/nft/12.png",
        size: [1, 1],
      },
      {
        position: [6.44, 1.5, -0.01],
        rotation: [0, -Math.PI, 0],
        name: "/nft/13.png",
        size: [1, 1],
      },
      {
        position: [8.44, 1.5, -0.01],
        rotation: [0, -Math.PI, 0],
        name: "/nft/14.png",
        size: [1, 1],
      },
      {
        position: [-0.1, 1.1, -7.52],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/15.png",
        size: [1, 1],
      },
    ],
  };

  return (
    <>
      <Canvas
        shadows
        camera={{
          position: roomData.camera.position,
          fov: roomData.camera.fov,
          rotation: roomData.camera.rotation,
        }}
      >
        <Suspense fallback={<Loader />}>
          {/* Room */}
          {roomData.information.filename ? (
            <Room name={roomData.information.filename} />
          ) : (
            <></>
          )}
          {/* NFTs */}
          {roomData.nfts.map((nft, index) => {
            return (
              <NFT
                position={nft.position}
                rotation={nft.rotation}
                name={nft.name}
                no={index}
                size={nft.size}
                key={index}
              />
            );
          })}
          {/* Lights */}
          {roomData.lights.map((light, index) => (
            <pointLight
              intensity={light.intensity}
              color={light.color}
              position={light.position}
              key={index}
            />
          ))}
        </Suspense>
      </Canvas>
      <HomeButton />
    </>
  );
};

export default Room2;
