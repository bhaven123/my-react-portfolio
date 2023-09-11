import { Card, Container } from "react-bootstrap";

const Home = () => {
  return (
    /* Making use of React-Bootstrap for designing the Home Section */
    <Container id="home" className="min-vh-100 d-flex align-items-center">
      <Card
        className="py-5 px-5 mb-5 vw-25 mt-5 mx-auto px-auto"
        border="light"
        bg="dark"
      >
        <p className="mt-1  fs-5" style={{ color: "rgb(233, 27, 233)" }}>
          Hi, my name is
        </p>
        <h1 className="fw-bolder lh-1 display-1" style={{ color: "#ccd6f6" }}>
          Bhaven Naik.
        </h1>
        <h2 className="fw-bolder display-2" style={{ color: "#8892b0" }}>
          I'm an 🤖 Artificial Intelligence Consultant at Lemay.ai
        </h2>
        <p className="fs-5" style={{ color: "#8892b0" }}>
          🌟 Let's dive into the world of AI together! Driving AI Innovation for
          Business Transformation 🚀
        </p>
      </Card>
    </Container>
  );
};

export default Home;
