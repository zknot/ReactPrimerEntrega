import { Link } from "react-router-dom";
import './Nosotros.scss'


const Nosotros = () =>{

    return (
        <div className="container my-5">
            <h2>Nosotros</h2>
            <img src="https://res.cloudinary.com/dyetlrz2w/image/upload/v1675947157/OhShirtz/Combo-Sublimadora-e-Impresora_mcrv4m.png" alt="maquina sublimadora" ></img>

            <p>- Desde el 2011 somos una Empresa Argentina dedicada a la Fabricación de prendas Ultra Premium.
- Nos especializamos en la confección de indumentaria de algodón y frisa.
- Contamos con stock permanente todo el año.
- Ventas por mayor y por menor.
<br/>
Fabricacion de Remeras para Mujeres, Hombres y Niños.
En Jersey 100% algodón peinado 24/1.
<br/>
Remeras Clásicas y entalladas.
Remeras corte amplio.
Camisetas manga larga.
Musculosas y sudaderas.
Remeras manga ranglan.
Remeras oversize y minisize.
Contamos Con Servicio De Estampado Para Las Ventas Mayoristas:
<br/>
Serigrafia al agua.
Dtg (impresión digital full color).
Vinilo termotransferible.
Bordado.
Confeccionamos Buzos de Mujer y Hombre.
Frisa invisible 50% algodón / 50% poliéster.
<br/>
Pago y Envío:

Enviamos a todo el pais a domicilio o sucursal de destino, a través encomienda o correo.
También es posible enviar por moto si la distancia lo permite, en este caso se cotizar con dirección exacta.
Los medios de pago son:
Efectivo
Transferencia/Deposito bancario
Mercado pago</p>
            <hr/>
            <Link className="btn btn-danger" to={'/'} >Volver</Link>
        </div>
    )
}

export default Nosotros