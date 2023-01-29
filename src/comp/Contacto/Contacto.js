import { useState } from "react";



const Contacto = () => {

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        phone: ''
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
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    value={values.nombre}
                    name='nombre'
                    type="text" className="form-control my-2" 
                    placeholder="Nombre" />
                <input 
                    onChange={handleInputChange}
                    value={values.email}
                    name='email'
                    type="email" className="form-control my-2" 
                    placeholder="Email" />
                <input
                    onChange={handleInputChange} 
                    value={values.phone}
                    name='phone'
                    type="phone" className="form-control my-2" 
                    placeholder="Celular" />

                <button className="btn btn-dark">Enviar</button>
            </form>
        </div>


    )
}

export default Contacto