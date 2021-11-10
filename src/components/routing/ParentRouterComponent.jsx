import { BrowserRouter, Route, Link } from "react-router-dom";

import {AboutComponent} from "./AboutComponent";
import {HelpComponent} from "./HelpComponent";
import {HomeComponent} from "./HomeComponent";

export default function ParentRouterComponent() {
    let aboutArray = [
        {
            name: "About1",
            value: 1
        },
        {
            name: "About2",
            value: 2
        },
        {
            name: "About3",
            value: 3
        }
    ]
    return(
        < div style={{paddingLeft: "20px"}} > <h1>This is the Parent Page...</h1> 
            <BrowserRouter>
                <div>            
                    <div>
                        <Link style={{paddingRight: "10px"}} to="/">Home</Link>
                        
                        <Link style={{paddingRight: "10px"}} to="/about/1">About1</Link>
                        <Link style={{paddingRight: "10px"}} to="/about/2">About2</Link>
                        <Link style={{paddingRight: "10px"}} to="/about/3">About3</Link>
                        <Link style={{paddingRight: "10px"}} to="/help">Help</Link>
                    </div>
                    <Route exact path="/" component={HomeComponent}></Route>
                    <Route exact path="/about/:id" component={AboutComponent}></Route>
                    <Route exact path="/help" component={HelpComponent}></Route>        
                </div>   
            </BrowserRouter>
        </div>
    );
}