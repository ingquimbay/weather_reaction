import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Search from "./search";

const Header = ({}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Weather Reaction App</Navbar.Brand>
        <Search />
      </Container>
    </Navbar>
  );
};

export default Header;
