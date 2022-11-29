import React from "react";

type props = {
    id: number,
    employeeName: string,
    employeeSurname: string
}

const Employee = (props:props) => {
    return(
        <li>Employee ID is {props.id}, Employee name is {props.employeeName}, Employee surname is {props.employeeSurname}</li>
    )
}

export default Employee;
