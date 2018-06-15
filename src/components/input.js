import React from 'react';

const Input = ({title, state, name}, onChange, index) => {
    return (
        <div key={index} className="input">
        <label>{index + 1}</label>
            <input name={name} value={state} onChange={onChange}/>
            <label>{title}</label>
        </div>
    )
}

export default Input;