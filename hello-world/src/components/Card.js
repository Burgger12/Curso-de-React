// crear component

import React from 'react'
// importamos la imagen / css
import exerciseImg from '../imagens/exercise.png'
import circleImg from '../imagens/circles.png'
import './Style/Card.css'
class Card extends React.Component{
    
    // constructor(props){
    //     super(props)
    //     this.state = { 
    //         image: ''
    //     }
    // }

    // // ciclo de vida
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //           image:''  
    //         })
    //     }, 5000)
    // }
    // necesitamos definir Render
    render(){
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${circleImg}), linear-gradient(to right,${this.props.leftColor} , ${this.props.rightColor})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.props.img} className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{this.props.title}</h1>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card