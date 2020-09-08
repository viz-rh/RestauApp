import React, {Component}  from 'react';
class Navigator extends Component {
    constructor(){
        super();
        this.state = {
           hidden_state : true
        }
       
    }

    render(){
        
        let config_navbar = {
            "backgroundColor"  : "#0e0e0e",
            "padding"          : "0px",
            
        }
        let config_ancho= {
            "width" : "25%"
        }
        let config_hidden={
           display: this.state.hidden_state ? "" : "none"
        }
        setTimeout(()=>{
            this.setState({
                hidden_state : false
            })
        }, 5000)
    
        return (
            <nav 
                className="navbar navbar-expand-md fixed-bottom navbar-dark rounded-top text-white text-center viz-navegacion" 
                style={config_navbar}
            >
           
                    <div className="col-xs-3 border-right border-info v-left" style={config_ancho}>
                        <span className="fa fa-feed "></span>
                        <p className="text-center" style={config_hidden}>platillos</p>
                        <p className="text-center">$245</p>   
                    </div>
                    <div className="col-xs-3 border-right border-info" style={config_ancho}>
                    <span className="fa fa-glass "></span>
                        <p className="text-center" style={config_hidden}>bebidas</p>
                        <p className="text-center">$245</p>   
                    </div>
                    <div className="col-xs-3 border-right border-info" style={config_ancho}>
                    <span className="fa fa-birthday-cake "></span>
                        <p className="text-center" style={config_hidden}>Postre</p>
                        <p className="text-center">$245</p>   
                    </div>
                    <div className="col-xs-3              border-info v-right" style={config_ancho}>
                    <span className="fa fa-check "></span>
                        <p className="text-center" style={config_hidden}>mi orden</p>
                        <p className="text-center">$245</p>   
                    </div>
             
            </nav>
        );
    }
}


  
  export default Navigator;

