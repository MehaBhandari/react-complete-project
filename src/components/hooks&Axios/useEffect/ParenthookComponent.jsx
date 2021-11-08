import {ChildCounterUseEffectComponent} from "./childComponents/ChildCounterUseEffectComponent";
import {ChildCounterUseEffectComponentTwo} from "./childComponents/ChildCounterUseEffectComponentTwo";
import {ChildCounterUseEffectComponentThree} from "./childComponents/ChildCounterUseEffectComponentThree";
import {ChildCounterUseEffectComponentFour} from "./childComponents/ChildCounterUseEffectComponentFour";
export default function ParenthookComponent() {
    return(
        <div>
            {/* <h1>ChildCounterUseEffectComponentFour</h1>
            <ChildCounterUseEffectComponentFour></ChildCounterUseEffectComponentFour> */}
            {/* <h1>ChildCounterUseEffectComponentThree</h1>
            <ChildCounterUseEffectComponentThree></ChildCounterUseEffectComponentThree> */}
            <h1>ChildCounterUseEffectComponentTwo</h1>
            <ChildCounterUseEffectComponentTwo></ChildCounterUseEffectComponentTwo> <br/> <br/>
            {/* <h1>ChildCounterUseEffectComponent</h1>
            <ChildCounterUseEffectComponent></ChildCounterUseEffectComponent> */}
        </div>
    );
}