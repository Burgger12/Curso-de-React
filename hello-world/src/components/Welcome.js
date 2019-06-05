import React from 'react'
import './Style/Welcome.css'
// si es estatico usar Function sino Class
const Welcome = ({username}) => (
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>Hello {username}!</h1>
            <p>Let´s workout to get someone gains!</p>
        </div>
    </div>
)

export default Welcome