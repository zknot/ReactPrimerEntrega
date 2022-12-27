import { Navbar } from "./comp/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { User } from './comp/Users/Users'
import { ItemListContainer } from "./comp/ItemListContainer";



function App() {
  return (
    <div>
    
      <Navbar />

      <User nombre = "Martin" talle = "L" edad = {34} />

      <ItemListContainer greeting="Hola Martin" />

    </div>
  );
}

export default App;
