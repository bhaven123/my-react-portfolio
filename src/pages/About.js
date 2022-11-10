import classes from "./About.module.css";
import profileImage from "../assets/profile.jpg";
import {
  faReact,
  faNode,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div id="about" className={classes.position}>
      <h1 className={classes.heading}>
        About <span>Me</span>
      </h1>
      <div className={classes.container}>
        <div className={classes.rounds}></div>
        <img
          src={profileImage}
          alt="Profile Pic"
          className={classes["profile-pic"]}
        />
        <div className={classes.rounds}></div>
      </div>
      <div>
        <h1 className={classes.greeting}>Hi! I'm Bhaven Naik</h1>
        <p className={classes.about}>
          Hi! I'm Bhaven Naik and I have an interest in creating Full-Stack
          Applications. I am also interesed in Data Science and related
          positions. I am looking to kickstart my professional career.
        </p>
        <br />
        <p className={classes.about}>
          This is the Tech Stack that I have been working on recently.
          <ol>
            <li>
              ReactJS <FontAwesomeIcon icon={faReact} />
            </li>
            <li>
              NodeJS <FontAwesomeIcon icon={faNode} />
            </li>
            <li>
              HTML <FontAwesomeIcon icon={faHtml5} />
            </li>
            <li>
              CSS <FontAwesomeIcon icon={faCss3} />
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default About;
