import { useState } from "react";
import {ChildCounterComponentOne} from "./useState/ChildCounterComponentOne";
import {ChildCounterComponentTwo} from "./useState/ChildCounterComponentTwo";
import {ChildObjUpdate} from "./useState/ChildObjUpdate";

export default function ParentHookComponent() {
    let [counter1, setCounter1] = useState(0);
    let [counter2, setCounter2] = useState(0);
    let [empData, setEmpData] = useState({
                                    name: "Meha",
                                    designation: "Developer",
                                    location: "Delhi"
                                });
    function changeEmpData(key, value) {
        setEmpData({...empData, [key]: value});
        alert( key+ " is changed...");
    }
    setTimeout(()=>{
        return setCounter2(counter2+1);
    },1000);
    
    return(
        <div>
            <h1>Following is the example of Hooks: </h1>
            <ChildCounterComponentOne counter={counter1} setCounter={setCounter1}></ChildCounterComponentOne>
            <br/><hr/><hr/>
            <ChildCounterComponentTwo counter2={counter2}></ChildCounterComponentTwo>            
            <br/><hr/><hr/>
            <ChildObjUpdate changeEmpData={changeEmpData} empData={empData}></ChildObjUpdate>
        </div>
    );
}