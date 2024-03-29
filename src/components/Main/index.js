import React, { Component } from "react";
import EmployeeData from "../EmployeeData/index"
import API from "../../utils/API";

class Main extends Component {

    state = {
        results: [],
        search: "",
    };

    componentDidMount() {
        this.getEmployeeData();
        console.log("EmployeeData: ", EmployeeData)
    };

    getEmployeeData = () => {
        API.getRandos()
            .then(res => {
                console.log('res', res);
            
                this.setState({
                    results: res.data
                    // image: res.data.results.picture.medium
                }).then(console.log("res:", res))
            } 
            )
            .catch(err => console.log(err));
    };

    
    
    render() {

        return (
            <div>
                <table border="1">
                    <thead>
                        <tr border="1">
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">email address</th>
                            <th scope="col">DOB</th>
                        </tr>
                        {/* <EmployeeData results={this.state.results} /> */}
                        <tr border="1">
                            <td>Image will go here</td>
                            <td>Rusty Shackleford</td>
                            <td>777-777-7777</td>
                            <td>mockingbird@hotmail.com</td>
                            <td>10/16/1957</td>
                        </tr>
                        <tr border="1"></tr>
                            <td>
                                <img src={this.state.results} alt="random employee"></img>
                            </td>
                        <tr border="1"></tr>
                        <tr border="1"></tr>
                        <tr border="1"></tr>
                        <tr border="1"></tr>
                        <tr border="1"></tr>
                        <tr border="1"></tr>
                        <tr border="1"></tr>
                        <tr border="1"></tr>
                    </thead>
                </table>
            </div>
            
        )}
}

export default Main;