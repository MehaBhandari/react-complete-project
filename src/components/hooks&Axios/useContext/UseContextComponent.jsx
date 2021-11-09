import React, { useContext } from "react";
var familyContext = React.createContext();

export default function UseContextComponent() {
    const familyObj = {
        name: "Suryavanshi",
        generation: 5000,
        number: 100
    };
    return(
        <familyContext.Provider value={familyObj}>
            <h1>UseContext Hooks Top Component...</h1>
            <GrandParentComponent/>
        </familyContext.Provider>
    );
}
function GrandParentComponent() {
    return(
        <div>
            <h2>GrandParent Component</h2>
            <ParentComponent/>
        </div>
    );
}
function ParentComponent() {
    return(
        <div>
            <h2>Parent Component</h2>
            <ChildrenComponent/>
        </div>
    );
}
function ChildrenComponent() {
    let contextData = useContext(familyContext);
    return(
        <div>
            <h2>Children Component</h2>
            <p>Name of Vansh: {contextData.name}</p>
            <p>Current Generation of Vansh: {contextData.generation}</p>
            <p>Number of members in current Generation: {contextData.number}</p>
        </div>
    );
}