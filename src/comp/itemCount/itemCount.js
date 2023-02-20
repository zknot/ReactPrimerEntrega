import "./itemCount.scss"

const ItemCount = ({cantidad, setCantidad, max, onAdd}) => {

        const handleRestar = () => {
            cantidad > 1 && setCantidad(cantidad - 1)
        }

        const handleSumar = () => {
            cantidad < max && setCantidad(cantidad + 1)
        }

    return(
        <div className="contador">
            <button onClick={handleRestar} 
            className={cantidad > 1 ? 'btn btn-dark' : 'btn btn-danger'} 
            disabled={cantidad === 1} >-</button>
            <span className="mx-3">{cantidad}</span>
           
            <button onClick={handleSumar} 
            className={cantidad < max ? 'btn btn-dark' : 'btn btn-danger' } 
            disabled={cantidad === max}>+</button>
            <br/>
            <button className="btn btn-success my-3" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount