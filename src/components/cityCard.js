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
            {/* {weatherData ? (
              <>
                <h2>{weatherData.name}</h2>
                <p>Temperature: {weatherData.main.temp}°C</p>
                <p>Description: {weatherData.weather[0].description}</p>
                <p>Feels like : {weatherData.main.feels_like}°C</p>
                <p>Humidity : {weatherData.main.humidity}%</p>
                <p>Pressure : {weatherData.main.pressure}</p>
                <p>Wind Speed : {weatherData.wind.speed}m/s</p>
              </>
            ) : (
              <p>Loading weather data...</p>
            )} */}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CityCard;
