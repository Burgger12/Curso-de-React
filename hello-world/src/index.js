// const element = document.createElement('h1')
// element.innerText = 'Hola ReactJs...'
// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firstName:'Agustin',
    lastName:'Diaz',
    avatar:'https://png2.kisspng.com/sh/196f63aff523aefb97c67e99c2babe9d/L0KzQYm3WcIxN6pngJH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TgBweqVmet5uLX7ohMj2kvsub6NmiNpyY4OwccfolPFzNZpoRadrYUPmRofsU8A3amI6RqICNUa1R4KAUcU0P2U6Uao7MkG8SIS1kP5o/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66e306b15.0756271715374598221983.png'
}
function getName(user){
    return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
    if(user){
       return <h1> Hello {getName(user)}</h1>
    }
    else{
        return <h1>Hello Stranger</h1>
    }
}

const element = (
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar} />
    </div>
)
const container = document.getElementById('root')

// ReactDOM.render() recibe 2 parametros,  que y donde renderizar
ReactDOM.render(element,container) 