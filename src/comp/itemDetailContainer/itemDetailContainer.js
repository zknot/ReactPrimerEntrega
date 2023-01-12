import { useEffect, useState } from "react"
import { pedirDatos, pedirItemPorId } from "../../helpers/pedirDatos"



const ItemDetailContainer = ({itemId}) => {

    const [item, setItem] = useState (null)

    useEffect (() =>{
        pedirItemPorId(itemId)
        .then((data) => {
            setItem(data)

        })
    }, [itemId])

    return (
        <div className="container my-5">

            {

                item && <ItemDetail item={item}/>

            }            

        </div>
    )

}

export default ItemDetailContainer