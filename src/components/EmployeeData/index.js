import React from "react";

function EmployeeData(props) {
    console.log("props: ", props)
    return (
        <div>
            <img alt="employee" src={props.results.picture.thumbnail}></img>
            <p>{props.results.name.first} {props.results.name.last}</p>
            <p>{props.results.phone}</p>
            <p>{props.results.email}</p>
            <p>{props.results.dod}</p>
         </div>
    );
    }

export default EmployeeData;