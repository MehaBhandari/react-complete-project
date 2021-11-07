import {PropsChildOneComponent} from "./PropsChildOneComponent";
import {PropsChildTwoComponent} from "./PropsChildTwoComponent";
import {PropsChildThreeComponent} from "./PropsChildThreeComponent";
import {PropsChildFourComponent} from "./PropsChildFourComponent";
import {PropsChildFiveComponent} from "./PropsChildFiveComponent";

export default function PropsParentComponent() {
    let genere = "Fiction";
    let movieObj = {
        name: "Ek thi Dayan",
        rating: 9,
        actors: "Aandu & Pandu"
    }
    let jantaObj = {
        nationality: "Indian",
        region: "Bharat Khand",
        religion: "Bhartiya"
    }
    let reviewsObj = {
        name: "Ram",
        review: "Good movie"
    };

    return(
        <div>
            <h1>Here Comes the children: </h1>
            <PropsChildOneComponent genere={genere}></PropsChildOneComponent>
            <PropsChildTwoComponent isUARated="true"></PropsChildTwoComponent>
            <PropsChildThreeComponent movieObj={movieObj}></PropsChildThreeComponent> <br/> <br/>
            <PropsChildFourComponent jantaObj={{...jantaObj}}></PropsChildFourComponent>
            <PropsChildFiveComponent {...reviewsObj}></PropsChildFiveComponent>
        </div>
    )
}