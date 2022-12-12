import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Constants } from "../../../constants/Constants";

import { Row, Col, Button, Container, Card } from "react-bootstrap";
import Navbars from "../../navbar";
import "./index.scss";

const MyRoom = ({ account }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [myRooms, setMyRooms] = React.useState([]);

  if (!account) navigate("/login");

  React.useEffect(() => {
    axios
      .get(`${Constants.SERVER_URL}/api/room/my/${account}`)
      .then((response) => {
        setMyRooms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHandleEdit = (e) => {
    navigate(`/editroom/${e.target.name}`);
  };

  const onHandleWatch = (e) => {
    navigate(`/room/${e.target.name}`);
  };

  return (
    <>
      <Navbars />
      <div className="collection">
        <Container>
          <div className="collection-title">{t("my_rooms")}</div>
          <Link to="/buyroom">
            <Button>{t("buy_room")}</Button>
          </Link>
          <Row>
            {myRooms.map((item, index) => {
              return (
                <Col sm={6} md={4} className="col-card" key={index}>
                  <Card bg="dark" text="light">
                    <Card.Img
                      variant="top"
                      className="card-image"
                      src={item.information.image}
                    />
                    <Card.Body>
                      <Card.Title>{item.information.name}</Card.Title>
                      <Card.Text>{item.information.description}</Card.Text>
                      <Button
                        name={item._id}
                        variant="primary"
                        onClick={onHandleWatch}
                        className="button-watch"
                      >
                        {t("view")}
                      </Button>
                      <Button
                        name={item._id}
                        variant="primary"
                        onClick={onHandleEdit}
                        className="button-edit"
                      >
                        {t("edit")}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

MyRoom.propTypes = {
  account: PropTypes.string,
};

const mapStateToProps = (state) => ({
  account: state.authentication.account,
});

export default connect(mapStateToProps)(MyRoom);
