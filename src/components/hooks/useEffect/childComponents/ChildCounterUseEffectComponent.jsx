import { useState } from "react";

export function ChildCounterUseEffectComponent() {
    let [counter, setCounter] = useState(0);
    function updateCounter() {
        setCounter(counter+1);
    }
    return(
        <div>
            <h1>Below is the example of UseEffect Hooks: </h1>
            <p>Counter is: {counter}</p>
            <button onClick={updateCounter}>Click to update Counter</button>
        </div>
    );
}