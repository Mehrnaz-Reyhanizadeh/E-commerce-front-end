import React from 'react';
import styles from "../form.module.css"

function Input(props) {
    return (
       <div className={styles.formField}>
          <label>{props.title}</label>
          <input
            className={
              props.error && props.touched
                ? styles.uncompleted
                : styles.formInput
            }
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.changeHandler}
            onFocus={props.focusHanlder}
          />
          {props.error && props.touched && <span>{props.error}</span>}
        </div>
    );
}

export default Input;