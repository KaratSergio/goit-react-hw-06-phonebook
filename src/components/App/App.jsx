import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../redux/store';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import css from './App.module.css';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <section className={css.container}>
          <h1 className={css['main-title']}>Phonebook</h1>
          <ContactForm />
          <h2 className={css['contacts-title']}>Contacts</h2>
          <div className={css['filter-container']}>
            <Filter />
            <ContactList />
          </div>
        </section>
      </PersistGate>
    </Provider>
  );
};

export default App;

