import profileImage from "../../assets/PXL_20240331_213208441.PORTRAIT.jpg";
import {
  faPython,
  faReact,
  faNode,
  faHtml5,
  faCss3,
  faBootstrap,
  faDocker,
  faAws,
  faAngular,
  faLinux,
  faWindows,
  faGitlab,
  faGitAlt,
  faApple
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
          <h1 className="text-center">👋 Hi! I'm Bhaven Naik</h1>
          <p>
            I'm an AI Consultant at Lemay.ai passionate about transforming data into actionable insights and building robust AI solutions. My expertise spans MLOps, Solution Architecture, Data Science, and Exploratory Data Analysis (EDA).
          </p>
          <p>
            🔧 Technologies & Tools I Work With:
          </p>
          <ul>
            <li>
              Programming Languages: Python <FontAwesomeIcon icon={faPython} shake />
            </li>
            <li>Frameworks & Libraries: TensorFlow, PyTorch</li>
            <li>Containerization & Orchestration: Docker <FontAwesomeIcon icon={faDocker} bounce />, Kubernetes</li>
            <li>Workflow & Automation: Airflow, MLflow</li>
            <li>
              Web Development: Flask, FastAPI, AngularJS <FontAwesomeIcon icon={faAngular} spin />, NextJS, NodeJS <FontAwesomeIcon icon={faNode} />, ReactJS <FontAwesomeIcon icon={faReact} spin />, HTML <FontAwesomeIcon icon={faHtml5} beatFade /> Bootstrap <FontAwesomeIcon icon={faBootstrap} flip /> & CSS{" "}
              <FontAwesomeIcon icon={faCss3} flip />
            </li>
            <li>Streaming & Databases: Kafka, Neo4j, Elastic Search, Postgres, MongoDB, Redis, Vector Databases</li>
            <li>
              Infrastructure as Code: Terraform, Ansible
            </li>
            <li>Operating Systems: Linux <FontAwesomeIcon icon={faLinux} />, MacOS <FontAwesomeIcon icon={faApple} />, and Windows <FontAwesomeIcon icon={faWindows} /></li>
            <li>CI/CD: GitLab <FontAwesomeIcon icon={faGitlab} />, Git <FontAwesomeIcon icon={faGitAlt} /></li>
            <li>
              Cloud Services: AWS <FontAwesomeIcon icon={faAws} />, Heroku
            </li>
            <li>Web Servers: Nginx</li>
            <li>
              Queue Management: Bull for Redis
            </li>
            <li>
              API Testing: Postman
            </li>
            <li>
                Machine Learning Tools & Techniques: Comprehensive expertise in all ML tools and techniques, including:
                <li> Supervised </li>
                <li> Unsupervised Learning </li>
                <li> Deep Learning </li>
                <li> Reinforcement Learning </li>
            </li>
          </ul>
          <p>💡 I thrive on solving complex problems and delivering scalable, efficient solutions. Whether it's developing end-to-end machine learning pipelines or architecting cloud-based systems, I aim to drive innovation and excellence in every project </p>
          <p>🚀 Let's connect and collaborate on exciting AI and data science ventures!</p>
        </Container>
      </Container>
    </Container>
  );
};

export default About;
