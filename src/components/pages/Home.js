import { Card, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="min-vh-100 d-flex align-items-center">
      <Card
        id="home"
        className="py-5 px-5 mb-5 vw-50 mt-5 mx-auto px-auto"
        border="light"
        bg="dark"
      >
        <p className="mt-1  fs-6" style={{ color: "rgb(233, 27, 233)" }}>
          Hi, my name is
        </p>
        <h1 className="fs-1 fw- lh-1" style={{ color: "#ccd6f6" }}>
          Bhaven Naik.
        </h1>
        <h2 className="fs-2 fw-bolder" style={{ color: "#8892b0" }}>
          I'm a Software Developer.
        </h2>
        <p className="fs-6" style={{ color: "#8892b0" }}>
          I'm currently looking for any available opporunites as a full-stack or
          machine learning developer.
        </p>
      </Card>
    </Container>
  );
};

export default Home;
