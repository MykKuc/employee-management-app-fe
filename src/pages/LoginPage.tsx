import React from 'react';
import './LoginPage.css';

const LoginPage = () => {

    const initialState = {
        username: '',
        password: '',
    }


    /* I will need to validate things */
    const validate = () => {
        return 'Nothing for now';
    }

    

    return(
        <>
        <div className='login-card'>
            <p>Please enter your information</p>
            <form>

                <div className='login-username-block'>
                <label htmlFor='login-form-username'>Username</label>
                <input className='login-username-input' id='login-form-username' type='text' placeholder='Username'></input>
                </div>

                <div className='login-password-block'>
                <label htmlFor='login-form-password'>Password</label>
                <input className='login-password-input' id='login-form-password' type='password'></input>
                </div>

                <input className='login-submit-button' type='submit' value='Login'></input>
                <input className='login-reset-button' type='reset' value='Clear'></input>

                
            </form>
        </div>
        </>
    )


}

export default LoginPage;