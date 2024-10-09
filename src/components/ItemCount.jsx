import { useState } from 'react'

const ItemCount = ({ stock }) => {
    const [numero, setNumero] = useState(0)
    return (

        <div>

            <div>
                <button onClick={() => {
                    setNumero(numero + 1)
                    if (numero >= stock) {
                        setNumero(numero)
                    }
                }} className="btn btn-primary">Agregar <span className="badge text-bg-secondary">{numero}</span></button>
            
                <button onClick={() => {
                    setNumero(numero - 1)
                    if (numero <= 0) {
                        setNumero(numero)
                    }
                }} className="btn btn-danger">Eliminar</button>
                <button onClick={() => setNumero(0)} className="btn btn-warning">Resetear</button>
            </div>
        </div>
    )
}

export default ItemCount
