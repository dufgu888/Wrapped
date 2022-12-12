import React from "react";
import "../assets/css/HomeScreen.css";
import MuseumImg from "../assets/images/museum1.jpg";
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
// import Romm

const HomeScreen = () => {
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
			<div className="middle">
				<div className="nft-carousel">
					<div className="nft-element">
						<img src={Img1} alt="" />
					</div>
					<div className="nft-element">
						<img src={Img2} alt="" />
					</div>
					<div className="nft-element">
						<img src={Img3} alt="" />
					</div>
					<div className="nft-element">
						<img src={Img4} alt="" />
					</div>

					<div className="next">
						<TbChevronRight />
					</div>
					<div className="prev">
						<TbChevronLeft />
					</div>
				</div>
				<div></div>
			</div>
			<div className="bottom"></div>
		</div>
	);
};

export default HomeScreen;
