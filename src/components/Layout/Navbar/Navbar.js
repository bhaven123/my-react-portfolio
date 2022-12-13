import { Link, animateScroll } from "react-scroll";
import classes from "./Navbar.module.css";
import logo from "../../../assets/logo.png";
import resume from "../../../assets/Bhaven_Naik_Resume.pdf";

const Navbar = () => {
  const logoClickScrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <nav id="navbar" className={classes.nav}>
      <div className={classes.logo}>
        <img src={logo} alt="Personal Logo" onClick={logoClickScrollToTop} />
      </div>
      <ul className={classes["nav-list"]}>
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
      <div>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer noopener"
          className={classes.resume}
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
