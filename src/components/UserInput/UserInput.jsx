import React, { useState } from 'react'
import scss from './UserInput.module.scss';
//Components
import { Input, InputWithDataList } from './UI';
//Data
import genresData from '../../data/genres.json';

const UserInput = (props) => {
    const initialState = {
        title: '',
        genre: '',
        pages: ''
    }

    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState(initialState);

    const inputChangeHandler = (event) => {
        const targetName = event.target.name;
        const value = event.target.value;

        const curState = { ...formValues };
        curState[targetName] = value;
        setFormValues(curState);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let isValidForm = true;

        for (let key in formValues) {
            let isValid = validateForm(key, formValues[key]);

            isValidForm = isValidForm && isValid;

            if (!isValid) {
                const curState = { ...formErrors };
                curState[key] = 'Please enter valid value!';
                setFormErrors(curState);
            }
        }

        if (isValidForm) {
            props.onSubmit(formValues);
            setFormErrors(initialState);
        }
    }

    const validateForm = (targetName, value) => {
        switch (targetName) {
            case 'title':
                return value.trim() === '' ? false : true;
            case 'genre':
                return value.trim() === '' ? false : true;
            case 'pages':
                if (value !== '' && Number.isInteger(+value))
                    return true;
                else return false;

            default: return false;
        }
    }


    return (
        <div className={scss.UserInput} >
            <h3> Add New Book </h3>

            <form onSubmit={onSubmitHandler} >
                <Input error={formErrors.title} name='title' placeholder='Title' onChange={inputChangeHandler}> Title: </Input>
                <InputWithDataList error={formErrors.genre} name='genre' datalist={genresData} placeholder='Genre' onChange={inputChangeHandler}> Genre: </InputWithDataList>
                <Input error={formErrors.pages} name='pages' placeholder='Pages' onChange={inputChangeHandler}> Pages: </Input>

                <button> CLEAR </button>
                <button type='submit'> ADD </button>
            </form>

        </div>
    )
}

export default UserInput
