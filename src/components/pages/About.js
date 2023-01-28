import profileImage from "../../assets/profile.jpg";
import {
  faPython,
  faReact,
  faNode,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container
      id="about"
      className="min-vh-100 py-5 d-flex justify-content-evenly align-items-center mb-5"
    >
      <h1
        className="w-25 text-center border-3 border-secondary border-end pb-3 px-3 fs-1 fw-bolder mx-auto"
        style={{ color: "#ccd6f6" }}
      >
        About <span style={{ color: "purple" }}>Me</span>
      </h1>
      <Container className="text-center">
        <img
          src={profileImage}
          alt="Profile Pic"
          className="w-50 h-50 object-fit-cover mx-auto border img-thumbnail border-secondary rounded-circle z-1"
        />
      </Container>
      <Container className="mb-0 fs-5" style={{ color: "#ccd6f6" }}>
        <h1 className="text-center">Hi! I'm Bhaven Naik</h1>
        <p className="text-justify">
          I have an interest in Full-Stack Development, Machine Learning, and
          Data Science. I am very excited to kickstart my professional career. I
          am always open to learning new things and grow as a developer.
        </p>
        <p className="text-justify">
          Currently, I am working on building a Contact Form using ReactJS which
          sends an email in response to the form submission. I am also working
          on a Full-Stack cake-ordering application with frontend in ReactJS and
          backend using NodeJS and ExpressJS.
        </p>
        <p className="">The Tech stack that I have been using:</p>
        <ol className="">
          <li>
            Python <FontAwesomeIcon icon={faPython} />
          </li>
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
      </Container>
    </Container>
  );
};

export default About;
