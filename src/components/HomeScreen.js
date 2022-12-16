import React, { useRef, useState } from "react";
import "../assets/css/HomeScreen.css";
import avatar from "../assets/images/1.jpg";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";
import Img1 from "../assets/images/1.jpg";
import Img2 from "../assets/images/2.png";
import Img3 from "../assets/images/3.jpg";
import Img4 from "../assets/images/4.jpg";
import Img5 from "../assets/images/5.jpg";
import Img6 from "../assets/images/6.jpg";
import Img7 from "../assets/images/7.jpg";
import Img8 from "../assets/images/8.jpg";
import Img9 from "../assets/images/9.jpg";
import Img10 from "../assets/images/10.jpg";
import Room1 from "./room/sandbox/room1";
import Carousel from "./Carousel";
import Item from "./CarouselItem";
import ReactGridLayout, { WidthProvider } from "react-grid-layout";

const HomeScreen = () => {
	const layout = [
		{ i: "a", x: 0, y: 0, w: 4, h: 2 },
		{ i: "b", x: 1, y: 3, w: 4, h: 2, minW: 2, maxW: 4 },
		{ i: "c", x: 4, y: 5, w: 4, h: 2 },
	];
	return (
		<div className="profile">
			<div className="top">
				<div className="museum">
					{/* <img src={MuseumImg} alt="" /> */}
					<Room1 />
				</div>
				<div className="info">
					<div className="avatar-text">
						<div className="avatar">
							<img src={avatar} alt="" />
						</div>
						<div className="text">NFT COLLECTOR</div>
					</div>
					<div className="text-content">
						<div className="title">Crypt0Coll3ctOR 1337</div>
						<div className="content">
							Welcome to my NFT portfolio page. I collect ETH and BNT NFT's my
							interest lays mainly in pixelart but I am also interested in dNFT
							untilies.
						</div>
					</div>
				</div>
			</div>
			<Carousel items={4}>
				<Item width={25}>
					<img src={Img2} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img3} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img3} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img5} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img6} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img7} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img8} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img9} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img10} alt="" />
				</Item>
			</Carousel>

			<div className="bottom">
				<ReactGridLayout
					className="layout"
					layout={layout}
					cols={12}
					rowHeight={30}>
					<div key="a" className="bg-black">
						a
					</div>
					<div key="b" className="bg-black">
						b
					</div>
					<div key="c" className="bg-black">
						c
					</div>
				</ReactGridLayout>
			</div>
		</div>
	);
};

export default HomeScreen;
