import { FooterComponent } from './FooterComponent';
import UserInfoComponent  from './UserInfoComponent';

export default function WelcomeComponent() {
    let userData = {
        name: "Meha",
        age: 29,
        designation: "Developer",
        isboolean: false
    };
    let fruitsArr = ["Apple","Mango","Bnana","Orange"];
    function getUserInfo() {
        alert(userData.name);
    }
    let location = "Delhi";

    let salaryInfo = {
        salary: 1000,
        increment: "4%",
        designation: "Developer",
        promotion: false
    }

    return (
        <div>
            <h1>This is First React Component</h1>
            <h2>Current time is: {(new Date()).getHours()} : {(new Date()).getMinutes()} : {(new Date()).getSeconds()}</h2>
            <p>Here goes our data...</p> 
            <h4>Parent Component</h4>           
            <p>Name: {userData.name}</p>
            <p>Location: {location}</p>
            <button onClick={getUserInfo}>Parent Button For Info</button> <hr/><hr/>
            <UserInfoComponent userData={userData} {...salaryInfo} fruitsArr={fruitsArr} location={location} isVisible="true"></UserInfoComponent>            
            <FooterComponent></FooterComponent>
        </div>
    )
}