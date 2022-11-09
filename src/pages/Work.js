import classes from "./Work.module.css";
import portfolio from "../assets/portfolio.png";
import drImage from "../assets/dr.png";
import ganImage from "../assets/gans.png";

const Work = () => {
  return (
    <div id="work" className={classes.projects}>
      <a
        href="https://github.com/bhaven123/my-react-portfolio.git"
        target="_blank"
        rel="noreferrer"
      >
        <img src={portfolio} alt="Portfolio" className={classes.image} />
        <p className={classes.title}>Personal Portfolio</p>
      </a>
      <a
        href="https://github.com/bhaven123/Project-GANs.git"
        target="_blank"
        rel="noreferrer"
      >
        <img src={ganImage} alt="GAN Demo" className={classes.image} />
        <p className={classes.title}>
          <span>GAN Augmentation</span>
        </p>
      </a>

      <a
        href="https://github.com/bhaven123/Project-Diabetic-Retinopathy.git"
        target="_blank"
        rel="noreferrer"
      >
        <img src={drImage} alt="DR Demo UI" className={classes.image} />
        <p className={classes.title}>
          <span>Diabetic Retinopathy</span>
        </p>
      </a>
    </div>
  );
};

export default Work;
