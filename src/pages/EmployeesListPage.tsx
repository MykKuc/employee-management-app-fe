import React, {useEffect, useState} from 'react';
import Employee from '../components/Employee';

const EmployeesListPage = () => {

    const [employees, setEmployees] = useState<any[]>([]);

    // 'https://api.employeemanagementapp.com/all'
    useEffect(() => {

        fetch('http://localhost:8080/all',{
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
            <p>The List of all the employees:</p>
            {listOfEmployees}
        </>
    );
}

export default EmployeesListPage;
