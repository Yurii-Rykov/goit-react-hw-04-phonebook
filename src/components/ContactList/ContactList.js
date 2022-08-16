import React from 'react';
import s from './ContactList.module.css'

class ContactList extends React.Component {
  render() {
    const { onContacts, onDelete } = this.props;
    
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
}

export default ContactList;
