import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";
import Logo from "../assets/images/logoText.png";
import {
	FaFacebookF,
	FaTwitter,
	FaWhatsapp,
	FaInstagram,
} from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<div className="footer-start">
				<div className="row">
					<div className="col-md-6">
						<div className="flex flex-column">
							<div className="footer-logo">
								<img src={Logo} alt="" />
							</div>
						</div>
					</div>
					<div className="col-md-2">
						<span>a</span>
					</div>
					<div className="col-md-2">aa</div>
					<div className="col-md-2">aa</div>
				</div>
			</div>
			<div className="footer-end">
				<div className="footer-left d-flex">
					<div className="item-link">About us</div>
					<div className="item-link">Connect & Wallet</div>
					<div className="item-link">Blog Details</div>
					<div className="item-link last">Contact</div>
					<div className="item-link last">FAQ</div>
				</div>
				<div className="footer-right d-flex justify-content-between align-items-center">
					{/* <div className="me-3">Stay up to date</div>
				<div className="link-btn">your@email.com</div>
				<div className="link-btn">Subscribe</div> */}
					<span>© Copyright 2023 Wrapped Platform. All rights reserved.</span>
				</div>
			</div>
		</>
	);
};

export default Footer;
