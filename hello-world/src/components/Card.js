// crear component

import React from 'react'
// importamos la imagen / css
import exerciseImg from '../imagens/exercise.png'
import './Style/Card.css'
class Card extends React.Component{
    // necesitamos definir Render
    render(){
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={exerciseImg} className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Technique Guides</h1>
                            <p>Learn amazing street workout and calisthenics</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card