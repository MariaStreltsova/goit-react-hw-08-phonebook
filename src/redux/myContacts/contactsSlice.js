import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './contactsOperations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};
export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  extrareducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // addContact: {
    //   reducer: (state, action) => {
    //     state.push(action.payload);
    //   },
    //   prepare: ({ name, number }) => {
    //     const id = nanoid();
    //     return { payload: { name, number, id } };
    //   },
    // },
    // deleteContact(state, action) {
    //   return state.filter(item => item.id !== action.payload);
    // },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload;
    },
  },
});
export const contactsReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});
