import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-left d-flex">
				<div className="item-link">Help center</div>
				<div className="item-link">About us</div>
				<div className="item-link">Contact</div>
				<div className="item-link last">Team</div>
			</div>
			<div className="footer-right d-flex justify-content-between align-items-center">
				<div className="me-3">Stay up to date</div>
				<div className="link-btn">your@email.com</div>
				<div className="link-btn">Subscribe</div>
			</div>
		</div>
	);
};

export default Footer;
