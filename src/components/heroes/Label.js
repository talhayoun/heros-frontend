import React from 'react';

const Label = ({ title, value }) => {
    return (
        <div className="label">
            <h6>{title}</h6>
            <span>{value}</span>
        </div>
    );
};

export default Label;