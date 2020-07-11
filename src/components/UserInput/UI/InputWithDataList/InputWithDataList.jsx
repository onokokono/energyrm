import React from 'react'
import { scss } from '../';

const InputWithDataList = (props) => {

    const datalist = props.datalist.map(data => <option key={data} > {data} </option>)

    return (
        <div className={scss.input} >
            <p> {props.children} </p>
            <input data-testid={props.testid} name={props.name} list='genreDataList' placeholder={props.placeholder} onChange={props.onChange} />
            <datalist id='genreDataList'>
                {datalist}
            </datalist>
            <p className={scss.error} > {props.error} </p>

        </div>
    )
}

export default InputWithDataList;
