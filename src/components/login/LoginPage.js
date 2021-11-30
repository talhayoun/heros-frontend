import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const LoginPage = () => {

    const [isLoginForm, setIsLoginForm] = useState(true);

    return (
        <div className="login">
            {isLoginForm ?
                <Login setFormSwitch={setIsLoginForm} formSwitchValue={isLoginForm} /> :
                <Signup setFormSwitch={setIsLoginForm} formSwitchValue={isLoginForm} />

            }
        </div>
    );
};

export default LoginPage;