import React from 'react';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import SearchFilter from './SearchFilter/SearchFilter';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <Form></Form>
      <h2 className={css.subtitle}>Contacts</h2>
      <SearchFilter></SearchFilter>
      <ContactsList></ContactsList>
    </div>
  );
}
