import { useState, useEffect } from "react";

export function ChildCounterUseEffectComponent() {
    let [counter, setCounter] = useState(0);
    let [counter2, setCounter2] = useState(0);
    useEffect(() => {       
        setInterval(() => {
            setCounter2(counter2 => counter2+1);
        },1000);
    }, []);
    // useEffect(function() {       
    //     setInterval(function()  {
    //         setCounter2(function (counter2) { 
    //             return counter2+1;
    //         });
    //     },1000);
    // }, []);
    function updateCounter() {
        setCounter(counter+1);
    }
    return(
        <div>
            <h1>Below is the example of UseEffect Hooks: </h1>
            <p>useEffect Counter is: {counter2}</p>
            <p>useState Counter is: {counter}</p>
            <button onClick={updateCounter}>Click to update Counter</button>
        </div>
    );
}