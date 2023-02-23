import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const navItems = [
  {
    id: 0,
    text: "About Us",
    path: "about",
  },
  {
    id: 1,
    text: "Products",
    path: "products",
  },
  {
    id: 2,
    text: "Shop",
    path: "shop",
  },
  {
    id: 3,
    text: "Contact",
    path: "contact",
  },
];

const NavBar = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <div className="nav-logo-and-button">
        <div className="logo-container">
          <NavLink to="/" end>
            <span className="logo">Vegans Best By B</span>
          </NavLink>
        </div>
        <div className="hamburger-menu-button">
          <button onClick={() => setNavMenuOpen((prev) => !prev)}>
            {navMenuOpen ? "close" : "open"}
          </button>
        </div>
      </div>
      <ul className={`nav-links${navMenuOpen ? " show-links" : ""}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
