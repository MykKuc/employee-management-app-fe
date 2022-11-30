import React from "react";
import './Employee.css';

type props = {
    id: number,
    employeeName: string,
    employeeSurname: string
}

const Employee = (props:props) => {



    return(
        <>
        <div className="employee-card">

        <div className="employee-id-text text-style">Employee ID: {props.id}</div>
        <div className="employee-name-text text-style">Employee name: {props.employeeName}</div> 
        <div className="employee-surname-text text-style">Employee surname: {props.employeeSurname}</div>
        <button className="change-info-button">Change Info</button>
        </div>
        </>
    )
}

export default Employee;
