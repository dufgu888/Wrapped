import React, { useState } from "react";
import "../assets/css/Sidebar.css";

import { connect } from "react-redux";
import { selectNFT, selectNoneNFT } from "../redux/selectedNFTActions";
import { addRoom, changeRoom } from "../redux/roomActions";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import EthereumIcon from "../assets/images/ethereumIcon.svg";
import BinanceIcon from "../assets/images/binanceIcon.svg";
import PolygonIcon from "../assets/images/polygonIcon.svg";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Sidebar = (props) => {
	const nfts = [
		"/nft/0.png",
		"/nft/1.png",
		"/nft/2.png",
		"/nft/3.png",
		"/nft/4.png",
		"/nft/5.png",
		"/nft/6.png",
		"/nft/7.png",
		"/nft/8.png",
		"/nft/9.png",
		"/nft/10.png",
		"/nft/11.png",
		"/nft/12.png",
		"/nft/13.png",
		"/nft/14.png",
		"/nft/15.png",
		"/nft/16.png",
		"/nft/17.png",
		"/nft/18.png",
		"/nft/19.png",
		"/nft/20.png",
		"/nft/21.png",
	];

	const chainList = [
		{ icon: EthereumIcon, name: "Ethereum" },
		{ icon: BinanceIcon, name: "Binance" },
		{ icon: PolygonIcon, name: "Polygon" },
	];

	const [selectedChain, setSelectedChain] = useState(0);
	const [showMenu, setShowMenu] = useState(false);
	const handleSelectMenu = (index) => {
		setSelectedChain(index);
		setShowMenu(false);
	};

	const onAdd = (e) => {
		if (props.selectedNFT >= 0)
			props.changeRoom({ name: e.target.src, no: props.selectedNFT });
	};

	return (
		<div
			className={`user-sidebar-container ${
				props.activeSidebar ? "active-sidebar" : ""
			}`}>
			<div className="w-100 mb-2">
				<div
					className="chain-select"
					onClick={() => {
						setShowMenu(!showMenu);
					}}>
					<div className="chain-content">
						<div className="chain-icon">
							<img src={chainList[selectedChain].icon} alt="" />
						</div>
						<div className="chain-name">{chainList[selectedChain].name}</div>
					</div>
					<div
						className={
							showMenu
								? "user-dropdown-menu user-dropdown-open"
								: "user-dropdown-menu"
						}>
						<ul className="sub-menu">
							{chainList.map((item, index) => {
								return (
									<li
										key={index}
										onClick={() => {
											handleSelectMenu(index);
										}}
										className="chain-item">
										<div className="flex-auto d-flex align-items-center justify-content-center">
											<div className="d-flex">
												<div className="chain-icon">
													<img src={item.icon} alt="" />
												</div>
												<div className="chain-name">{item.name}</div>
											</div>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
					<div className=""></div>
					{showMenu ? <BsChevronUp /> : <BsChevronDown />}
				</div>
			</div>
			<div className="middle">
				<div className="middle-content">
					{nfts.map((nft, index) => (
						<div key={index}>
							<img className="edittab_image" src={nft} alt="" onClick={onAdd} />
						</div>
					))}
				</div>
			</div>
			<div className="bottom">
				<div onClick={props.handleSidebar}>
					{props.activeSidebar ? (
						<BsChevronDoubleLeft />
					) : (
						<BsChevronDoubleRight />
					)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	room: state.room,
	selectedNFT: state.selectedNFT.no,
});

export default connect(mapStateToProps, {
	selectNFT,
	selectNoneNFT,
	addRoom,
	changeRoom,
})(Sidebar);
