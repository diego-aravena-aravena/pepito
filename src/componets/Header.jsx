import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"; // Importamos componentes de Bootstrap
import { SearchBar } from "./SearchBar"; // Importamos el componente del buscador

// Componente Header: representa la barra de navegación
export function Header() {
  return (
  
    <Navbar expand="lg" className="bg-body-tertiary w-100"> {/* `w-100` para ocupar todo el ancho */}
      <Container fluid> {/* `fluid` hace que el contenedor use todo el ancho disponible */}

 
        {/* Logo o nombre de la aplicación */}
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>

        {/* Botón para desplegar el menú en dispositivos pequeños */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Contenedor del menú de navegación */}
        <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-between">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            
            {/* Enlaces de navegación */}
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>

          {/* Se inserta el componente del buscador aquí */}
       

           {/* Contenedor para el buscador */}
  <div className="w-100 mt-3"> {/* mt-3 añade margen arriba para separar */}
    <SearchBar />
  </div>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
