import React from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { BiUserPin } from 'react-icons/bi';
import { BiSolidTrash } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <BiUserPin
        style={{ color: 'orange', width: '50px', height: '50px' }}
      ></BiUserPin>
      <div className={css.info}>
        <span className={css.data}>{contact.name}</span>
        <span className={css.data}>{contact.number}</span>
      </div>
      <BiSolidTrash
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
        style={{ color: 'orange', marginRight: '15px' }}
      >
        Delete
      </BiSolidTrash>
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
