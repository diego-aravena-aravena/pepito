import { Form, Button } from "react-bootstrap"; // Importamos Form y Button de React-Bootstrap

// Componente SearchBar: representa el campo de búsqueda
export function SearchBar() {
  return (
    <Form className="d-flex w-50"> {/* `d-flex` hace que los elementos estén en fila y `w-50` ajusta el ancho */}
      <Form.Control
        type="search"
        placeholder="Buscar..." // Texto de ayuda dentro del campo de búsqueda
        className="me-2" // `me-2` agrega margen a la derecha para separar del botón
        aria-label="Search" // Mejora la accesibilidad para lectores de pantalla
      />
      <Button variant="outline-success">Buscar</Button> {/* Botón de búsqueda */}
    </Form>
  );
}
