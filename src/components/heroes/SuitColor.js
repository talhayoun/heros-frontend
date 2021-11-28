import React from 'react';

const SuitColor = ({ title, colors }) => {
    return (
        <div className="label">
            <h6>{title}</h6>
            {colors?.map((color) =>
                <span style={{ width: 30, height: 10, backgroundColor: color }}></span>
            )}
        </div>
    )
}

export default SuitColor;