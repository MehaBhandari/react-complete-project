import React from 'react';
export default class ErrorHandlingComponentClass extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            hasError: false
        }
        // this.updateName = this.updateName.bind(this);
    }

    updateName = (event) => {
        if(event.target.value.indexOf(" ") > -1) {
            alert("Please don't use spaces");
            // this.setState({...this.state, name: ""});
            throw new Error("Please don't use spaces...");
        } else {
            this.setState({...this.state, name: event.target.value});
        }
    }

    componentDidCatch(error, info) {
        console.log("Don't use spaces...");
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    render() {
        return (
            <div>
                {!this.state.hasError && (<div>
                    <h1>Following is Error Handling Scenario: </h1>
                    <h2>Enter your name below without spaces</h2>
                    <span>Enter Name: </span><input placeholder='Enter Name' value={this.state.name} onChange={this.updateName} />
                    <h3>Entered name is: {this.state.name}</h3>
                </div>)}
                {this.state.hasError && <h1>This is Error Page</h1>}
            </div>
        );
    }
}