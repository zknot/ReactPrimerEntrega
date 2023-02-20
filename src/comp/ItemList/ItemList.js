import Item from "../Item/Item"
import './ItemList.scss'

const ItemList = ({productos}) => {
    return(
        <div className="main__list container my-5">
            <h3>Bienvenidos a Oh Shirtz!</h3>
            <br/>

            <section className="row my-3">
                { productos.map((prod) => <Item key={prod.id} {...prod}/>)}
            </section>

        </div>
    )
}

export default ItemList