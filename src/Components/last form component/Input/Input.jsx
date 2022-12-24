import React from 'react';

function Input(props) {
    return (
       <div className="form-group">
          <label htmlFor={props.labelId}>{props.labelName}</label>
          <input
            type={props.type}
            className="form-control"
            id={props.labelId}
            aria-describedby="emailHelp"
          ></input>
          <small id="emailHelp" className={`form-text text-muted ${props.display}`}>
            We'll never share your email with anyone else.
          </small>
        </div>
    );
}

export default Input;