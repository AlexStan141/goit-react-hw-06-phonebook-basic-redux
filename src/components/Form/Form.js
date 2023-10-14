import React from 'react';
import css from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';

export default function Form() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        <input
          type="text"
          name="name"
          className={css.input}
          placeholder="Name*"
          required
        ></input>
      </label>
      <label className={css.label}>
        <input
          type="tel"
          name="number"
          className={css.input}
          placeholder="Number*"
          required
        ></input>
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}
