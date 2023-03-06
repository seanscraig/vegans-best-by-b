import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Button from "../Reusable/Button";
import { navItems } from "../../utils/navItems";
// import { MenuIcon } from "../Reusable/Icon/Icon";
import menuIcon from "../../assets/icons/menu.svg";

const NavBar = function () {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setNavMenuOpen((prev) => !prev);
  };

  const navMenu = (
    <>
      {navItems.map((item) => (
        <li key={item.id} onClick={() => setNavMenuOpen(false)}>
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <nav className="nav-bar">
      <div id="myNav" className={`overlay${navMenuOpen ? " show-links" : ""}`}>
        <Button
          type="button"
          styleClass="close-btn"
          onClick={handleButtonClick}
          value="x"
        />
        <ul className="overlay-content">{navMenu}</ul>
      </div>
      <div className="nav-logo-and-button">
        <div className="logo-container">
          <NavLink to="/" end>
            <h1 className="logo">Vegans Best By B</h1>
          </NavLink>
        </div>
        <Button
          type="button"
          styleClass="menu-btn"
          onClick={handleButtonClick}
          value={navMenuOpen ? "-" : "+"}
        />
        {/* <button onClick={handleButtonClick} className="menu-btn">
          <svg
            width="20"
            height="20"
            style={{
              fill: "rgb(0,0,255)",
              strokeWidth: "3",
              stroke: "rgb(0,0,0)",
            }}
          >
            <rect width="20" height="5" />
            <rect width="20" height="5" />
          </svg>
        </button> */}
      </div>
      {/* <ul className={`nav-links${navMenuOpen ? " show-links" : ""}`}>
        {navMenu}
      </ul> */}
    </nav>
  );
};

export default NavBar;
