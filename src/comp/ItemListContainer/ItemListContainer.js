
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId);

       
    useEffect(() =>{
        pedirDatos()
            .then((res) => {
                if (categoryId){
                    setProductos(res.filter (prod => prod.category === categoryId))
                } else {
                    setProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categoryId])

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}





export default ItemListContainer