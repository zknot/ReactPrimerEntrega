import { Navbar } from "./comp/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./comp/ItemListContainer/ItemListContainer";
import ItemDetail from "./comp/ItemDetail/ItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "./comp/Nosotros/Nosotros";
import Productos from "./comp/Productos/Productos";


function App() {
  return (

    <BrowserRouter>

        
      <Navbar />
      
      <Routes>
        
        <Route path="/" element= {<ItemListContainer />} />
        <Route path="/productos" element= {<Productos />} />
        <Route path="/productos/:categoryId" element= {<ItemListContainer />} />
        <Route path="/nosotros" element= {<Nosotros />} />


      </Routes>


      {/* <ItemDetail /> */}

      {/* <ItemListContainer /> */}

            
    </BrowserRouter>
   
  );
}

export default App;
