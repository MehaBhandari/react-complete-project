import { useState, useEffect } from "react";

export function ChildCounterUseEffectComponentFour() {
    let [counter, setCounter] = useState(0);
    let interval1;

    useEffect(() => {       
        setInterval(() => {
            setCounter(counter => counter+1);
        },1000);

        return () => {
            console.log("Component Destroyed....")
        }
    },[]);

    function displayConditon() {
        if(counter % 2 == 0) {
            return (
                <div>
                    <h1>Below is the example of UseEffect Hooks: </h1>
                    <p>useState Counter After 1s is: {counter}</p>
                </div>
            )
        } else {
            return (
                <section>
                    <h1>Below is the example of UseEffect Hooks: </h1>
                    <p>useState Counter After 1s is: {counter}</p>
                </section>
            )
        }
    }

    return displayConditon();
}