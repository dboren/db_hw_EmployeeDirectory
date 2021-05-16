import React from "react";

function EmployeeData(props) {
    console.log("props: ", props)
    return (
        <div>
            {props.results.map(result => (
            <tr border="1">
                <td><img alt="employee" src={result.picture.medium}></img></td>
                <td>{result.name.first} {result.name.last}</td>
                <td>{result.phone}</td>
                <td>{result.email}</td>
                <td>{result.dob}</td>
            </tr>
            ))}
         </div>
    );
    }

export default EmployeeData;