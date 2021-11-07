export function PropsChildFourComponent(props) {
    return(
        <div>
            <p>Nationality: {props.jantaObj.nationality}</p>
            <p>Region: {props.jantaObj.region}</p>
            <p>Religion: {props.jantaObj.religion}</p>
        </div>
    );
}