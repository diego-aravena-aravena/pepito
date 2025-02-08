
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Conster } from './componets/Conter'
import { Header } from './componets/Header'
import { CardImg } from './componets/Card'
import { Sidebar } from './componets/Sidebar'



function App() {


  return (
    <>


      <Header />
      <Sidebar/>
      <CardImg />
      <Conster />


    </>
  )
}

export default App
