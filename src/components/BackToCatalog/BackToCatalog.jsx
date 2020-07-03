import React from "react";
import "./BackToCatalog.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link } from "react-router-dom";

const BackToCatalog = () => {
  return (
    <Router>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="back-to-catalog">
          <FontAwesomeIcon
            className="back-to-catalog__icon"
            icon={faChevronLeft}
          />
          <p className="back-to-catalog__text">Voltar ao Catálogo</p>
        </div>
      </Link>
    </Router>
  );
};

export default BackToCatalog;
