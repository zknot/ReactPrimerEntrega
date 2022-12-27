import "./Navbar.css"
import CartWidget from "../CartWidget"
import Counter from "../Counter"



export const Navbar = () => {

    return(
        <header className="header">
            <div className="header__container">
            <h1 className="header__logo">OVER SHIRTS</h1>

            <nav className="header__nav">
                <a className ="header__link" href="#">Home</a>
                <a className ="header__link" href="#">Nosotros</a>
                <a className ="header__link" href="#">Productos</a>
                <a className ="header__link" href="#">Contacto</a>
                <CartWidget />
                <Counter />
            </nav>
            </div>
        </header>
    )

}