import profileImage from "../../assets/profile.jpg";
import {
  faPython,
  faReact,
  faNode,
  faHtml5,
  faCss3,
  faBootstrap,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    /* Making use of React-Bootstrap for designing the About Section */
    <Container id="about" className="min-vh-100 py-3 mb-3">
      <h1
        className="w-25 text-center border-3 border-secondary border-end border-bottom p-auto fs-1 fw-bolder m-auto pb-3"
        style={{ color: "#ccd6f6" }}
      >
        About <span style={{ color: "purple" }}>Me!</span>
      </h1>
      <Container className="d-flex flex-column justify-content-evenly align-items-center mt-5">
        <Container className="text-center">
          <img
            src={profileImage}
            alt="Profile Pic"
            className="w-25 h-25 object-fit-cover mx-auto border img-thumbnail border-secondary rounded-circle z-1 mb-3"
          />
        </Container>
        <Container
          className="mb-0 fs-5"
          style={{
            color: "#ccd6f6",
            textAlign: "justify",
          }}
        >
          <h1 className="text-center">Hi! I'm Bhaven Naik</h1>
          <p>
            As a Full Stack Engineer and Machine Learning enthusiast, I bring a
            unique blend of skills and experience to any project. With expertise
            in front-end and back-end technologies such as React.js, Node.js,
            Express.js, MongoDB, and databases like PostgreSQL and MySQL, I am
            capable of designing and building scalable, responsive, and visually
            appealing applications. Additionally, my proficiency in machine
            learning frameworks such as TensorFlow, Keras, and Scikit-learn,
            coupled with a Master's in Applied Computer Science, enables me to
            develop intelligent systems that can analyze data, make predictions,
            and automate processes.
          </p>
          <p>
            Whether it's building a robust web application or developing a
            machine learning model, I am passionate about learning and
            delivering high-quality work that meets business requirements. If
            you're looking for a Full Stack Engineer with expertise in Machine
            Learning, feel free to connect with me.
          </p>
          <p>
            I am very excited to kickstart my professional career. I am a self
            starter and a quick learner. Additionally, I am open to learning new
            things. Currently, I am working on building a Task Management App
            using React.js and on a cake-ordering application with frontend in
            React.js and backend using Node.js and Express.js with database
            connection to MongoDB.
          </p>
          <p>The Tech stack that I have been using:</p>
          <ol>
            <li>
              Python <FontAwesomeIcon icon={faPython} shake />
            </li>
            <li>PyTorch</li>
            <li>TensorFlow</li>
            <li>
              React.js <FontAwesomeIcon icon={faReact} spin />
            </li>
            <li>Redux</li>
            <li>
              Node.js <FontAwesomeIcon icon={faNode} beat />
            </li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>
              HTML <FontAwesomeIcon icon={faHtml5} beatFade />
            </li>
            <li>Material UI</li>
            <li>
              Bootstrap <FontAwesomeIcon icon={faBootstrap} flip /> & CSS{" "}
              <FontAwesomeIcon icon={faCss3} flip />
            </li>
            <li>
              Docker <FontAwesomeIcon icon={faDocker} bounce />
            </li>
          </ol>
        </Container>
      </Container>
    </Container>
  );
};

export default About;
