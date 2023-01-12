import Button from 'react-bootstrap/Button';


const Item = ({prod}) => {
    return (
        <div key = {prod.id} className = "col-3">
                <img src ={prod.img} alt={prod.nombre}/>
                <h4>{prod.nombre}</h4>
                {/* <p>{prod.descripcion}</p> */}
                <p>Precio: <b>${prod.precio}</b></p>
                <small>Categoria: {prod.category} </small>
                <br />
                <Button variant="dark">Detalle</Button>
        </div>
    )

}

export default Item