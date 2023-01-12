import Item from "../Item/Item"

const ItemList = ({productos}) => {
    return(
        <div className="container my-5">
            <h3>Bienvenidos a Oh Shirtz!</h3>
            <br/>

            <section className="row my-3">
                { productos.map((prod) => <Item key={prod.id} prod={prod}/>)}
            </section>

        </div>
    )
}

export default ItemList