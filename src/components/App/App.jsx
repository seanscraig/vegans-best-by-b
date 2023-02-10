import logo from "../../logo.svg";
import "./App.css";
import backgroundImage from "../../assets/_MG_3720-edited.jpg"

import NavBar from "../NavBar";
import Footer from "../Footer";

const containerStyle = {
  flex: "1 0 auto",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container" style={containerStyle}></div>
      <Footer />
    </div>
  );
}

export default App;
