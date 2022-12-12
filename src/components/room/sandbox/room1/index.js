import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "./loader";
import { Room } from "./room";
import NFT from "./nft";

import HomeButton from "./homeButton";
import "./index.scss";

const Room1 = () => {
  const roomData = {
    information: {
      name: "MVP Room",
      filename: "Room 1.glb",
      description: "This room is one of excellent Room",
      price: 0.5,
      image: "/img/mvp-room.png",
    },
    camera: {
      position: [-4, 2, 12],
      fov: 60,
      rotation: [0, 0, 0],
    },
    lights: [
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [-4.5, 2.3, 13],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [-4.5, 2.3, 2.5],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [-4.5, 2.3, -8],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 214, 170)",
        position: [4, 2.3, -8],
      },
    ],
    nfts: [
      {
        position: [7.97, 2, -8.4],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/0.png",
        size: [2, 2],
      },
      {
        position: [7.97, 2, -4.4],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/1.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, -0.2],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/3.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, 3.8],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/4.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, 8],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/5.png",
        size: [2, 2],
      },
      {
        position: [-0.022, 2, 12],
        rotation: [0, -Math.PI / 2.0, 0],
        name: "/nft/6.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, -8.4],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/7.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, -4.4],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/8.png",
        size: [2, 2],
      },
      {
        position: [-7.97, 2, -0.2],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/9.png",
        size: [2, 2],
      },
      {
        position: [-7.97, 2, 3.8],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/10.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, 8],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/11.png",
        size: [2, 2],
      },
      {
        position: [-8.05, 2, 12],
        rotation: [0, Math.PI / 2.0, 0],
        name: "/nft/12.png",
        size: [2, 2],
      },
      {
        position: [-6, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/13.png",
        size: [2, 2],
      },
      {
        position: [-2, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/14.png",
        size: [2, 2],
      },
      {
        position: [2, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/15.png",
        size: [2, 2],
      },
      {
        position: [6, 2, -10.38],
        rotation: [0, 0, 0],
        name: "/nft/16.png",
        size: [2, 2],
      },
      {
        position: [-6, 2, 13.97],
        rotation: [0, -Math.PI, 0],
        name: "/nft/17.png",
        size: [2, 2],
      },
      {
        position: [-2, 2, 13.97],
        rotation: [0, -Math.PI, 0],
        name: "/nft/18.png",
        size: [2, 2],
      },
      {
        position: [1, 2, -2.44],
        rotation: [0, -Math.PI, 0],
        name: "/nft/19.png",
        size: [2, 2],
      },
      {
        position: [5, 2, -2.44],
        rotation: [0, -Math.PI, 0],
        name: "/nft/20.png",
        size: [2, 2],
      },
    ],
  };

  return (
    <>
      {roomData.camera ? (
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
      ) : (
        <></>
      )}
      <HomeButton />
    </>
  );
};

export default Room1;
