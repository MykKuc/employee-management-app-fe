import React, {useEffect, useState} from 'react';
import Employee from '../components/Employee';
import './EmployeesListPage.css';

const EmployeesListPage = () => {

    const [employees, setEmployees] = useState<any[]>([]);

    //comment https://api.employeemanagementapp.com/api/employee'
    useEffect(() => {

        fetch('http://localhost:8080/api/employee',{
            method: "GET"
            })
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => console.log(`Error is ${error}`));

    }, [employees]);
    

    const listOfEmployees = employees.map(employee =>
        <Employee key={employee.id}
                  id={employee.id}
                employeeName={employee.employeeName}
                employeeSurname={employee.employeeSurname}></Employee>
        );

    return (
        <>
        <div className='full-page'>
            <p className='employee-list-text'>The List of all the employees below. 
            On this page you can see all the existing employees
            with information like name, surname, salary and department
            that are in the Application.
            </p>
            <div className='employee-list'>{listOfEmployees}</div>
        </div>
        </>
    );
}

export default EmployeesListPage;
