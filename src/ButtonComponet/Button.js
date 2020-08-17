import React,{  Component,Fragment } from "react";
class Button extends Component{
    render(){
        return(   
            <Fragment>
                <button style={{height:"40px",width:"100px",borderRadius:"22px",backgroundColor:"black",color:"white",borderColor:"blue", marginLeft:"22px",marginBottom:"10px"}}>English</button>
            </Fragment>
        )
    }
  }
  export default Button;