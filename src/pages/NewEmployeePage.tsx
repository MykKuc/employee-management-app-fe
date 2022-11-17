import React from 'react';
import { useState } from 'react';
import './NewEmployeePage.css';

const NewEmployeePage = () => {

    const initialState = {
        employeeName: '',
        employeeSurname: '',
        date: '2012-02-25',

    }
    
    useState()
    


    return(
        <>

        <p className='new-employee-info'>Please add new employee below.</p>
        <p className='new-employee-info'>Required information involves the name, surname, employement start and employement category of an Employee.</p>

        <form>
        <div className='form-input-wrapper'>
            
            <div className='form-input-card'>
            <label> Employee name
            <input type='text' placeholder='Emplyee name'></input>
            </label>

            <label> Employee Surname
            <input type='text' placeholder='Emplyee surname'></input>
            </label>
            {/*
            <label> Employement Start
            <input type='date' ></input>
            </label>

            <div>
            <label>Employee Category</label>
            <select>
                <option value='Engineer' defaultChecked>Engineer</option>
                <option value='Management'>Management</option>
                <option value='Accounting'>Accounting</option>
                <option value='Miscelanious'>Miscelanious</option>
            </select>
            </div>
    */}
            <button className='new-employee-submit-button' type='submit'>Add Employee</button>

            </div>
            </div>
        </form>
        </>
    )
}

export default NewEmployeePage;