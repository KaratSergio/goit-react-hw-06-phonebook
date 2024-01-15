import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, updateFilter } from '../../redux/contacts';
import { persistor } from '../../redux/store';
import { PersistGate } from 'redux-persist/integration/react';


import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  const handleAddContact = (name, number) => {
    dispatch(addContact({ id: Date.now(), name, number }));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = (event) => {
    dispatch(updateFilter(event.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <PersistGate loading={null} persistor={persistor}>
      <section className={css['container']}>
        <h1 className={css['main-title']}>Phonebook</h1>
        <ContactForm addContact={handleAddContact} />

        <h2 className={css['contacts-title']}>Contacts</h2>
        <div className={css['filter-container']}>
          <Filter value={filter} onChange={handleFilterChange} />
          <ContactList contacts={filteredContacts} deleteContact={handleDeleteContact} />
        </div>
      </section>
    </PersistGate>
  );
};

export default App;