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
               <Titulo Title="RestauApp">   </Titulo>
               <Navigator>                  </Navigator>
                <div className="container-fluid">

                
                
                
                </div>              
            </div>
        )
    }
}

export default App