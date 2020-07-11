import React from 'react'
import scss from './Input.module.scss';

const Input = (props) => {
    return (
        <div className={scss.input} >
            <p> {props.children} </p>
            <input name={props.name} placeholder={props.placeholder} onChange={props.onChange}  />
            <p className={scss.error} > {props.error} </p>
        </div>
    )
}

export default Input;
