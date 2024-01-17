import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      const newContact = action.payload;
      const newName = newContact.name;
      const { contacts } = state;

      const isExistingContact = contacts.some(
        ({ name }) => name.toLowerCase() === newName.toLowerCase()
      );

      if (!isExistingContact) {
        newContact.id = nanoid();
        state.contacts.push(newContact);
      }
    },
    deleteContact(state, action) {
      const idDeleteContact = action.payload;

      state.contacts = state.contacts.filter(({ id }) => id !== idDeleteContact);
    },
    setFilter(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export default contactsReducer
