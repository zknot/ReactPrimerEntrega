import { useState } from "react";
import { Link } from "react-router-dom";
import Span from "../Span/Span";
import "./Contacto.scss"


const Contacto = () => {

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        phone: '',
        consulta: ''
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Submit", values)
    }

    return (
        <div className="container contact my-5">
            <form onSubmit={handleSubmit}>
                <p>Nombre</p>
                <input 
                    onChange={handleInputChange}
                    value={values.nombre}
                    name='nombre'
                    type="text" className="form-control my-2" 
                    placeholder="Nombre" />
                <p>Email</p>
                <input 
                    onChange={handleInputChange}
                    value={values.email}
                    name='email'
                    type="email" className="form-control my-2" 
                    placeholder="Email" />
                <p>Celular</p>
                <input 
                    onChange={handleInputChange} 
                    value={values.phone}
                    name='phone'
                    type="phone" className="form-control my-2" 
                    placeholder="Celular" />
                <p>Escribí acá tu consulta</p>
                <input 
                    onChange={handleInputChange} 
                    value={values.consulta}
                    name='consulta'
                    type="text" className="form-control my-2" 
                    placeholder="Tu consulta" />

                <button className="btn btn-dark">Enviar</button>
                <Link className="btn btn-danger" to={'/'} >Volver</Link>
            </form>
            <Span />
        </div>


    )
}

export default Contacto