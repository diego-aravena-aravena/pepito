import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Conster } from './componets/Conster';
import { Header } from './componets/Header';
import { CardImg } from './componets/Card';
import { Sidebar } from './componets/Sidebar';

function App() {
  return (
    <>
      <Header />
  

      {/* Definir las rutas */}
      <Routes>
        <Route path="/" element={
    /*aqui va lo que quieres mostrar en el Home o pagina principal*/
          <CardImg />
       
          
          } />
        <Route path="/counter" element={
          <div>
          <Conster />
          <CardImg />
          </div>

          } />
      </Routes>
    </>
  );
}

export default App;