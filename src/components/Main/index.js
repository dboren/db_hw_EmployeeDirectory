import React from "react";

function Main() {
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone number</th>
                        <th scope="col">email address</th>
                        <th scope="col">DOB</th>
                    </tr>
                    <tr>
                        <td>Image will go here</td>
                        <td>Rusty Shackleford</td>
                        <td>777-777-7777</td>
                        <td>mockingbird@hotmail.com</td>
                        <td>10/16/1957</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Main;