// const element = document.createElement('h1')
// element.innerText = 'Hola ReactJs...'
// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// importamos nuentro component
import Card from './components/Card'

const container = document.getElementById('root')

// ReactDOM.render() recibe 2 parametros,  que y donde renderizar
ReactDOM.render(<Card />,container) 

// se pasa el componente como una etiqueta