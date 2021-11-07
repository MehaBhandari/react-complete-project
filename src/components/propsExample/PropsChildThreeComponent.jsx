export function PropsChildThreeComponent(props) {
    return(
        <div>
            <p>Name of Movie: {props.movieObj.name}</p>
            <p>Rating: {props.movieObj.rating}</p>
            <p>Actors: {props.movieObj.actors}</p>
        </div>
    );
}