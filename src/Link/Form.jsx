


import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate(); // Hook para cambiar de página

  return (
    <div>
      <h1>Página de Inicio</h1>
      <Button variant="primary" onClick={() => navigate("/about")}>
        Ir a Acerca de
      </Button>
    </div>
  );
}

export default Form;
