import React, { Component } from "react";
import EmployeeData from "../EmployeeData/index"
import API from "../../utils/API";

class Main extends Component {

    state = {
        result: {},
        search: "",
        image: ""
    };

    componentDidMount() {
        this.getEmployeeData();
    };

    getEmployeeData = () => {
        API.getRandos()
            .then(res =>
                this.setState({
                    image: res.picture.thumbnail
                })
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
                        <tr border="1">
                            <td>Image will go here</td>
                            <td>Rusty Shackleford</td>
                            <td>777-777-7777</td>
                            <td>mockingbird@hotmail.com</td>
                            <td>10/16/1957</td>
                        </tr>
                        <tr border="1"></tr>
                            <td>
                                <img src={this.state.image}></img>
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