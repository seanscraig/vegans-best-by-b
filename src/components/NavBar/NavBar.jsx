import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { HiMenu, HiX } from "react-icons/hi";
import { navItems } from "../../utils/navItems";
import "./NavBar.css";

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
      <IconContext.Provider value={{ size: "3em"}}>
          <button onClick={handleButtonClick} className="close-btn">
            <HiX />
          </button>
        </IconContext.Provider>
        <ul className="overlay-content">{navMenu}</ul>
      </div>
      <div className="nav-logo-and-button">
        <div className="logo-container">
          <NavLink to="/" end>
            <h1 className="logo">Vegans Best By B</h1>
          </NavLink>
        </div>
        <IconContext.Provider value={{ size: "3em"}}>
          <button onClick={handleButtonClick} className="menu-btn">
            <HiMenu />
          </button>
        </IconContext.Provider>
      </div>
      {/* <ul className={`nav-links${navMenuOpen ? " show-links" : ""}`}>
        {navMenu}
      </ul> */}
    </nav>
  );
};

export default NavBar;
