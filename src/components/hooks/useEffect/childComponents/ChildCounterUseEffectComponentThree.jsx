import { useState, useEffect } from "react";

export function ChildCounterUseEffectComponentThree() {
    let [counter, setCounter] = useState(0);
    let [counter2, setCounter2] = useState(0);
    let interval1,interval2;

    useEffect(() => {       
        interval1 = setInterval(() => {
            setCounter2(counter2 => counter2+1);
        },1000);

        interval2 = setInterval(() => {
            setCounter(counter => counter+1);
        },1000);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    });

    return(
        <div>
            <h1>Below is the example of UseEffect Hooks: </h1>
            <p>useEffect Counter After 1s is: {counter2}</p>
            <p>useState Counter After 1s is: {counter}</p>
        </div>
    );
}