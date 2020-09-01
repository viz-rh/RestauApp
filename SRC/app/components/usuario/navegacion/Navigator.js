import React, {Component}  from 'react';
class Navigator extends Component {
    constructor(){
        super();
        this.state = {
           
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
    
        return (
            <nav 
                className="navbar navbar-expand-md fixed-bottom navbar-dark rounded-top text-white text-center viz-navegacion" 
                style={config_navbar}
            >
           
                    <div className="col-xs-3 border-right border-info v-left" style={config_ancho}>
                        <span className="fa fa-fire "></span>
                        <p className="text-center">platillos</p>
                        <p className="text-center">$245</p>   
                    </div>
                    <div className="col-xs-3 border-right border-info" style={config_ancho}>
                    <span className="fa fa-fire "></span>
                        <p className="text-center">platillos</p>
                        <p className="text-center">$245</p>   
                    </div>
                    <div className="col-xs-3 border-right border-info" style={config_ancho}>
                    <span className="fa fa-fire "></span>
                        <p className="text-center">platillos</p>
                        <p className="text-center">$245</p>   
                    </div>
                    <div className="col-xs-3              border-info v-right" style={config_ancho}>
                    <span className="fa fa-fire "></span>
                        <p className="text-center">platillos</p>
                        <p className="text-center">$245</p>   
                    </div>
             
            </nav>
        );
    }
}


  
  export default Navigator;

