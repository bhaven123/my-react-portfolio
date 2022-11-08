import classes from "./Work.module.css";
import image from "../assets/Bhaven.jpg";

const Work = () => {
  return (
    <div id="work" className={classes.block}>
      <div className={classes.projects}>
        <a
          href="https://github.com/bhaven123/my-react-portfolio.git"
          target="_blank"
          rel="noreferrer"
        >
          <img src={image} alt="Portfolio" className={classes.image} />
          <p className={classes.title}>Personal Portfolio</p>
        </a>
        <a
          href="https://github.com/bhaven123/Project-GANs.git"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={image}
            alt="GAN Demo"
            className={classes.image}
            width="300px"
            height="400px"
          />
          <p className={classes.title}>
            <span>GAN Augmentation</span>
          </p>
        </a>

        <a
          href="https://github.com/bhaven123/Project-Diabetic-Retinopathy.git"
          target="_blank"
          rel="noreferrer"
        >
          <img src={image} alt="DR Demo UI" className={classes.image} />
          <p className={classes.title}>
            <span>Diabetic Retinopathy</span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Work;
