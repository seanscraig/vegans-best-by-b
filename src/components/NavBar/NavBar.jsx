import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const navItems = [
  {
    id: 0,
    text: "Home",
    path: "/",
  },
  {
    id: 1,
    text: "About Us",
    path: "about",
  },
  {
    id: 2,
    text: "Products",
    path: "products",
  },
  {
    id: 3,
    text: "Shop",
    path: "shop",
  },
  {
    id: 4,
    text: "Contact",
    path: "contact",
  },
];

const NavBar = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setNavMenuOpen(!navMenuOpen);

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
        <button
          className="close-btn"
          onClick={() => setNavMenuOpen((prev) => !prev)}
        >
          x
        </button>
        <ul className="overlay-content">{navMenu}</ul>
      </div>
      <div className="nav-logo-and-button">
        <div className="logo-container">
          <NavLink to="/" end>
            <h1 className="logo">Vegans Best By B</h1>
          </NavLink>
        </div>
        <div className="hamburger-menu-button">
          <button onClick={() => setNavMenuOpen((prev) => !prev)}>
            {navMenuOpen ? "close" : "open"}
          </button>
        </div>
      </div>
      {/* <ul className={`nav-links${navMenuOpen ? " show-links" : ""}`}>
        {navMenu}
      </ul> */}
    </nav>
  );
};

export default NavBar;
