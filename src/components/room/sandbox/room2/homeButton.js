import { Link } from "react-router-dom";

import "./homeButton.scss";

const HomeButton = () => {
  return (
    <Link to="/">
      <img src="/img/logo.png" className="home-button" alt="Logo" />
    </Link>
  );
};

export default HomeButton;
