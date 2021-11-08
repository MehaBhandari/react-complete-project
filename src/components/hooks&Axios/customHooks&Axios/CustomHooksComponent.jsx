import { useEffect, useState } from "react";
import Axios from "axios";

export function useAutoTimeHooks() {
    let [data, setData] = useState(0);
    useEffect(() => {
        debugger;
        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").then((response) => {
                setSbi(response.data.data.pricecurrent);
            })
        }, 2000)
    }, []);

    useEffect(() => {
        Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").then((response) => {
           setData(response.data.data.pricecurrent);
        });
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
    
    return [time, sbi, data];
}


export default function CustomHooksComponent() {
    debugger;
    const [time, sbi, data] = useAutoTimeHooks();
    return(
        <div>
            <h1>Current Time {time}</h1>
            <h2>Price {sbi}</h2>
            <h3>{data}</h3>
        </div>
    );
}