import { useState, useEffect, useCallback } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = useCallback(
    (name, number) => {
      if (contacts.some(contact => contact.name === name)) {
        alert('This name is already in the contacts.');
        return;
      }

      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts(prevContacts => [...prevContacts, newContact]);
    },
    [contacts]
  );

  const handleFilterChange = useCallback(event => {
    setFilter(event.target.value);
  }, []);

  const handleDeleteContact = useCallback(contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className={css['container']}>
      <h1 className={css['main-title']}>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />

      <h2 className={css['contacts-title']}>Contacts</h2>
      <div className={css['filter-container']}>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={handleDeleteContact}
        />
      </div>
    </section>
  );
};

export default App;
