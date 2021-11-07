import { useState } from "react";
import {ChildCounterComponentOne} from "./useState/ChildCounterComponentOne";

export default function ParentHookComponent() {
    let [counter, setCounter] = useState(0);
    return(
        <div>
            <h1>Following is the example of Hooks: </h1>
            <ChildCounterComponentOne counter={counter} setCounter={setCounter}></ChildCounterComponentOne>
        </div>
    );
}