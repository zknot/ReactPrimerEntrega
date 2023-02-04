import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import './CartWidget.scss'

const CartWidget = () => {

    const { totalCantidad, cart } = useCartContext()

    return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : '' }`}>
        <FaCartPlus />
        <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget