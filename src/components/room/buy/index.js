import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

import { Row, Col, Button, Container, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbars from "../../navbar";
import { Constants } from "../../../constants/Constants";
import "./index.scss";

const BuyRoom = ({ account }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [standardRooms, setStandardRooms] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${Constants.SERVER_URL}/api/standardroom/`)
      .then((response) => {
        setStandardRooms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!account) navigate("/login");

  const onBuy = (e) => {
    e.preventDefault();
    axios
      .post(
        `${Constants.SERVER_URL}/api/room/buy/${account}`,
        standardRooms[e.target.name]
      )
      .then(() => {
        toast.success(t("buy_success"), { theme: "dark" });
        navigate("/myroom");
      })
      .catch((error) => {
        toast.error(t("error"), { theme: "dark" });
      });
  };

  return (
    <>
      <Navbars />
      <div className="collection">
        <Container>
          <div className="title-text">
            <div className="title-text-big">{t("choose_a_space")}</div>
            <div className="title-text-small">{t("select_space")}</div>
          </div>
          <Row>
            {standardRooms.map((item, index) => {
              return (
                <Col md={4} key={index}>
                  <Card bg={"dark"} text={"light"}>
                    <Card.Header>{t("mvp_room")}</Card.Header>
                    <Card.Img
                      variant="top"
                      src={item.information.image}
                      className="home-card-image"
                    />
                    <Card.Body>
                      <Card.Title>{`${item.information.name} - ${t("frames")} ${
                        item.information.frames
                      }`}</Card.Title>
                      <Card.Text>{`${t("by")} @${
                        item.information.creator
                      } - ${t("price")} ${item.information.price} ${t(
                        "eth"
                      )}`}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <div className="d-grid gap-2">
                        <Button size="sm" name={index} onClick={onBuy}>
                          {t("buy")}
                        </Button>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <ToastContainer />
    </>
  );
};

BuyRoom.propTypes = {
  account: PropTypes.string,
};

const mapStateToProps = (state) => ({
  account: state.authentication.account,
});

export default connect(mapStateToProps)(BuyRoom);
