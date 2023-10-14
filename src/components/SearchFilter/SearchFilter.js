import React from 'react';
import css from './SearchFilter.module.css';
import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/actions';

export default function SearchFilter() {
  const dispatch = useDispatch();

  return (
    <form>
      <label className={css.label}>
        <input
          type="text"
          name="filterString"
          className={css.input}
          onChange={event => {
            dispatch(setContactsFilter(event.target.value));
          }}
          placeholder="Find contacts by name"
        ></input>
      </label>
    </form>
  );
}
