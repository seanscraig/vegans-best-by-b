import "./NavBar.css";

const navItems = [
  {
    id: 1,
    text: "About Us",
  },
  { 
    id: 2,
    text: "Products" 
  },
  { 
    id: 3,
    text: "Contact" 
  },
];

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <h3>Vegans Best By B</h3>
      </div>
      <div className="links">
        {navItems.map((item) => (
          <h3 key={item.id}>{item.text}</h3>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
