import React, { useState } from 'react';
import { signupUser } from '../../server/login';
import Form from './Form';

const Signup = ({ setFormSwitch, formSwitchValue }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([false, false]);
    const [response, setResponse] = useState("");


    const handleFormSubmit = () => {
        signupUser(username, password).then(
            (res) => {
                setResponse(['You have successfully signed up, try to login', 'success']);
                setTimeout(() => {
                    setFormSwitch(!formSwitchValue)
                }, 2000);

            },
            (err) => {
                setResponse([err.message, 'failure'])
                setTimeout(() => {
                    setResponse(["", ""]);
                }, 3000);
            }
        )
    }

    const template = {
        header: "SIGN UP",
        button: "SIGN UP",
        formProps: {
            formSwitch: setFormSwitch,
            formSwitchValue,
            formSwitchMessage: "Do you have an account? Click to login",
            formSubmit: handleFormSubmit,
            formSubmitResponse: response
        },
        fields: [
            {
                label: "USERNAME",
                value: username,
                onChange: setUsername,
                type: "text",
                validate: username.length > 1,
                errorProps: {
                    errors,
                    setError: setErrors,
                    errorMsg: "Username is required",
                    index: 0
                }
            },
            {
                label: "PASSWORD",
                value: password,
                onChange: setPassword,
                type: "password",
                validate: /^.*(?=.{8,})(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$/.test(password),
                errorProps: {
                    errors,
                    setError: setErrors,
                    errorMsg: "Password must contain 8 charts, 1 capital letter, 1 non-alphanumeric char and 1 digit ",
                    index: 1
                }

            }
        ]
    }

    return (
        <Form
            template={template}
        />
    );
};

export default Signup;