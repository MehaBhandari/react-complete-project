import  Axios from "axios";
import React from 'react';
export default class LifecycleComponentClass extends React.Component {
    constructor() {
        super();
        this.state = {
            data: 0
        }
        this.changeMiliseconds = this.changeMiliseconds.bind(this);
    }

    /* This function will now belong to Object and not class prototype,
    hence using more memory space... */
    changeTime = () => {
        let date = new Date();
        let time = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
        this.setState({...this.state, time: time});
    }

    changeMiliseconds() {
        let date = new Date();
        let miliseconds = date.getMilliseconds();
        this.setState({...this.state, miliseconds});
    }

    render() {
        return(
            <div>
                <h1>This is Lifecycle Component...</h1>
                <p>SBI Current Price: {this.state.data}</p>
                <p>Error is: {this.state.error}</p>
                <p>Time is: {this.state.time}</p>
                <p>Milisecond is: {this.state.miliseconds}</p>
                <button onClick={this.changeTime}>Check Time</button> 
                <button onClick={this.changeMiliseconds}>Updated Miliseconds</button>
            </div>
        );
    }

    componentDidMount() {
        console.log("This is componentDidMount()");
        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").then((response) => {
                this.setState({...this.state, data: response.data.data.pricecurrent});
                this.setState({...this.state, error: "This is new object key created"});
                }, (error) => {
                    console.log("Issue is: " + error);
                }
            );
        }, 1000);
    }

    shouldComponentUpdate(nextprops,nextstate) {
        if(this.state.time === nextstate.time) {
            return false;
        } else {
            return true;
        }
        console.log("This is shouldComponentUpdate()");
        
    }

    componentDidUpdate() {
        console.log("This is componentDidMount()");
    }
}