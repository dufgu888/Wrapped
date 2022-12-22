import React from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import { Constants } from "../../../constants/Constants";

import { Row, Col, Button, Image, Tab, Nav } from "react-bootstrap";
import {
	FaImage,
	FaToolbox,
	FaSearch,
	FaShapes,
	FaShareAltSquare,
	FaTable,
	FaThumbsUp,
	FaVirus,
} from "react-icons/fa";
import "./edittab.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditTab = (props) => {
	const { t } = useTranslation();

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
	];

	const onAdd = (e) => {
		if (props.no >= 0) props.changeRoom({ name: e.target.value, no: props.no });
	};

	const onDelete = (e) => {
		e.preventDefault();
		if (props.no >= 0)
			props.changeRoom({ name: "/nft/emptynft.png", no: props.no });
	};

	const onSave = (e) => {
		e.preventDefault();
		axios
			.post(`${Constants.SERVER_URL}/api/room/update/${props.id}`, props.room)
			.then((response) => {
				toast.success(t("save_success"), { theme: "dark" });
			})
			.catch((error) => {
				toast.error(t("error"), { theme: "dark" });
			});
	};

	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row className="edit_row">
				<Col sm={3}>
					<Nav variant="pills" className="flex-column">
						<Nav.Item>
							<Nav.Link eventKey="first" className="nav_link">
								<Button variant="outline-primary">
									<FaImage />
								</Button>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second" className="nav_link">
								<Button variant="outline-primary">
									<FaToolbox />
								</Button>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second" className="nav_link">
								<Button variant="outline-primary">
									<FaSearch />
								</Button>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second" className="nav_link">
								<Button variant="outline-primary">
									<FaShapes />
								</Button>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second" className="nav_link">
								<Button variant="outline-primary">
									<FaShareAltSquare />
								</Button>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second" className="nav_link">
								<Button variant="outline-primary">
									<FaTable />
								</Button>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second" className="nav_link">
								<Button variant="outline-primary">
									<FaThumbsUp />
								</Button>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second" className="nav_link">
								<Button variant="outline-primary">
									<FaVirus />
								</Button>
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col sm={9} className="pane">
					<Tab.Content>
						<Tab.Pane eventKey="first">
							<center>
								<h4 className="paneTitle">
									{t("add_nfts")}
									<br />
								</h4>
								<Button onClick={onSave} className="saveButton">
									{t("save")}
								</Button>
								<Button onClick={onDelete}>{t("delete")}</Button>
								<div className="imagePane">
									{nfts.map((nft, index) => (
										<div key={index}>
											<Image className="edittab_image" rounded src={nft} />
											<Button value={nft} onClick={onAdd}>
												{t("add")}
											</Button>
										</div>
									))}
								</div>
							</center>
						</Tab.Pane>
						<Tab.Pane eventKey="second">
							<center>
								<h4>{t("others")}</h4>
							</center>
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
			<ToastContainer />
		</Tab.Container>
	);
};

export default EditTab;
