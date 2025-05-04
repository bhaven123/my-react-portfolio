import profileImage from "../../assets/Profile Picture.png";
import {
  faPython,
  faBootstrap,
  faDocker,
  faAws,
  faLinux,
  faWindows,
  faApple,
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
            I'm an AI Consultant at Lemay.ai passionate about transforming data into actionable insights and building robust AI solutions. My expertise spans MLOps, Solution Architecture, Data Science, Machine Learning, and Deep Learning.

            💡I thrive on solving complex problems and delivering scalable, efficient solutions. Whether it's developing end-to-end machine learning pipelines or architecting cloud-based systems, I aim to drive innovation and excellence in every project.

            🚀 Let's connect and collaborate on exciting AI and data science ventures!
          </p>
          <p>
            Experience:
          </p>
          <ul>
            <li>Artificial Intelligence Consultant at Lemay.ai (2023-Present)</li>
          </ul>
          <p>
            Technical Skills:
          </p>
          <ul>
            <li>Machine Learning & Data Science: PyTorch, TensorFlow, Keras, Scikit-Learn, Hugging Face, Reinforcement Learning, Computer Vision, Pandas, NumPy, PySpark, MLflow, DVC, Airflow, Matplotlib, Power BI</li>
            <li>MLOps & DevOps: Git, GitHub, GitLab, Bitbucket, Docker <FontAwesomeIcon icon={faDocker} bounce />, Kubernetes, Airflow, MLflow, DVC, Terraform, Ansible</li>
            <li>Programming & Web Development: Python <FontAwesomeIcon icon={faPython} shake />, JavaScript (Node.js), FastAPI, Flask, Express.js, React.js, Gradio, HTML5, CSS3, Bootstrap <FontAwesomeIcon icon={faBootstrap} flip /></li>
            <li>
              Cloud & Infrastructure: AWS <FontAwesomeIcon icon={faAws} />, Azure, Hadoop, Sqoop, Hive, MySQL, MongoDB
            </li>
            <li>Operating Systems: Linux <FontAwesomeIcon icon={faLinux} />, MacOS <FontAwesomeIcon icon={faApple} />, and Windows <FontAwesomeIcon icon={faWindows} /></li>
            <li>•Tools & Environments: VS Code, NeoVim, JetBrains, Jupyter, Anaconda, Jira, Slack, Zoom, MS Teams, Discord</li>
          </ul>
          <p>
            Education:
          </p>
          <ul>
            <li>
              Master of Applied Computer Science at St. Francis Xavier University (2020-2022)
            </li>
            <li>
              Bachelor of Computer Engineering at University of Mumbai (2016-2020)
            </li>
          </ul>
        </Container>
      </Container>
    </Container>
  );
};

export default About;
