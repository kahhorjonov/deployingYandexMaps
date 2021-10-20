import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-blue d-flex justify-content-center">
      <Navbar
        bg="blue"
        sticky="top"
        expand="lg"
        className="w-100 border-bottom"
      >
        <Container className="px-4">
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} width="60px" height="35px" />
            </Link>
            <Link to="/" className="text-light text-decoration-none m-4">
              Tashkilot nomi
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="bg-blue text-center">
              <Nav.Link
                className="bg-blue m-2 p-0 px-2  text-light"
                href="/table-comp"
              >
                Yo'llar ro'yxati
              </Nav.Link>
              <Nav.Link
                className="bg-blue m-2 p-0 px-2  text-light"
                href="/about"
              >
                Biz haqimizda
              </Nav.Link>
              <Nav.Link
                className="bg-blue m-2 p-0 px-2  text-light"
                href="/contact"
              >
                Aloqa
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
