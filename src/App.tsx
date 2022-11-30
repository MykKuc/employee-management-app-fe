import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import EmployeesListPage from './pages/EmployeesListPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import NewEmployeePage from './pages/NewEmployeePage';
import './App.css';
import LoginPage from './pages/LoginPage';

const App = () => {
    return(
        <>
        <div className='page'>
        <header>
        <h1 className='header-h1'>Employee Management Application</h1>
        <nav className='header-nav-links'>
            <button><Link  to="/">Home Page</Link></button>
            <button><Link  to="/list">Employees List</Link></button>
            <button><Link  to="/new">New Employee</Link></button>
            <button><Link  to="/login">Login</Link></button>
        </nav>

        </header>


        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
            <Route path='/list' element={<EmployeesListPage/>}></Route>
            <Route path='/new' element={<NewEmployeePage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
        </Routes>

        <footer className='footer'>
            Created by Mykoliux. All rights reserved 2022
        </footer>  
        </div>   
        </>
    )
}

export default App;