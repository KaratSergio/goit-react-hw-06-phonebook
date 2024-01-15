import { useEffect } from 'react';
import { nanoid } from 'nanoid'; 
import { useDispatch, useSelector } from 'react-redux';
import {
  setContacts,
  setFilter as setFilterAction,
  addContact,
  deleteContact,
} from '../../redux/contacts';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      dispatch(setContacts(JSON.parse(savedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    if (contacts.some((contact) => contact.name === name)) {
      alert('This name is already in the contacts.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
  };

  const handleFilterChange = (event) => {
    dispatch(setFilterAction(event.target.value));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className={css['container']}>
      <h1 className={css['main-title']}>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />

      <h2 className={css['contacts-title']}>Contacts</h2>
      <div className={css['filter-container']}>
        <Filter onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={handleDeleteContact}
        />
      </div>
    </section>
  );
};

export default App;
