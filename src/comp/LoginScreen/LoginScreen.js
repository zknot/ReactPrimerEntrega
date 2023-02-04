import './LoginScreen.scss'
import { useState } from 'react'
import { useLoginContext } from '../Context/LoginContext'
import { Link } from 'react-router-dom'


const LoginScreen = () => {
    const { login, user, loading, googleLogin } = useLoginContext()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values);
    }
    return(
        <div className='login-screen' >
            <div className='login' >
            <img  className='img-login' src='https://res.cloudinary.com/dyetlrz2w/image/upload/v1675546436/OhShirtz/shirtzlogo_vw1mnt.jpg' alt="Shirtz Logo" width="100" height="100" />
                <h2 className='h2-login'>Bienvenido a Oh Shirtz!<br/>
                Registrate para comenzar.
                </h2>
                <hr/>

                <form className="" onSubmit={handleSubmit}>
                    <input className="form-control my-2" type='email' value={values.email} onChange={handleInputChange} name='email'/>
                    <input className="password form-control my-2" type="password" value={values.password} onChange={handleInputChange} name='password'/>
                    <br/>
                    <button className="btn btn-dark my-2" disabled={loading}>{loading ? 'Cargando...' : 'Ingresar' }</button>
                    { user.error && <p className='error' >{user.error}</p> }
                </form>
                <button className="btn btn-success my-2" onClick={googleLogin}>Ingresar con Google</button>
                <br/>
                <Link className='register-link' to="/auth">Registrate aca!</Link>
            </div>
        </div>
    )
}

export default LoginScreen