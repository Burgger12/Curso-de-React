// const element = document.createElement('h1')
// element.innerText = 'Hola ReactJs...'
// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'


const container = document.getElementById('root')


// ReactDOM.render() recibe 2 parametros,  que y donde renderizar
ReactDOM.render(<App />,container) 

// se pasa el componente como una etiqueta