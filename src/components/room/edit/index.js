import { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import axios from "axios";
import { connect } from "react-redux";
// import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";

// import { Constants } from "../../../constants/Constants";

import { selectNFT, selectNoneNFT } from "../../../redux/selectedNFTActions";

// import { addRoom, changeRoom } from "../../../redux/room/roomActions";

import Loader from "../loader";
import { Room } from "./room";
import NFT from "./nft";
// import { Row, Col } from "react-bootstrap";
// import EditTab from "./edittab";
import "./index.scss";

const EditNFTRoom = ({ selectNFT, selectedNFT }) => {
	// const params = useParams();

	// useEffect(() => {
	//   axios
	//     .get(`${Constants.SERVER_URL}/api/room/${params.id}`)
	//     .then((response) => {
	//       addRoom(response.data);
	//     })
	//     .catch((error) => {
	//       console.log(error);
	//     });

	//   // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);
	const room = {
		information: {
			name: "MVP Room",
			filename: "Room1.glb",
			description: "This room is one of excellent Room",
			price: 0.5,
			image: "/img/mvp-room.png",
		},
		conflict: "conflict1",
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
			{room.camera ? (
				<Canvas
					shadows
					camera={{
						position: room.camera.position,
						fov: room.camera.fov,
						rotation: room.camera.rotation,
					}}>
					<Suspense fallback={<Loader />}>
						{/* Room */}
						{room.information.filename ? (
							<Room
								filename={room.information.filename}
								conflict={room.conflict}
							/>
						) : (
							<></>
						)}
						{/* NFTs */}
						{room.nfts.map((nft, index) => {
							return (
								<NFT
									position={nft.position}
									rotation={nft.rotation}
									name={nft.name}
									no={index}
									size={nft.size}
									selectNFT={selectNFT}
									key={index}
								/>
							);
						})}
						{/* Lights */}
						{room.lights.map((light, index) => (
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
		</>
	);
};

// EditNFTRoom.propTypes = {
//   selectNFT: PropTypes.func.isRequired,
//   selectNoneNFT: PropTypes.func.isRequired,
//   addRoom: PropTypes.func.isRequired,
//   changeRoom: PropTypes.func.isRequired,
//   room: PropTypes.object,
// };

const mapStateToProps = (state) => ({
	room: state.room,
	selectedNFT: state.selectedNFT.no,
});

export default connect(mapStateToProps, {
	selectNFT,
	selectNoneNFT,
})(EditNFTRoom);
