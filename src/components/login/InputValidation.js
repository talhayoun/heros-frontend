import React from 'react';

const InputValidation = ({ template }) => {

    const { label, value, onChange, type, validate, errorProps } = template;
    const { errorMsg, errors, index } = errorProps;

    const handleValidate = () => {
        const { errors, setError, index } = errorProps;
        let copyErrors = [...errors];
        copyErrors[index] = validate ? false : true;
        setError(copyErrors);
    }

    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={handleValidate}
            />
            {errors[index] && <p className="error-message">{errorMsg}</p>}
        </div>
    );
};

export default InputValidation;