
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MOCK_DATA from "../../data/MOCK_DATA.json"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()


    const pedirDatos = () => {
        return new Promise ((resolve, reject) => {
            setTimeout ( () => {
                resolve(MOCK_DATA) 
            }, 2000)
        })
        

}
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
    }, [])

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer