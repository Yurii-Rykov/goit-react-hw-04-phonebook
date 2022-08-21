import React from 'react';
import PropTypes from 'prop-types'
import s from './ContactList.module.css'

const ContactList = ({ onContacts, onDelete } ) => {
  
    return (
      <ul className={s.contacts}>
        {onContacts.map(({ name, number, id }) => (
          <li key={id} className={s.contacts_item}>
            {name}: {number}
            <button
              type="button"
              className={s.btnDelete}
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
}

export default ContactList;

ContactList.propTypes = {
  onContacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}