import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/Selectors';
import { removeContact } from '../redux/ContactSlice';



const ContactList = function () {
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterContact = e => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
  };

  const filteredContacts = filterContact();
  return (
    <ul className="contact-menu">
      {filteredContacts.map(({ id, name, number }) => (
        <li className="contact-list"
          key={id}>
           <p>{name}:{number}</p>
          <button className="delete-btn" style={{ marginLeft: '10px' }}
            onClick={() => dispatch(removeContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
