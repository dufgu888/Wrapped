import React, { useState } from "react";
import "../assets/css/Navbar.css";
// import { BsGlobe2 } from "react-icons/bs";
// import MetaMaskIcon from "../assets/images/metamask.png";
// import WalletConnectIcon from "../assets/images/WalletConnect.svg";
// import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Logo from "../assets/images/logo.jpg";

const Navbar = ({ toggleTheme }) => {
	const languageList = ["English", "Arabic", "Spanish"];
	const [languageMenu, setLanguageMenu] = useState(false);
	const [selected, setSelected] = useState(0);
	const handleSelect = (index) => {
		setSelected(index);
		setLanguageMenu(false);
	};
	const toggleLanguageMenu = () => {
		setLanguageMenu(!languageMenu);
	};
	return (
		<div className="user-navbar">
			<div className="d-flex">
				<div className="logo me-3">
					<img src={Logo} alt="" />
				</div>
				<div className="header-btn">
					<input
						type="text"
						placeholder="search here ..."
						className="search-input"
					/>
					<BsSearch color="var(--color-gray)" />
				</div>
			</div>
			<div className="header-right">
				<div className="header-btn me-2" onClick={toggleTheme}>
					{localStorage.getItem("theme") == "dark" ? (
						<MdLightMode color="var(--color-gray)" />
					) : (
						<MdNightlight color="var(--color-gray)" />
					)}
				</div>
				<div className="header-btn me-2">
					<FaUser color="var(--color-gray)" />
				</div>
				<div className="header-btn">
					<span className="pl-3 pe-3">log in with wallet</span>
				</div>
				{/* <div className="language">
					<div className="language-container" onClick={toggleLanguageMenu}>
						<BsGlobe2 className="globe" />
						<div className="language-selector">
							<div className="selected-language">{languageList[selected]}</div>
							<div
								className={
									languageMenu
										? "user-dropdown-menu user-dropdown-open"
										: "user-dropdown-menu"
								}>
								<ul className="sub-menu">
									{languageList.map((item, index) => {
										return (
											<li
												key={index}
												onClick={() => {
													handleSelect(index);
												}}
												className="language-item">
												{item}
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						{languageMenu ? <BsChevronUp /> : <BsChevronDown />}
					</div>
				</div>
				<div className="meta-mask">
					<img src={MetaMaskIcon} alt="" />
				</div>
				<div className="wallet-connect">
					<div className="wallet-icon">
						<img src={WalletConnectIcon} alt="" />
					</div>
					<div className="fs-5">Connect wallet</div>
				</div> */}
			</div>
		</div>
	);
};

export default Navbar;
