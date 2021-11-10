import { BrowserRouter, Route, Link } from "react-router-dom";

import {AboutComponent} from "./AboutComponent";
import {HelpComponent} from "./HelpComponent";
import {HomeComponent} from "./HomeComponent";

export default function ParentRouterComponent() {
    return(
        <> <h1>This is the Parent Page...</h1> 
            <BrowserRouter>
                <div>            
                    <div>
                        <Link style={{paddingRight: "10px"}} to="/">Home</Link>
                        <Link style={{paddingRight: "10px"}} to="/about">About</Link>
                        <Link style={{paddingRight: "10px"}} to="/help">Help</Link>
                    </div>
                    <Route exact path="/" component={HomeComponent}></Route>
                    <Route path="/about" component={AboutComponent}></Route>
                    <Route path="/help" component={HelpComponent}></Route>        
                </div>   
            </BrowserRouter>
        </>
    );
}