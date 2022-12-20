import React, { useRef, useState } from "react";
import "../assets/css/HomeScreen.css";
import avatar from "../assets/images/1.jpg";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";
import Img1 from "../assets/images/1.jpg";
import Img2 from "../assets/images/2.jpg";
import Img3 from "../assets/images/3.jpg";
import Img4 from "../assets/images/4.jpg";
import Img5 from "../assets/images/5.jpg";
import Img6 from "../assets/images/6.jpg";
import Img7 from "../assets/images/7.jpg";
import Img8 from "../assets/images/8.jpg";
import Img9 from "../assets/images/9.jpg";
import Img10 from "../assets/images/10.jpg";
import Img11 from "../assets/images/11.jpg";
import Img12 from "../assets/images/12.jpg";
import Img13 from "../assets/images/13.jpg";
import Img14 from "../assets/images/14.jpg";
import Img15 from "../assets/images/15.jpg";
import Img16 from "../assets/images/16.jpg";
import Img17 from "../assets/images/17.jpg";
import Img18 from "../assets/images/18.jpg";
import Img19 from "../assets/images/19.jpg";
import Img20 from "../assets/images/20.jpg";
import Img21 from "../assets/images/21.jpg";
import Room1 from "./room/sandbox/room1";
import Carousel from "./Carousel";
import Item from "./CarouselItem";

import { Responsive, WidthProvider } from "react-grid-layout";

const HomeScreen = () => {
	const ResponsiveGridLayout = WidthProvider(Responsive);
	// const layouts = [
	// 	{ i: "1", x: 0, y: 0, w: 12, h: 1 },
	// 	{ i: "2", x: 0, y: 2, w: 12, h: 1 },
	// 	{ i: "3", x: 0, y: 3, w: 12, h: 1 },
	// ];
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
					<img src={Img1} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img2} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img3} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img4} alt="" />
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
				<Item width={25}>
					<img src={Img11} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img12} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img13} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img14} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img15} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img16} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img17} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img18} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img19} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img20} alt="" />
				</Item>
				<Item width={25}>
					<img src={Img21} alt="" />
				</Item>
			</Carousel>
			<div className="featured"></div>
			<div className="bottom">
				<ResponsiveGridLayout
					// layouts={layouts}
					autoSize={true}
					rowHeight={200}
					isBounded={true}
					maxRows={2}
					breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
					cols={{ lg: 12, md: 12, sm: 12, xs: 4, xxs: 4 }}>
					<div
						className="grid-item"
						key="1"
						data-grid={{ x: 0, y: 0, w: 3, h: 1, maxH: 2 }}>
						<img src={Img1} alt="" />
					</div>
					<div
						className="grid-item"
						key="2"
						data-grid={{ x: 3, y: 0, w: 3, h: 1 }}>
						<img src={Img2} alt="" />
					</div>
					<div
						className="grid-item"
						key="3"
						data-grid={{ x: 6, y: 0, w: 3, h: 1, maxH: 2 }}>
						<img src={Img3} alt="" />
					</div>
					<div
						className="grid-item"
						key="4"
						data-grid={{ x: 9, y: 0, w: 3, h: 1 }}>
						<img src={Img9} alt="" />
					</div>
					<div
						className="grid-item"
						key="5"
						data-grid={{ x: 0, y: 1, w: 3, h: 1 }}>
						<img src={Img5} alt="" />
					</div>
					<div
						className="grid-item"
						key="6"
						data-grid={{ x: 3, y: 1, w: 3, h: 1 }}>
						<img src={Img6} alt="" />
					</div>
					<div
						className="grid-item"
						key="7"
						data-grid={{ x: 6, y: 1, w: 3, h: 1 }}>
						<img src={Img7} alt="" />
					</div>
					<div
						className="grid-item"
						key="8"
						data-grid={{ x: 9, y: 1, w: 3, h: 1 }}>
						<img src={Img8} alt="" />
					</div>
				</ResponsiveGridLayout>
			</div>
		</div>
	);
};

export default HomeScreen;
