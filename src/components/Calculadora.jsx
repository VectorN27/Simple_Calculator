import React from 'react'
import {useState} from 'react'
import  './Calculadora.css'

const Calculadora = () => {

const [value,setValue] = useState('')

const efectuar = (e) => {
    setValue(value + e.target.value)
}
const eliminar = (e) => {
    setValue(value.slice(0, -1))
}
const eliminarTodo = (data) => {
    setValue('')
}

const resultado = () => {
    setValue(eval(value))
}

    return(
        <>
        <div className="container">
            <form action="" >
                <div className="calculator">
                    <div className="screen">
                     <input type="text" value={value}/>
                    </div>
                <div>
                    <input type="button" value="AC" onClick={eliminarTodo} />
                    <input type="button" value="DE"onClick={eliminar}/>
                    <input type="button" value="." onClick={efectuar}/>
                    <input type="button" value="/" onClick={efectuar}/>
                </div>
                <div>
                    <input type="button" value="7" onClick={efectuar}/>
                    <input type="button" value="8" onClick={efectuar}/>
                    <input type="button" value="9" onClick={efectuar}/>
                    <input type="button" value="*" onClick={efectuar}/>
                </div>
                <div>
                    <input type="button" value="4" onClick={efectuar}/>
                    <input type="button" value="5" onClick={efectuar}/>
                    <input type="button" value="6" onClick={efectuar}/>
                    <input type="button" value="+" onClick={efectuar}/>
                </div>
                <div>
                    <input type="button" value="3" onClick={efectuar}/>
                    <input type="button" value="2" onClick={efectuar}/>
                    <input type="button" value="1" onClick={efectuar}/>
                    <input type="button" value="-" onClick={efectuar}/>
                </div>
                    <input type="button" value="00" onClick={efectuar}/>
                    <input type="button" value="0" onClick={efectuar}/>
                    <input type="button" value="=" className="igual" onClick={resultado}/>
                    </div>
            </form>
            </div>
        </>
    )
}

export default Calculadora;