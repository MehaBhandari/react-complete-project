import { useEffect, useState } from "react";
import Axios from "axios";

export function useAutoTimeHooks() {

    useEffect(() => {
        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").then((response) => {
                setSbi(response.data.data.pricecurrent);
            })
        }, 2000)
    }, []);

    let date = new Date();
    function getCurrentTime() {
        return date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    }
    let [time, setTime] = useState(getCurrentTime());
    let [sbi, setSbi] = useState(0);

    setTimeout(() => {
        setTime(getCurrentTime());
    }, 1000);
    
    return [time, sbi];
}


export default function CustomHooksComponent() {
    const [time, sbi] = useAutoTimeHooks();
    return(
        <div>
            <h1>Current Time {time}</h1>
            <h2>Price {sbi}</h2>
        </div>
    );
}