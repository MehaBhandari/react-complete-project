import React from "react";
const FamilyContext = React.createContext({});
const FamilyProvider = FamilyContext.Provider;
const FamilyConsumer = FamilyContext.Consumer;

export default class ContextAPIGrandParentComponentClass extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Meha",
            designation: "Developer"
        };
    }
    render() {
        return(
            <FamilyProvider value={this.state}>
                <h1>Welcome to class component's "Context"</h1>
                <Parents/>

            </FamilyProvider>
        )
    }
}

class Parents extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }
    }
    render() {
        return(
            <div>
                <h2>This is Parent {this.state.name}</h2>
                <Children/>
            </div>
        );
    }
}
// function Parents() {
//     return(
//             <div>
//                 <h2>This is Parent</h2>
//                 <Children/>
//             </div>
//         );
// }
function Children() {
    return(
        <FamilyConsumer>
            
            {(context) => {
                return(
                    <div>     
                        <h2>This is Child</h2>                   
                        <p>Name is: {context.name}</p>
                    </div>
                );
            }}
            
        </FamilyConsumer>
    );
}