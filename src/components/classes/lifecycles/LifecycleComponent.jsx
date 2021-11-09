import React from 'react';
export default class LifecycleComponent extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log("This is componentDidMount()");
    }
    render() {
        return(
            <div>
                <h1>This is Lifecycle Component...</h1>
            </div>
        );
    }
}