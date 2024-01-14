import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/Selectors';
import { addContact } from '../redux/ContactSlice';



const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const contacts = useSelector(getContacts);

  return (
    <form className="contact-form"
      onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text"
          value={name}
           name="name"
          required
          onChange={handleChange}/>
      </label>
      <label>
        Number
        <input value={number}
          type="tel"
          name="number"
          onChange={handleChange} required />
      </label>
      <button className="contact-btn" type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;