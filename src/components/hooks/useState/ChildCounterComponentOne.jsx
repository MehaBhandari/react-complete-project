export function ChildCounterComponentOne(props) {
    function updateCounterOnClick() {
        props.setCounter(props.counter+1);
        alert("Counter updated");
    }
    return (
        <div>
            <h2>Updating Child1 Counter on click: </h2>
            <p>Counter is: {props.counter}</p>
            <button onClick={updateCounterOnClick}>Click Me To Update Counter</button>
        </div>
    );
}