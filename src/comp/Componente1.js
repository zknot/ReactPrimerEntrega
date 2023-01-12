

export const Componente1 = ( { titulo, text, tel } ) => { //desestructuracion

    // const { titulo, text, tel } = prop

    return (
        <div>
            <h2>{ titulo }</h2>
            <p>{ text }</p>
            <small> { tel } </small>
            <hr/>
        </div>

    )

}