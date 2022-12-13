import classes from "./Work.module.css";
import portfolio from "../assets/portfolio.png";
import drImage from "../assets/dr.png";
import ganImage from "../assets/gans.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Work = () => {
  return (
    <div id="work" className={classes.projects}>
      <h1 className={classes.heading}>
        My <span>Work</span>
      </h1>
      <div className={classes.gridwork}>
        <div className={classes.container}>
          <img src={portfolio} alt="Portfolio" className={classes.image} />
          <div className={classes["project-info"]}>
            <div className={classes.block}>
              <h2 className={classes["project-title"]}>Personal Portfolio</h2>
              <a
                href="https://bhaven-naik.com/"
                target="_blank"
                rel="noreferrer"
                className={classes["project-links"]}
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
            <ul className={classes.description}>
              <li>Developed Personal Portfolio using ReactJS, HTML and CSS.</li>
              <li>Used react-scroll for single page navigation.</li>
              <li>Used CSS modules for styling the entire website.</li>
            </ul>
          </div>
        </div>
        <div className={classes.container}>
          <img src={ganImage} alt="GAN Demo" className={classes.image} />
          <div className={classes["project-info"]}>
            <div className={classes.block}>
              <h2 className={classes["project-title"]}>GAN Augmentation</h2>
              <a
                href="https://github.com/bhaven123/Project-GANs.git"
                target="_blank"
                rel="noreferrer"
                className={classes["project-links"]}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <ul className={classes.description}>
              <li>
                Worked on developing a GAN as a research project to gain deeper
                insights into applications of Generalized Adversarial Networks
                in the field of Medical Science.
              </li>
              <li>
                Developed a GAN that could produce augmented videos of Human
                Action Recognition using PyTorch and PyTorch Lightning on the
                HMDB51 dataset.
              </li>
              <li>
                Using a pretrained video classifier available in PyTorchVideo,
                tested whether the augmented videos help in improving the
                performance of the classifier.
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.container}>
          <img src={drImage} alt="DR Demo UI" className={classes.image} />
          <div className={classes["project-info"]}>
            <div className={classes.block}>
              <h2 className={classes["project-title"]}>Diabetic Retinopathy</h2>
              <a
                href="https://github.com/bhaven123/Project-Diabetic-Retinopathy.git"
                target="_blank"
                rel="noreferrer"
                className={classes["project-links"]}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <ul className={classes.description}>
              <li>
                Worked with TensorFlow Keras to fine tune a pre-trained VGG16
                model with custom classes.
              </li>
              <li>Created a client interface using Flask, HTML, CSS.</li>
              <li>Deployed the project using an AWS EC2 instance.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
