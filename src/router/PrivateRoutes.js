import { Navbar } from "../comp/Navbar/Navbar";
import ItemListContainer from "../comp/ItemListContainer/ItemListContainer";
import Nosotros from "../comp/Nosotros/Nosotros";
import ItemDetailContainer from "../comp/itemDetailContainer/itemDetailContainer";
import Contacto from "../comp/Contacto/Contacto";
import Cart from "../comp/Cart/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import Checkout from "../comp/Checkout/Checkout";


const PrivateRoutes = () => {
    return(
        <>
        <Navbar />
      
        <Routes>
        <Route path="/" element= {<ItemListContainer />} />
        <Route path="/productos/:categoryId" element= {<ItemListContainer />}/>
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
        <Route path="/nosotros" element= {<Nosotros />} />
        <Route path="/contacto" element= {<Contacto />} />
        <Route path="/cart" element= { <Cart /> } />
        <Route path="/checkout" element= { <Checkout /> } />
        <Route path="*" element= { <Navigate to={"/"}/> } />
        </Routes> 
        </>
    )
}

export default PrivateRoutes