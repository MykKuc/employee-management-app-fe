import React from "react";

const Employee = (props) => {
    return(
        <li>Employee ID is {props.id}, Employee name is {props.employeeName}, Employee surname is {props.employeeSurname}</li>
    )
}

export default Employee;
