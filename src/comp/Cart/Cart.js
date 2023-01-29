import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs';
import './Cart.scss'

const Cart = () => {

    const { cart, emptyCart, totalCart, removerItem } = useContext(CartContext)

    return(
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map(item => (
                <div className="detail-prod" key={item.id}>
                    <h4>{item.nombre}</h4>
                    <img className="img-small" src={item.img} />
                    <p className="parr">Cantidad: {item.cantidad}</p>
                    <p className="parr">Precio: ${item.precio * item.cantidad} </p>
                    <button onClick={() => removerItem(item.id)} className="btn btn-danger"><BsFillTrashFill /></button>
                    <hr/>
                </div>


                ))
                    
            }

            <h4>Total: $ {totalCart()} </h4>

        <button className="btn btn-danger" onClick={emptyCart} >Vaciar carrito</button>
        
        </div>
    )
    
}

export default Cart