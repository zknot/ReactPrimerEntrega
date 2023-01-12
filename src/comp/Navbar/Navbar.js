import "./Navbar.css"
import CartWidget from "../CartWidget"
import Counter from "../Counter"
import { Link } from "react-router-dom"


export const Navbar = () => {

    return(
        <header className="header">
            <div className="header__container">
            <h1 className="header__logo">OH SHIRTZ!</h1>
            <nav className="nav_bar">
                <Link className ="header__link" to="/">Home</Link>
                <Link className ="header__link" to="/nosotros">Nosotros</Link>
                <Link className ="header__link" to="/productos">Productos</Link>
                <Link className ="header__link" to="/contacto">Contacto</Link>
                <CartWidget />
                <Counter />
            </nav>
            </div>
        </header>
    )

}