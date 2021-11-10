export function AboutComponent(props) {
    return(
        <div>
            <h2>This is About Component...</h2>
            <p>{props.match.params.name}: {props.match.params.id}</p>
        </div>
    );
}