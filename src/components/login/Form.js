import React from 'react';
import InputValidation from './InputValidation';

const Form = ({ template }) => {

    const { header, formProps, button, fields } = template;
    const { formSwitch, formSubmitResponse, formSwitchMessage, formSubmit, formSwitchValue } = formProps


    const handleSubmit = (e) => {
        e.preventDefault();
        let { errors, setError } = fields[0].errorProps;
        let copyErrors = [...errors];

        for (let i = 0; i < fields.length; i++) {
            const { index, isError } = validateFields(fields[i]);
            copyErrors[index] = isError;
        }

        setError(copyErrors)
        if (!copyErrors.includes(true))
            formSubmit()
    }

    const validateFields = (field) => {
        const { validate } = field;
        const { index } = field.errorProps;
        let isError = validate ? false : true;
        return { index, isError };
    }

    return (
        <form className="form">
            <h1>{header}</h1>
            {fields.map((field) =>
                <InputValidation
                    key={field.label}
                    template={field}
                />
            )}
            {formSubmitResponse[0] &&
                <p className={formSubmitResponse[1] === "failure" ? "error-message" : "success-message"}
                >
                    {formSubmitResponse[0]}
                </p>}
            <button onClick={handleSubmit}>{button}</button>
            <p
                className="form-sign-field"
                onClick={() => formSwitch(!formSwitchValue)}
            >
                {formSwitchMessage}
            </p>
        </form>
    )
};

export default Form;