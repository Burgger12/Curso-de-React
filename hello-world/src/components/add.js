import React from 'react'
import './Style/addButton.css'
import buttomImg from '../imagens/add.png'
import { Link } from 'react-router-dom'

const AddButton = () => (
    <Link to="/exercise/new">
        <img src={buttomImg} className="Fitness-Add"/>
    </Link>
)

export default AddButton