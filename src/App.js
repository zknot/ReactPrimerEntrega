import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './comp/Context/CartContext';
import { LoginProvider } from './comp/Context/LoginContext';
import AppRouter from './router/AppRouter'

function App() {
  return (

    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>
   
  );
}


export default App;
