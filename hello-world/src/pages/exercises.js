import React from 'react'
// importamos nuentro component
import ExerciseList from '../components/exercisesList'
import Welcome from '../components/Welcome'
import AddButtom from '../components/add'
import Loading from '../components/Loading'
import FatalError from './500'

// el nombre del componente siempre debe comenzar con mayusculas
class Exercises extends React.Component{
    state = {
        data:[],
        loading: true,
        err:null
    }
    
    async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        try{
            let res = await fetch('http://localhost:8000/api/exercises')
            let data =  await res.json()
    
            this.setState({
                data,
                loading:false
            })
        }catch(err){
            this.setState({
                loading:false, 
                err
            })
        }

    }

    render(){
        if(this.state.loading)
            return <Loading />

        if(this.state.err)
            return <FatalError />
        return ( <div>
                    <Welcome 
                         username="Agustin"
                    />
                    
                    <ExerciseList
                        exercises={
                            this.state.data
                        }
                    />
                    <AddButtom />
                  </div>
                )
    }

}

export default Exercises