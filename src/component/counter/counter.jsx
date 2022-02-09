import { useState } from "react"

const Counter = (props) => {
    const { valeurInitiale, increment } = props

    const [count, setCount] = useState(valeurInitiale)

    const handleIncrement = (e) => {
        setCount(previousValue => previousValue + increment)
    }

    const handleReset = (e) => {
        setCount(previousValue => 0)
    }

    return (
        <div>
            
            <p>La valeur du compteur est de {count}</p>
            <button onClick={handleIncrement}>+ {increment}</button>
            {
                count !== 0 && (
                    <button onClick={handleReset}>Reset</button>
                ) 
            }
            
        </div>
    )
}

Counter.defaultProps = {
    increment: 1
}

export default Counter