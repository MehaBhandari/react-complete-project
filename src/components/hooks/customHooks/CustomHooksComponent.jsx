import { useState } from "react";

function useAutoTimeHooks() {
    let date = new Date();
    function getCurrentTime() {
        return date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    }
    let [time, setTime] = useState(getCurrentTime());

    setTimeout(() => {
        setTime(getCurrentTime());
    }, 1000);
    
    return [time];
}


export default function CustomHooksComponent() {
    const [time] = useAutoTimeHooks();
    return(
        <div>
            <h1>Current Time {time}</h1>
        </div>
    );
}