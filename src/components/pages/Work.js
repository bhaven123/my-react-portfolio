import portfolio from "../../assets/portfolio.png";
import drImage from "../../assets/dr.png";
import ganImage from "../../assets/gans.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  Container,
  Row,
  Col,
  Accordion,
  ListGroup,
} from "react-bootstrap";

const Work = () => {
  return (
    <Container id="work" className="min-vh-100 py-3">
      <h1
        className="w-25 mx-auto text-center border-3 border-bottom border-secondary border-end mb-5 pb-3 fs-1 fw-bolder fw-bolder"
        style={{ color: "#ccd6f6" }}
      >
        My <span style={{ color: "purple" }}>Work</span>
      </h1>
      <Container className="d-flex justify-content-center align-items-center">
        <Row
          xs={1}
          xl={3}
          md={2}
          className="g-5 text-justify mx-auto"
          style={{ color: "#ccd6f6" }}
        >
          <Col>
            <Card border="light" bg="dark" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={portfolio} />
              <Card.Body>
                <Card.Title>
                  Personal Portfolio{" "}
                  <Card.Link
                    href="https://bhaven-naik.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLink} />
                  </Card.Link>
                </Card.Title>
                <Card.Text>My portfolio website.</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item
                  variant="dark"
                  className="bg-dark"
                  style={{ color: "#ccd6f6" }}
                >
                  React, React-Bootstrap, HTML, CSS
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Accordion flush style={{ "background-color": "blue" }}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item
                          className="bg-dark"
                          style={{ color: "#ccd6f6" }}
                        >
                          Developed Personal Portfolio using ReactJS, HTML and
                          Bootstrap CSS.
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="bg-dark"
                          style={{ color: "#ccd6f6" }}
                        >
                          Used React-Bootstrap CSS for responsive design and
                          styling the entire website.
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card border="light" bg="dark" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ganImage} />
              <Card.Body>
                <Card.Title>
                  GAN Augmentation{" "}
                  <Card.Link
                    href="https://github.com/bhaven123/Project-GANs.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Card.Link>
                </Card.Title>
                <Card.Text>
                  A Generative Adversarial Network (GAN) to augment human action
                  recognition videos.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item
                  variant="dark"
                  className="bg-dark"
                  style={{ color: "#ccd6f6" }}
                >
                  Python, PyTorch, PyTorch Lightning, PyTorchVideo
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item
                          className="bg-dark"
                          style={{ color: "#ccd6f6" }}
                        >
                          Worked on developing a GAN as a research project to
                          gain deeper insights into applications of Generalized
                          Adversarial Networks in the field of Medical Science.
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="bg-dark"
                          style={{ color: "#ccd6f6" }}
                        >
                          Developed a GAN that could produce augmented videos of
                          Human Action Recognition using PyTorch and PyTorch
                          Lightning on the HMDB51 dataset.
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="bg-dark"
                          style={{ color: "#ccd6f6" }}
                        >
                          Using a pretrained video classifier available in
                          PyTorchVideo, tested whether the augmented videos help
                          in improving the performance of the classifier.
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card border="light" bg="dark" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={drImage} />
              <Card.Body>
                <Card.Title>
                  Diabetic Retinopathy{" "}
                  <Card.Link
                    href="https://github.com/bhaven123/Project-Diabetic-Retinopathy.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Card.Link>
                </Card.Title>
                <Card.Text>
                  A model that provides an efficient solution to
                  ophthalmologists to help them detect the severities of the
                  Diabetic Retinopathy and to treat the patient accordingly.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item
                  variant="dark"
                  className="bg-dark"
                  style={{ color: "#ccd6f6" }}
                >
                  Python, Tensorflow, Keras, Flask, HTML, CSS, AWS EC2.
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item
                          className="bg-dark"
                          style={{ color: "#ccd6f6" }}
                        >
                          Worked with TensorFlow Keras to fine tune a
                          pre-trained VGG16 model with custom classes.
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="bg-dark"
                          style={{ color: "#ccd6f6" }}
                        >
                          Created a client interface using Flask, HTML, CSS.
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="bg-dark"
                          style={{ color: "#ccd6f6" }}
                        >
                          Deployed the project using an AWS EC2 instance.
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Work;
