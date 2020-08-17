import React, { Component, Fragment } from "react";
import './Team.css'
class Team extends Component {
    render() {
        return (
            <Fragment>

                <section className="sec5">
                    <div className="ot">
                        <h1>Contact US</h1>
                        <div className="khali3"></div>

                    </div>
                    <div className="form">
                   <div className="00">< input type="text" placeholder = "Name*" className="i1" / ></div> 
                   <div className="00" ><input type="text" placeholder = "Email*"  className="i2" /></div>
                  <div className="00" > <textarea placeholder="Message*" className="i3"></textarea></div>
                  </div>
                 <div className="c"> <button style={{height:"50px",width:"120px",borderRadius:"22px",backgroundColor:"blue",color:"white",borderColor:"blue", marginLeft:"22px",marginBottom:"10px"}} className="button"> > Contact Us</button></div>
                <hr className="h"></hr>
                <h5 className="h5">Copyright © By Millimeter</h5>
                </section>
            </Fragment>
        )
    }
}
export default Team;