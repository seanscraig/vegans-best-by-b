import "./Home.css";
import backgroundImage from "../../assets/homeBackground.jpg";

const containerStyle = {
  flex: "1 0 auto",
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#464646",
};

const Home = () => {
  return <div className="container" style={containerStyle}></div>;
};

export default Home;
