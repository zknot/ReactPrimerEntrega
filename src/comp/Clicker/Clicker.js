import { useState } from "react"

const Clicker = () => {

    let [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        setCounter(counter - 1)
    }

    return (
        <div className= "container my-5">
            
            <section>
            <button className = "btn btn-outline-primary" onClick= {restar} >-</button>
            <p className="contador"> {counter} </p>
            <button className = "btn btn-primary" onClick= {sumar} >+</button>
            </section>

        </div>
    )

}

export default Clicker