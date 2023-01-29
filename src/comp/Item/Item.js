import { Link } from "react-router-dom"

const Item = ({nombre, img, descripcion, precio, category, id}) => {
    return (
        <div className = "col-3 m-3">
                <img src ={img} alt={nombre}/>
                <h4>{nombre}</h4>
                {/* <p>{prod.descripcion}</p> */}
                <p>Precio: <b>${precio}</b></p>
                <small>Categoria: {category} </small>
                <br />
                <Link to={`/detail/${id}`} className="btn btn-dark">Detalle</Link>
        </div>
    )

}

export default Item