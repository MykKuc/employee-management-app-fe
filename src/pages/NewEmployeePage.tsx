import React from 'react';

const NewEmployeePage = () => {
    return(
        <>
        <p>Please add new employee below.</p>
        <form>
            
            <label> Employee name
            <input type='text' placeholder='Emplyee name'></input>
            </label>

            <label> Employee Surname
            <input type='text' placeholder='Emplyee surname'></input>
            </label>

            <label> Emplyee Birth date
            <input type='date' ></input>
            </label>
        </form>
        </>
    )
}

export default NewEmployeePage;