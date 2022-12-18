import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { useControls, useInfiniRotate } from "./useControls";
import { conflict } from "./conflict";
import "./room.scss";

export const Room = (props) => {
	const controls = useControls();
	const rotate = useInfiniRotate();

	const gltf = useLoader(GLTFLoader, `olek/model/${props.name}`);

	useFrame((state) => {
		const { forward, backward, left, right } = controls.current;
		const { deltaX } = rotate.current;

		let positionX = state.camera.position.x;
		const positionY = state.camera.position.y;
		let positionZ = state.camera.position.z;

		const rotation = state.camera.rotation;

		let isConflict, prePositionZ;

		if (Math.abs(deltaX) > 0) state.camera.rotation.y = -deltaX / 300.0;

		if (forward) {
			prePositionZ = positionZ;
			positionZ -= 0.05 * Math.cos(rotation.y);
			isConflict = conflict(positionX, positionY, positionZ);
			if (isConflict) {
				state.camera.position.z = positionZ;
			}
			positionX -= 0.05 * Math.sin(rotation.y);
			isConflict = conflict(positionX, positionY, prePositionZ);
			if (isConflict) {
				state.camera.position.x = positionX;
			}
		}
		if (backward) {
			prePositionZ = positionZ;
			positionZ += 0.05 * Math.cos(rotation.y);
			isConflict = conflict(positionX, positionY, positionZ);
			if (isConflict) {
				state.camera.position.z = positionZ;
			}
			positionX += 0.05 * Math.sin(rotation.y);
			isConflict = conflict(positionX, positionY, prePositionZ);
			if (isConflict) {
				state.camera.position.x = positionX;
			}
		}
		if (left) {
			prePositionZ = positionZ;
			positionZ += 0.04 * Math.sin(rotation.y);
			isConflict = conflict(positionX, positionY, positionZ);
			if (isConflict) {
				state.camera.position.z = positionZ;
			}
			positionX -= 0.04 * Math.cos(rotation.y);
			isConflict = conflict(positionX, positionY, prePositionZ);
			if (isConflict) {
				state.camera.position.x = positionX;
			}
		}
		if (right) {
			prePositionZ = positionZ;
			positionZ -= 0.04 * Math.sin(rotation.y);
			isConflict = conflict(positionX, positionY, positionZ);
			if (isConflict) {
				state.camera.position.z = positionZ;
			}
			positionX += 0.04 * Math.cos(rotation.y);
			isConflict = conflict(positionX, positionY, prePositionZ);
			if (isConflict) {
				state.camera.position.x = positionX;
			}
		}
	}, []);
	return <primitive object={gltf.scene} />;
};
