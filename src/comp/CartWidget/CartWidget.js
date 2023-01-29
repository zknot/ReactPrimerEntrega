import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import './CartWidget.scss'

const CartWidget = () => {

    const { totalCantidad } = useCartContext()

    return (
        <Link to="/cart" className='cart-widget'>
        <FaCartPlus />
        <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget