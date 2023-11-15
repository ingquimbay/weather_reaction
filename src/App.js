import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/header";
import Cities from "./components/cities";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Cities />
      </Container>
    </div>
  );
}

export default App;
