import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './myContacts/contactsSlice';
export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});
