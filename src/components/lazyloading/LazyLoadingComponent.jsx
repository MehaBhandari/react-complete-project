import React, {lazy, Suspense} from "react";

export default function LazyLoadingComponent(props) {
    var ComponentToLoad = null;
    if(props.name === "Meha") {
        ComponentToLoad = lazy(() => import("./ChildComponentOne"));
    } else {
        ComponentToLoad = lazy(() => import("./ChildComponentTwo"));
    }

    return(
        <div>
            <h1>Lazy Loading Component</h1>
            <Suspense fallback={ <h3>Loading the component...</h3>}>
                <ComponentToLoad></ComponentToLoad>
            </Suspense>
        </div>
    );
}