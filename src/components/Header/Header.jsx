import React from 'react'

function Header() {

    const hola = 'Hola React'

    function saludo(){
        alert(hola)
    }

    return (
        <header>
            <input type="text"/>
            <button onClick={saludo}>AGREGAR</button>
            <h1>{hola}</h1>
        </header>
    )
}

export default Header
