import React from 'react';
import Contact from 'components/Contact/Contact';
import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export default function ContactsList() {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  return (
    <ul className={css.list}>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filterValue.toLowerCase())
        )
        .map((contact, index) => {
          return <Contact contact={contact} key={index}></Contact>;
        })}
    </ul>
  );
}
