import "./Navbar.scss"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import { useLoginContext } from "../Context/LoginContext"
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Navbar = () => {

    const { user, logout } = useLoginContext()

    return(
        <header className="header">
            <div className="header__container">
            <img src="https://res.cloudinary.com/dyetlrz2w/image/upload/v1675546436/OhShirtz/shirtzlogo_vw1mnt.jpg" alt="ImagenLogo"></img>
            <h1 className="header__logo">OH SHIRTZ!</h1>
            <nav className="nav_bar">
                <Link className ="header__link" to="/">Home</Link>
                <Link className ="header__link" to="/nosotros">Nosotros</Link>
                <NavDropdown className="header__link  tittle__menu" title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                        <Link className ="sub__link" to="/productos">Todos</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        <Link className ="sub__link" to="/productos/dc">DC</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                        <Link className ="sub__link" to="/productos/gaming">Gaming</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        <Link className ="sub__link" to="/productos/funny">Funny</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">
                        <Link className ="sub__link" to="/productos/peliculas">Peliculas</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.6">
                        <Link className ="sub__link" to="/productos/dibujos">Dibujos</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.7">
                        <Link className ="sub__link" to="/productos/bermuda">Bermudas</Link>
                    </NavDropdown.Item>
                 </NavDropdown>
                <Link className ="header__link" to="/contacto">Contacto</Link>
                <CartWidget />
            </nav>
            </div>
            <div className="user__container">
            <p>Bienvenido: {user.email} </p>
            <button className="btn btn-outline-danger" onClick={logout} >Cerrar Sesión</button>
            </div>
        </header>
    )

}