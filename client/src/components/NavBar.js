import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Button from "@material-ui/core/Button";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        {/*authenticate ? <> : <> */}
        <div className="navbar-container">
          <Link
            to="/"
            className={click ? "navbar-logo navbar-logo-active" : "navbar-logo"}
          >
            VUHA COUNSELLING SERVICE <i className="fas fa-couch"></i>
          </Link>

          <ul className={click ? "nav-menu nav-menu-active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-item-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-item-link">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-item-link">
                Contact
              </Link>
            </li>
            <li className="nav-item" id="nav-item-button-wrapper">
              <Link to="/authpage" className="nav-item-button-wrapper">
                <Button variant="outlined" color="primary" size="large">
                  Sign In
                </Button>
              </Link>
            </li>
          </ul>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
