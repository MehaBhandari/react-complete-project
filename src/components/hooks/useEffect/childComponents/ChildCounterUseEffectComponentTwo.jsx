import { useState, useEffect } from "react";

export function ChildCounterUseEffectComponentTwo() {
    let [counter, setCounter] = useState(0);
    let [counter2, setCounter2] = useState(0);

    useEffect(() => {       
        setInterval(() => {
            setCounter2(counter2 => counter2+1);
        },5000);

        setInterval(() => {
            setCounter(counter => counter+1);
        },10000);
    }, []);

    useEffect(() => {
        console.log("Counter is updated...");
    },[counter]);

    useEffect(() => {
        console.log("Counter2 is updated...");
    },[counter2]);

    useEffect(() => {
        console.log("Something is updated...");
    },[counter,counter2]);

    return(
        <div>
            <h1>Below is the example of UseEffect Hooks: </h1>
            <p>useEffect Counter After 5s is: {counter2}</p>
            <p>useState Counter After 10s is: {counter}</p>
        </div>
    );
}