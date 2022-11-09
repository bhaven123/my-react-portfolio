import classes from "./About.module.css";
import profileImage from "../assets/profile.png";

const About = () => {
  return (
    <div id="about" className={classes.position}>
      <div className={classes.container}>
        <img
          src={profileImage}
          alt="Profile Pic"
          className={classes["profile-pic"]}
        />
        <h2 className={classes.h2}>Software Developer</h2>
      </div>
      <div>
        <h1 className={classes.h1}>Hi! I'm Bhaven Naik</h1>
        <p className={classes.about}>
          Hi! I'm Bhaven Naik and I have an interest in creating Full-Stack
          Applications. I am also interesed in Data Science and related
          positions.
        </p>
      </div>
    </div>
  );
};

export default About;
