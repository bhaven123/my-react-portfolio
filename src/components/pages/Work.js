import { Container } from "react-bootstrap";
import PROJECTS_LIST from "../Projects";
import ProjectsList from "../ProjectsList";

const Work = () => {
  return (
    /* Making use of React-Bootstrap for designing the Work Section */
    <Container id="work" className="min-vh-100 py-3">
      <h1
        className="w-25 mx-auto text-center border-3 border-bottom border-secondary border-end mb-5 pb-3 fs-1 fw-bolder fw-bolder"
        style={{ color: "#ccd6f6" }}
      >
        My <span style={{ color: "purple" }}>Projects</span>
      </h1>
      <Container>
        <ProjectsList projects={PROJECTS_LIST} />
      </Container>
    </Container>
  );
};

export default Work;
