import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

export function Sidebar() {
  const [show, setShow] = useState(false);

  return (
    <>

     <div style={{ width: '200px'}} >
     <Button variant="primary" onClick={() => setShow(true)}>Abrir Sidebar</Button>

<Offcanvas show={show} onHide={() => setShow(false)} placement="start">
  <Offcanvas.Header closeButton>
    <Offcanvas.Title>Menú Lateral</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    <p>Opción 1</p>
    <p>Opción 2</p>
    <p>Opción 3</p>
  </Offcanvas.Body>
</Offcanvas>
     </div>

    </>
  );
}
