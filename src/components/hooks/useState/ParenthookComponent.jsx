import { useState } from "react";
import {ChildCounterComponentOne} from "./childComponents/ChildCounterComponentOne";
import {ChildCounterComponentTwo} from "./childComponents/ChildCounterComponentTwo";
import {ChildObjUpdate} from "./childComponents/ChildObjUpdate";
import "./ParenthookComponent.css";

export default function ParentHookComponent() {
    let stylingObj = {
        dummyClass: "demo-class"
    }
    
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
        <div style={{"paddimg": "5px", "margin": "5px"}}>
            <h1>Following is the example of Hooks: </h1>
            <ChildCounterComponentOne stylingObj={stylingObj} counter={counter1} setCounter={setCounter1}></ChildCounterComponentOne>
            <br/><hr/><hr/>
            <ChildCounterComponentTwo counter2={counter2}></ChildCounterComponentTwo>            
            <br/><hr/><hr/>
            <ChildObjUpdate changeEmpData={changeEmpData} empData={empData}></ChildObjUpdate>
        </div>
    );
}