import React, { Component, Fragment } from "react";
import ReactDOM from 'react-dom'
import './index.css'
import logo from "./MillimeterLogoPNG.png";
import Button from "./ButtonComponet/Button";
import Mission from "./MissionComponet/Mission";
import Team from "./TeamComponent/Team";
import Staff from"./Mstaff-component/Staff";

class App extends Component {
    render() {
        return (
            <Fragment> <div className="Header">

                <div className="H-img">
                    <img src={logo} ></img>
                </div>
                <div className="T-b" >

                    <p>  AboutUS    AboutMillmeter    Technologies    Team    ContactUs    <Button className="btn"></Button> </p>

                </div>

            </div>

                <Mission></Mission>
                <Team></Team>
                <Staff></Staff>



            </Fragment>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))