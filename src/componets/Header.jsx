import { Navbar, Nav, Container } from "react-bootstrap"; // Importamos componentes de Bootstrap
import { SearchBar } from "./SearchBar"; // Importamos el componente del buscador
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-100">
      <Container fluid>
        {/* Logo o nombre de la aplicación */}
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>

        {/* Botón para desplegar el menú en móviles */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Contenedor del menú de navegación */}
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/counter">Contador</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Buscador siempre visible, fuera del Collapse */}
        <div className="w-50">
          <SearchBar />
        </div>
      </Container>
    </Navbar>
  );
}


