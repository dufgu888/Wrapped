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

const EditNFTRoom = ({ selectNFT, room }) => {
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
});

export default connect(mapStateToProps, {
	selectNFT,
	selectNoneNFT,
})(EditNFTRoom);
