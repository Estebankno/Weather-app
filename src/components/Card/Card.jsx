import React from 'react'
import data from '../../data'

const Card = () => {

    console.log(data)

    return (
        <div>
            <button>X</button>
            <h2>{data[0].name}</h2>
            <ul>
                <li>Min: {data[0].main.temp_min}</li>
                <li>Max: {data[0].main.temp_max}</li>
            </ul>
        </div>
    )
}

export default Card
