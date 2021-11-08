import ReactDOM from 'react-dom';
// import  Component  from './components/WelcomeComponent';
// import Component from './components/propsExample/PropsParentComponent';
// import Component from './components/complexData/ComplexDataParentComponent';
// import Component from './components/hooks/useState/ParenthookComponent';
// import Component from './components/hooks/useEffect/ParenthookComponent';
// import Component from './components/forms/EmployeeFormComponent';
// import Component from './components/hooks&Axios/customHooks&Axios/CustomHooksComponent';
import {ManagerWrappedComponent,HRWrappedFunctionalComponent} from './components/HOC/HigherOrderComponent';

ReactDOM.render(
    <div>
        <ManagerWrappedComponent></ManagerWrappedComponent>
        <HRWrappedFunctionalComponent></HRWrappedFunctionalComponent>
    </div>, 
    document.getElementById('main-container'));

// setInterval(() => {
//     ReactDOM.render(<Component></Component>, document.getElementById('main-container'))
// }, 1000)