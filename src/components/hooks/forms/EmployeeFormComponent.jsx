import { useState } from "react";

export default function EmployeeFormComponent() {
    let [empObj, setEmpObj] = useState({
        name: "Ram",
        designation: "Raja",
        location: "Bharat"
    });
    function valueChanged(event) {
        setEmpObj({...empObj, [event.target.dataset.property]: event.target.value});
    }
    return(
        <div>
            <span>Name: </span> <input type="text" data-property="name" value={empObj.name} onChange={valueChanged} placeholder="name" /> <br/> <br/>
            <span>Designation: </span> <input type="text" data-property="designation" value={empObj.designation} onChange={valueChanged} placeholder="designation" /> <br/> <br/>
            <span>Location: </span> <input type="text" data-property="location" value={empObj.location} onChange={valueChanged} placeholder="location" /> <br/> <br/>
        </div>
    );
}