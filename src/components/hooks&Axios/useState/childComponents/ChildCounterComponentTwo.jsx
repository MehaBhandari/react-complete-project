export function ChildCounterComponentTwo(props) {
    return(
        <div>
            <h2>Updating Child2 Counter without click: </h2>
            <p>Counter is: {props.counter2}</p>
        </div>
    );
}