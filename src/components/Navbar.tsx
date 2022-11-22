import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainNavBar() {
  return (
    <>
      <Navbar bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/upcoming">
              Upcoming Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/popular">
              Popular Movies
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavBar;
