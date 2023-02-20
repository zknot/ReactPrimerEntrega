import { useNavigate } from "react-router-dom"
import ItemCount from "../itemCount/itemCount"
import { useState } from "react"
import { useCartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import './ItemDetail.scss'

const ItemDetail = ( {id, img, nombre, category, descripcion, precio, stock} ) => {

    const { agregarAlCarrito, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate ()

const handleVolver = () => {
    navigate(-1)
}

const handleAgregar = () => {
    
    const item = {
        id,
        img,
        nombre,
        category,
        descripcion,
        precio,
        stock,
        cantidad
        
        }

    agregarAlCarrito(item)
}


    return (
        <div>
            <h3>{nombre}</h3>
            <img className="img" src={img} alt={nombre}/>
            <br />
            <small>Categoria: {category}</small>
            <h4>{descripcion}</h4>
            <p>Precio: ${precio}</p>

            {
                !isInCart(id)
                ? <ItemCount
                cantidad={cantidad}
                setCantidad={setCantidad}
                max={stock}
                onAdd={handleAgregar}
            />
            :<Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
            }

            <hr/>

            <button className="btn btn-dark" onClick={handleVolver}>Volver</button>

        </div>
    )

}

export default ItemDetail