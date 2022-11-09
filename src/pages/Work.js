import classes from "./Work.module.css";
import portfolio from "../assets/portfolio.png";
import drImage from "../assets/dr.png";
import ganImage from "../assets/gans.png";

const Work = () => {
  return (
    <div id="work" className={classes.projects}>
      <div className={classes.container}>
        <img src={portfolio} alt="Portfolio" className={classes.image} />
        <a
          href="https://github.com/bhaven123/my-react-portfolio.git"
          target="_blank"
          rel="noreferrer"
          className={classes["project-links"]}
        >
          Personal Portfolio
        </a>
      </div>
      <div className={classes.container}>
        <img src={ganImage} alt="GAN Demo" className={classes.image} />
        <a
          href="https://github.com/bhaven123/Project-GANs.git"
          target="_blank"
          rel="noreferrer"
          className={classes["project-links"]}
        >
          GAN Augmentation
        </a>
      </div>
      <div className={classes.container}>
        <img src={drImage} alt="DR Demo UI" className={classes.image} />
        <a
          href="https://github.com/bhaven123/Project-Diabetic-Retinopathy.git"
          target="_blank"
          rel="noreferrer"
          className={classes["project-links"]}
        >
          Diabetic Retinopathy
        </a>
      </div>
    </div>
  );
};

export default Work;
