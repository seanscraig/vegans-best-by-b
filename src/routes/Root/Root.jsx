import { Outlet } from "react-router-dom";
import "./Root.css";
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer";

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
