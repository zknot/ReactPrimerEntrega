import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import { useLoginContext } from "../Context/LoginContext"


export const Navbar = () => {

    const { user, logout } = useLoginContext()

    return(
        <header className="header">
            <div className="header__container">
            <h1 className="header__logo">OH SHIRTZ!</h1>
            <nav className="nav_bar">
                <Link className ="header__link" to="/">Home</Link>
                <Link className ="header__link" to="/nosotros">Nosotros</Link>
                <Link className ="header__link" to="/productos/dc">DC</Link>
                <Link className ="header__link" to="/productos/gaming">Gaming</Link>
                <Link className ="header__link" to="/productos/funny">Funny</Link>
                <Link className ="header__link" to="/productos/peliculas">Peliculas</Link>
                <Link className ="header__link" to="/productos/dibujos">Dibujos</Link>
                <Link className ="header__link" to="/productos/bermuda">Bermudas</Link>
                <Link className ="header__link" to="/contacto">Contacto</Link>
                <CartWidget />
            </nav>
            </div>
            <div className="header__container" >
            <p>Bienvenido: {user.email} </p>
            <button className="btn btn-outline-danger" onClick={logout} >Cerrar Sesión</button>
            </div>
        </header>
    )

}