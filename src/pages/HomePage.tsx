import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return(
        <>
        <div className='homepage'>
        
        <section className='homepage-view-employees'>
        <div className='view-box'>
            <p>The Application provides ability to check the list of employees and information about these individuals. 
                Information provided involves Name, Surname, Salary and department of the employee.
            </p>
        </div>
        <div className='image-list'></div>
        </section>

        <section className='add-employees'>
        <div className='view-box'>
            <p>The application provides possibility of adding new Employees to your list.
                Just enter the data of the new Employee.
            </p>
        </div>
        <div className='image-add-employee'></div>
        </section>

        <section className='add-category'>
        <div className='view-box'>
            <p>There is ability to add new department to department list. 
                You can create your own department providing the details and description of the department.
            </p>
        </div>
        <div className='image-add-category'></div>
        </section>

        <section className='add-files'>
        <div className='view-box'>
            <p>Also the application provides ability to add files to each employee.
                (Functionality under development.)
            </p>
        </div>
        <div className='image-add-file'></div>
        </section>

        </div>
        </>
    )
}

export default HomePage;