import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import './Checkout.scss'

const Checkout = () => {

    const {cart, totalCart, emptyCart} = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion:'',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart()
        }
        
        const ordersRef = collection(db, 'orders')

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart()
            })
            .catch((error) => { console.log(error)
            })
        }
    
    if (orderId){
        return(
            <div className="container checkout my-5" >
                <h2>Tu compra fue realizada!</h2>
                <hr/>
                <p>Tu código de orden es: {orderId}</p>
                <Link to="/" className="btn btn-success" >Volver</Link>

            </div>

        )
    }

    if (cart.length === 0){
        return <Navigate to="/" />
    }


    return(
        <div className="container my-5" >
            <h2>Terminar mi compra</h2>
            <br/>

            <form onSubmit={handleSubmit}>
                <input className="form-control my-2"
                    onChange={handleInputChange}
                    type='text'
                    name='nombre'
                    value={values.nombre}
                    placeholder='Tu nombre'
                />
                <input className="form-control my-2"
                    onChange={handleInputChange}
                    type='text'
                    name='direccion'
                    value={values.direccion}
                    placeholder='Tu direccion'
                />
                <input className="form-control my-2"
                    onChange={handleInputChange}
                    type='email'
                    name='email'
                    value={values.email}
                    placeholder='Tu email'
                />

                <button className="btn btn-primary" >Enviar</button>
            </form>
        </div>
    )
}

export default Checkout