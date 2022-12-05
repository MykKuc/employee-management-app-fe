import React from 'react';
import { useState } from 'react';
import './NewEmployeePage.css';

const NewEmployeePage = () => {

    const [employeeName, setEmployeeName] = useState('');
    const [employeeSurname, setEmployeeSurname] = useState('');

    const handleEmployeeNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmployeeName(event.target.value);
    }


    const handleEmployeeSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmployeeSurname(event.target.value);
    }


    const submitEmployee = () => {
        
        fetch('https://api.employeemanagementapp.com/api/employee', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
                {
                    employeeName: employeeName,
                    employeeSurname: employeeSurname
                }
            )
        })
        .then(response => response.json)
        .then(data => console.log(data));
    }

    

    return(
        <>
        <div className='new-employee-page'>
        <p className='new-employee-info'>Please add new employee below.</p>
        <p className='new-employee-info'>Required information involves the name, surname, employement start and employement category of an Employee.</p>

        <form>
        <div className='form-input-wrapper'>
            
            <div className='form-input-card'>
            
            <div className='employee-name-input'>
                <label> Employee name
                <input onChange={handleEmployeeNameChange} type='text' placeholder='Emplyee name' required></input>
                </label>
            </div>

            <div className='employee-surname-input'>
                <label> Employee Surname
                <input onChange={handleEmployeeSurnameChange} type='text' placeholder='Emplyee surname' required></input>
                </label>
            </div>
            
           {/*  <div>
            <label>Employee Department</label>
            <select>
                <option value='Engineering' defaultChecked>Engineer</option>
                <option value='Management'>Management</option>
                <option value='Accountinging'>Accounting</option>
                <option value='Miscelanious'>Miscelanious</option>
            </select>
            </div>*/}
        
            <button onClick={submitEmployee} className='new-employee-submit-button' type='submit'>Add Employee</button>

            </div>
            </div>
        </form>
        </div>
        </>
    )
}

export default NewEmployeePage;