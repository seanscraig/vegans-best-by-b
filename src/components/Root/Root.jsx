import { Outlet } from "react-router-dom";
import "./Root.css";
import { NavBar, Footer } from "../";

function Root() {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
