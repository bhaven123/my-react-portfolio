import { Link } from "react-scroll";
import classes from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div id="navbar" className={classes.nav}>
      <ul>
        <li>
          <Link to="home" spy={true} smooth={true} offset={-110}>
            Home
          </Link>
        </li>
        <li>
          <Link to="work" spy={true} smooth={true} offset={-110}>
            Work
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-110}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={-110}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
