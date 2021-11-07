export function ChildObjUpdate(props) {
    return(
        <div>
            <h2>Update Employee Object info: </h2>
            <p>Name: {props.empData.name}</p>
            <p>Designation: {props.empData.designation}</p>
            <p>Location: {props.empData.location}</p>
            <button onClick={()=>{props.changeEmpData("name", "Mayank")}}>Click To update Name</button>
            <button onClick={()=>{props.changeEmpData("designation", "VP")}}>Click To update designation</button>
            <button onClick={()=>{props.changeEmpData("location", "Noida")}}>Click To update location</button>
        </div>
    );
}