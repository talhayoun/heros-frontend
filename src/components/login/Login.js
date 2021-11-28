import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import { loginUser } from "../../server/login";
import { addCookie } from '../../server/cookies';
import { LoginContext } from '../../context/LoginContext';
import { loginAction } from '../../actions/userActions';
import { TrainerContext } from '../../context/TrainerContext';
import { setHerosAction } from '../../actions/trainerActions';

const Login = ({ setFormSwitch, formSwitchValue }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([false, false]);
    const [response, setResponse] = useState(["", ""]);

    const navigate = useNavigate()
    const { dispatchUserData } = useContext(LoginContext);
    const { dispatchTrainerData } = useContext(TrainerContext);

    const handleFormSubmit = () => {
        loginUser(username, password).then(
            (res) => {
                console.log(res);
                addCookie(res.token);
                setResponse(["Logging in...", "success"])
                setTimeout(() => {
                    dispatchUserData(loginAction(res.username, res.id, res.token));
                    dispatchTrainerData(setHerosAction(res.heroes))
                    navigate("/dashboard");
                }, 1000);
            },
            (err) => {
                setResponse([err.message, 'failure']);
                setTimeout(() => {
                    setResponse(["", ""]);
                }, 3000);
            }
        )
    }


    const template = {
        header: "LOGIN",
        button: "LOG IN",
        formProps: {
            formSwitch: setFormSwitch,
            formSwitchValue,
            formSwitchMessage: "Don't you have an account? Click to register",
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
                validate: password.length > 1,
                errorProps: {
                    errors,
                    setError: setErrors,
                    errorMsg: "Password is required",
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

export default Login;