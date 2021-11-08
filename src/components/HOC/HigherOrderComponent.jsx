import { useState } from "react/cjs/react.development";

function higherOrderComponent(WrapperComponent) {
    return function() {
        let [empObj, setEmp] = useState({
            name: "Mayank",
            designation: "VP",
            company: "Black Rock",
            salary: 1000,
            increment: "10%"
        });
        return(
            <div>
                <h1>This is Employee Details</h1>
                <WrapperComponent {...empObj}></WrapperComponent>
            </div>
        );
    }
}

function ManagerFunctionalComponent(props) {
    return(
        <div>
            <h2>User Name: {props.name}</h2>
            <h2>User Designation: {props.designation}</h2>
        </div>
    );
}

function HRFunctionalComponent(props) {
    return(
        <div>
            <h2>User Name: {props.name}</h2>
            <h2>User Salary: {props.salary}</h2>
            <h2>User Increment: {props.increment}</h2>
        </div>
    );
}
export var ManagerWrappedComponent = higherOrderComponent(ManagerFunctionalComponent);
export var HRWrappedFunctionalComponent = higherOrderComponent(HRFunctionalComponent);
