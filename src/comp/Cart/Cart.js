import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import './Cart.scss'

const Cart = () => {

    const { cart, emptyCart, totalCart, removerItem } = useContext(CartContext)

if (cart.length === 0) {

    return(
        <div className="container my-5">
            <h2>Tu carrito está vacío</h2>
            <img className="imgEmpty" src="https://res.cloudinary.com/dyetlrz2w/image/upload/v1675081832/OhShirtz/mini-empty-cart_v6n23q.png" alt="CarritoVacio" />
            <Link to="/" className="btn btn-dark">Volver</Link>
        </div>
    )
}

    return(
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map(item => (
                <div className="detail-prod" key={item.id}>
                    <h4>{item.nombre}</h4>
                    <img className="img-small" alt={item.name} src={item.img} />
                    <p className="parr">Cantidad: {item.cantidad}</p>
                    <p className="parr">Precio: ${item.precio * item.cantidad} </p>
                    <button onClick={() => removerItem(item.id)} className="btn btn-danger remove"><BsFillTrashFill /></button>
                    <br/>
                    <Link className="btn btn-success" to= "/checkout" >Terminar mi compra</Link>
                    
                </div>


                ))      
            }

            <h4>Total: $ {totalCart()} </h4>

        <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>

        </div>
    )
    
}

export default Cart