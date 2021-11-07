export function ComplexDataChildComponent(props) {
    const reviewList = props.companyReviewsObjString.map((reviewObj)=>{ 
        return(
            <li>
                <span>{reviewObj.name}</span> 
                <div>{reviewObj.review}</div>
            </li>
        );
    });
    return(
        <div>
            <h1>Complex Data Example: </h1>
            <h2>Employee Details: </h2>
            <p>Name: {props.complexEmployeeObjString.name}</p>
            <p>Designation: {props.complexEmployeeObjString.designation}</p>
            <p>Address: {props.complexEmployeeObjString.address.houseNo}, {props.complexEmployeeObjString.address.street}, {props.complexEmployeeObjString.address.district}, {props.complexEmployeeObjString.address.state}</p>
            <br/><hr/><hr/>
            <button onClick={props.clickFunctionInParent}>I'm Child Button</button>
            <br/><hr/><hr/>
            <h2>Employee Reviews: </h2>
            {reviewList}
            <hr/>
            
        </div>
    );
}