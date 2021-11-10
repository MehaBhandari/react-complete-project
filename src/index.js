import ReactDOM from 'react-dom';
// import  Component  from './components/WelcomeComponent';
// import Component from './components/propsExample/PropsParentComponent';
// import Component from './components/complexData/ComplexDataParentComponent';
// import Component from './components/hooks/useState/ParenthookComponent';
// import Component from './components/hooks/useEffect/ParenthookComponent';
// import Component from './components/forms/EmployeeFormComponent';
// import Component from './components/hooks&Axios/customHooks&Axios/CustomHooksComponent';
// import {ManagerWrappedComponent,HRWrappedFunctionalComponent} from './components/HOC/HigherOrderComponent';
// import Component from "./components/classes/context/ContextAPIGrandParentComponent";
// import Component from './components/hooks&Axios/useContext/UseContextComponent';
// import Component from './components/classes/lifecycles/LifecycleComponent';
// import Component from './components/classes/pureComponent/PureComponent';
// import Component from './components/classes/lifecycles/errorHandling/ErrorHandlingComponentClass';
// import Component from './components/classes/lifecycles/errorHandling/ErrorHandlingParentChildComponent';
import Component from './components/lazyloading/LazyLoadingComponent';

ReactDOM.render(
    <div>
        {/* <ManagerWrappedComponent></ManagerWrappedComponent>
        <HRWrappedFunctionalComponent></HRWrappedFunctionalComponent> */}
        {/* <Component name="Meha"></Component> */}
        <Component></Component>
    </div>, 
    document.getElementById('main-container'));

// setInterval(() => {
//     ReactDOM.render(<Component></Component>, document.getElementById('main-container'))
// }, 1000)