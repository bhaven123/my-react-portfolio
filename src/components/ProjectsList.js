import { Card, Accordion, ListGroup, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProjectsList = ({ projects }) => {
  return (
    <Container
      style={{
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 300px)",
        justifyContent: "space-around",
        rowGap: "20px",
        columnGap: "1.33%",
        color: "#ccd6f6",
      }}
    >
      {projects.map((projectItem) => {
        const { src, title, link, icon, text, tools, description } =
          projectItem;
        return (
          <Card key={title} border="light" bg="dark">
            <Card.Img
              variant="top"
              src={src}
              style={{ objectFit: "cover", height: "160px" }}
            />
            <Card.Body>
              <Card.Title>
                {title}{" "}
                <Card.Link href={link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={icon} />
                </Card.Link>
              </Card.Title>
              <Card.Text>{text}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" style={{ height: "100px" }}>
              <ListGroup.Item
                variant="dark"
                className="bg-dark"
                style={{ color: "#ccd6f6" }}
              >
                {tools}
              </ListGroup.Item>
            </ListGroup>
            <Accordion flush style={{}}>
              <Accordion.Item eventKey="0" style={{ backgroundColor: "black" }}>
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Body
                  style={{ maxHeight: "200px", overflowY: "auto" }}
                >
                  <ListGroup>
                    {description.map((item, index) => (
                      <ListGroup.Item
                        key={index}
                        className="bg-dark"
                        style={{ color: "#ccd6f6" }}
                      >
                        {item}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>
        );
      })}
    </Container>
  );
};

export default ProjectsList;
