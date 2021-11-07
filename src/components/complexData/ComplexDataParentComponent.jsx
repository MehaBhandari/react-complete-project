import {ComplexDataChildComponent} from './ComplexDataChildComponent';
export default function ComplexDataParentComponent() {
    let complexEmployeeObj = {
        name: "Meha",
        designation: "Developer",
        address: {
            houseNo: 444,
            street: "Andhere street",
            district: "Rohini",
            state: "New Delhi"
        }
    }
    let companyReviewsObj = [{
        name: 'Ram', 
        review: "Good company"
    },{
        name: 'Sita', 
        review: "Great company"
    },{
        name: 'Raghav', 
        review: "Average company"
    },{
        name: 'Krishn', 
        review: "Beyond words company"
    }]

    let complexEmployeeObjString = JSON.stringify(complexEmployeeObj);
    let companyReviewsObjString = JSON.stringify(companyReviewsObj);
    
    function clickFunctionInParent() {
        complexEmployeeObj = {
            name: "Mayank",
            designation: "Developer",
            address: {
                houseNo: 444,
                street: "Andhere street",
                district: "Rohini",
                state: "New Delhi"
            }        
        }
        alert("Data Changed "+ complexEmployeeObj.name);
    }

    return(
        <div>
            <ComplexDataChildComponent clickFunctionInParent={clickFunctionInParent} complexEmployeeObjString={complexEmployeeObj} companyReviewsObjString={JSON.parse(companyReviewsObjString)}></ComplexDataChildComponent>            
        </div>
    );
}