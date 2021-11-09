import React from 'react'
export default class PureComponentClass extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            counter: 0,
            names: ['Meha', 'Ram', 'Sita']
        }
    }    

    render() {
        return(
            <div>
                <h1>This is PureComponent</h1>
                <h2>Counter is: {this.state.counter}</h2>
                <h2>Names are</h2>
                {this.state.names.map((name)=>{
                    return (
                        <>
                            <p>{name}</p>
                        </>
                    )
                })}
            </div>
        );
    }

    componentDidMount() {
        setInterval(() => {
            // Following will be not reflected
            this.state.names.push('Kabir');
            this.setState({
                names: this.state.names
                // Following will change UI
                // names: [...this.state.names, 'Kabir']
            });
            // Following will change the UI
            // this.setState({...this.state, counter: this.state.counter+1});
        }, 1000);
    }
}