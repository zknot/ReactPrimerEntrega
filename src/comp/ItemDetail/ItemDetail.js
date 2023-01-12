import Clicker from "../Clicker/Clicker"



const ItemDetail = ( {id, img, nombre, descripcion, precio} ) => {

    return (
        <div>
            <h3>{nombre}</h3>
            <img src={img}/>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>

            <Clicker />
        </div>
    )

}

export default ItemDetail