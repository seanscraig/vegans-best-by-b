import { IconContext } from "react-icons";
import { FiInstagram } from "react-icons/fi";
import "./Footer.css";

const Footer = function () {
  return (
    <div className="footer">
      <a href="http://www.google.com">
        Follow us on <FiInstagram />
      </a>
      <span id="my-website-link">
        Designed and Developed by <a href="http://seancraig.me">Sean Craig</a>
      </span>
    </div>
  );
};

export default Footer;
