import { useState } from 'react';
import MyInput from '../../shared/UI/Input/MyInput';

import s from './searchForm.module.scss';

const SearchForm = ({filter, setFilter}) => {

    return (

        <div className='container'>
            <form className={s.form} action="">
                <MyInput
                    className={s.myInput}
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    placeholder="Search..."
                />
            </form>
        </div>
    );
};

export default SearchForm;