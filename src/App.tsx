import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import EmployeesListPage from './pages/EmployeesListPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import NewEmployeePage from './pages/NewEmployeePage';

const App = () => {
    return(
        <>
        <nav>
            <Link to="/">Home Page</Link>
            <Link to="/list">Employees List</Link>
            <Link to="/new">New Employee</Link>
        </nav>

        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
            <Route path='/list' element={<EmployeesListPage/>}></Route>
            <Route path='/new' element={<NewEmployeePage/>}></Route>
        </Routes>     
        </>
    )
}

export default App;