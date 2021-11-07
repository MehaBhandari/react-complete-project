export default function UserInfoComponent(props) {
    let name = props.userData;
    name.name = "Ram";
    //props.location = "Mumbai";
    function getPropsValue() {
        alert(props.userData.name);
    }
    return (
        <div>
            <h4>Child Component</h4>
            <p>Name: {props.userData.name}</p>
            <p>Age: {props.userData.age}</p>
            <p>Designation: {props.userData.designation}</p>
            <p>Location: {props.location}</p>
            <button onClick={getPropsValue}>Child Button For Info</button> <br/> <br/>
            <p>Salary is: {props.salary}</p>
            <p>Increment is: {props.increment}</p>
            <p>Promotion: {props.promotion? 'Yes': 'No'}</p>
            <hr/><hr/>
        </div>
    );

}