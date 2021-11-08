var HigherOrderComponent = function(WrappedComponent) {
    var empObj = {
        name: "Mayank",
        designation: "VP",
        company: "Black Rock",
        salary: 1000,
        increment: "10%"
    };
    return(
        <div>
            <WrappedComponent></WrappedComponent>
        </div>
    );
}