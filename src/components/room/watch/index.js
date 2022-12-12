import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import axios from "axios";

import Loader from "../loader";
import { Room } from "./room";
import NFT from "./nft";

import HomeButton from "../homeButton";
import "./index.scss";
import { Constants } from "../../../constants/Constants";
import { useParams } from "react-router-dom";

const NFTRoom = () => {
  const [nfts, setNfts] = useState([]);
  const params = useParams();
  const [roomInformation, setRoomInformation] = useState({});
  const [conflict, setConflict] = useState();
  const [camera, setCamera] = useState({});
  const [lights, setLights] = useState([]);

  useEffect(() => {
    axios
      .get(`${Constants.SERVER_URL}/api/room/${params.id}`)
      .then((response) => {
        const roomData = response.data;
        setRoomInformation(roomData.information);
        setLights(roomData.lights);
        setNfts(roomData.nfts);
        setConflict(roomData.conflict);
        setCamera(roomData.camera);
      })
      .catch((error) => {
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {camera ? (
        <Canvas
          shadows
          camera={{
            position: camera.position,
            fov: camera.fov,
            rotation: camera.rotation,
          }}
        >
          <Suspense fallback={<Loader />}>
            {/* Room */}
            {roomInformation.filename ? (
              <Room name={roomInformation.filename} conflict={conflict} />
            ) : (
              <></>
            )}
            {/* NFTs */}
            {nfts.map((nft, index) => {
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
            {lights.map((light, index) => (
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

export default NFTRoom;
