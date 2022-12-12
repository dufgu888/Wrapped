import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "./loader";
import { Room } from "./room";
import NFT from "./nft";
import VideoNFT from "./videoNFT";

import HomeButton from "./homeButton";
import "./index.scss";

const Room4 = () => {
  const roomData = {
    information: {
      name: "MVP Room",
      filename: "Room 4.glb",
      description: "This room is fourth of excellent Room",
      price: 0.8,
      image: "/img/room4.png",
    },
    camera: {
      position: [4, 1.5, -3],
      fov: 60,
      rotation: [0, 0, 0],
    },
    lights: [
      {
        intensity: 0.5,
        color: "rgb(255, 255, 255)",
        position: [-1, 2.5, -6.3],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 255, 255)",
        position: [-1, 2.5, 4],
      },
      {
        intensity: 0.5,
        color: "rgb(255, 255, 255)",
        position: [6, 2.5, 7],
      },
    ],
    nfts: [
      {
        position: [11.104, 1.5, -9.96],
        rotation: [0, 0, 0],
        name: "/nft/0.png",
        size: [1, 1],
      },
      {
        position: [9.104, 1.5, -9.96],
        rotation: [0, 0, 0],
        name: "/nft/1.png",
        size: [1, 1],
      },
      {
        position: [7.104, 1.5, -9.96],
        rotation: [0, 0, 0],
        name: "/nft/2.png",
        size: [1, 1],
      },
      {
        position: [5.104, 1.5, -9.96],
        rotation: [0, 0, 0],
        name: "/nft/3.png",
        size: [1, 1],
      },
      {
        position: [-0.998, 1.905, -9.96],
        rotation: [0, 0, 0],
        name: "/nft/4.png",
        size: [1, 1],
      },
      {
        position: [-0.19, 2.8, 0.67],
        rotation: [0, 0, 0],
        name: "/nft/5.png",
        size: [1, 1],
      },
      {
        position: [1.31, 2.8, 0.67],
        rotation: [0, 0, 0],
        name: "/nft/6.png",
        size: [1, 1],
      },
      {
        position: [3.305, 1.5, 0.67],
        rotation: [0, 0, 0],
        name: "/nft/7.png",
        size: [1, 1],
      },
      {
        position: [1.52, 1.85, 0.67],
        rotation: [0, 0, 0],
        name: "/nft/8.png",
        size: [0.4, 0.4],
      },
      {
        position: [0.91, 1.85, 0.67],
        rotation: [0, 0, 0],
        name: "/nft/9.png",
        size: [0.4, 0.4],
      },
      {
        position: [0.29, 1.85, 0.67],
        rotation: [0, 0, 0],
        name: "/nft/10.png",
        size: [0.4, 0.4],
      },
      {
        position: [0.29, 1.15, 0.67],
        rotation: [0, 0, 0],
        name: "/nft/11.png",
        size: [0.4, 0.4],
      },
      {
        position: [0.29, 1.15, 0.67],
        rotation: [0, 0, 0],
        name: "/nft/12.png",
        size: [0.4, 0.4],
      },
      {
        position: [1.49, 1.15, 0.67],
        rotation: [0, 0, 0],
        name: "/nft/13.png",
        size: [0.4, 0.4],
      },
      {
        position: [-4.99, 1.5, -1.832],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/14.png",
        size: [1, 1],
      },
      {
        position: [-4.99, 1.5, -0.532],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/15.png",
        size: [1, 1],
      },
      {
        position: [-4.99, 1.5, 0.768],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/16.png",
        size: [1, 1],
      },
      {
        position: [-4.99, 1.5, 2.068],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/17.png",
        size: [1, 1],
      },
      {
        position: [-4.99, 1.5, 3.368],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/18.png",
        size: [1, 1],
      },
      {
        position: [-4.99, 1.5, 4.668],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/19.png",
        size: [1, 1],
      },
      {
        position: [-4.99, 1.5, 5.968],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/20.png",
        size: [1, 1],
      },
      {
        position: [-4.99, 1.5, 7.568],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/21.png",
        size: [1, 1],
      },
      {
        position: [4.51, 1.85, 5.98],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/22.png",
        size: [0.38, 0.38],
      },
      {
        position: [4.51, 1.85, 5.36],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/23.png",
        size: [0.38, 0.38],
      },
      {
        position: [4.51, 1.85, 4.75],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/24.png",
        size: [0.38, 0.38],
      },
      {
        position: [4.51, 1.85, 4.16],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/25.png",
        size: [0.38, 0.38],
      },
      {
        position: [4.51, 1.85, 3.55],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/26.png",
        size: [0.38, 0.38],
      },
      {
        position: [4.51, 1.85, 2.85],
        rotation: [0, Math.PI / 2, 0],
        name: "/nft/27.png",
        size: [0.38, 0.38],
      },
      {
        position: [-2.795, 1.5, 10.02],
        rotation: [0, Math.PI, 0],
        name: "/nft/28.png",
        size: [1, 1],
      },
      {
        position: [-1.495, 1.5, 10.02],
        rotation: [0, Math.PI, 0],
        name: "/nft/29.png",
        size: [1, 1],
      },
      {
        position: [-0.195, 1.5, 10.02],
        rotation: [0, Math.PI, 0],
        name: "/nft/30.png",
        size: [1, 1],
      },
      {
        position: [1.105, 1.5, 10.02],
        rotation: [0, Math.PI, 0],
        name: "/nft/31.png",
        size: [1, 1],
      },
      {
        position: [2.405, 1.5, 10.02],
        rotation: [0, Math.PI, 0],
        name: "/nft/32.png",
        size: [1, 1],
      },
      {
        position: [3.705, 1.5, 10.02],
        rotation: [0, Math.PI, 0],
        name: "/nft/33.png",
        size: [1, 1],
      },
      {
        position: [0.5, 1.5, 0.02],
        rotation: [0, Math.PI, 0],
        name: "/nft/34.png",
        size: [1, 1],
      },
      {
        position: [2.5, 1.5, 0.02],
        rotation: [0, Math.PI, 0],
        name: "/nft/35.png",
        size: [1, 1],
      },
      {
        position: [4.5, 1.5, 0.02],
        rotation: [0, Math.PI, 0],
        name: "/nft/0.png",
        size: [1, 1],
      },
      {
        position: [6.5, 1.5, 0.02],
        rotation: [0, Math.PI, 0],
        name: "/nft/1.png",
        size: [1, 1],
      },
      {
        position: [6.99, 1.8, 9.045],
        rotation: [0, -Math.PI / 2, 0],
        name: "/nft/2.png",
        size: [1, 1],
      },
      {
        position: [6.99, 1.8, 4.67],
        rotation: [0, -Math.PI / 2, 0],
        name: "/nft/3.png",
        size: [1, 1],
      },
      {
        position: [6.99, 1.8, 2.67],
        rotation: [0, -Math.PI / 2, 0],
        name: "/nft/4.png",
        size: [1, 1],
      },
      {
        position: [3.99, 1.5, 1.867],
        rotation: [0, -Math.PI / 2, 0],
        name: "/nft/5.png",
        size: [1, 1],
      },
      {
        position: [3.99, 1.5, 3.867],
        rotation: [0, -Math.PI / 2, 0],
        name: "/nft/6.png",
        size: [1, 1],
      },
      {
        position: [3.99, 2.7, 5.35],
        rotation: [0, -Math.PI / 2, 0],
        name: "/nft/7.png",
        size: [1, 1],
      },
      {
        position: [3.99, 2.7, 6.45],
        rotation: [0, -Math.PI / 2, 0],
        name: "/nft/8.png",
        size: [1, 1],
      },
      {
        position: [-4.092, 1.5, 8.726],
        rotation: [0, Math.PI * 0.833, 0],
        name: "/nft/9.png",
        size: [0.5, 0.5],
      },
      {
        position: [5.79, 1.804, 0.71],
        rotation: [0, Math.PI * -0.024, 0],
        name: "/nft/10.png",
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
              castShadow={false}
            />
          ))}
          {/* Video NFTs */}
          <VideoNFT />
        </Suspense>
      </Canvas>
      <HomeButton />
    </>
  );
};

export default Room4;
