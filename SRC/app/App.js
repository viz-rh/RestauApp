import React, {Component} from 'react'
import ReactDom, {render} from 'react-dom'
import task from '../models/task';
import Navigator from './components/usuario/navegacion/Navigator';
import Titulo from './components/usuario/navegacion/Titulo.js'
class App extends Component {
    constructor(){
        super();
        this.state = {
           
        }
       
    }

    render(){
        
        return(
            <div>
                {/* navegacion */}
               <Titulo Title="RestauApp"></Titulo>
                <div className="content">

                
                </div>
                <Navigator></Navigator>
               

              
            </div>
        )
    }
}

export default App