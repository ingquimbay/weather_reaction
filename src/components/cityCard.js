import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const CityCard = () => {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>City Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Current Weather
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CityCard;
