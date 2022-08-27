import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
// addContactRequest,
// addContactSuccess,
// addContactError,
// deleteContactRequest,
// deleteContactSuccess,
// deleteContactError,
// } from './contactsActions';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());

//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message));
//   }
// };

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      alert('Success! New contact has been added!');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      alert('The contact has been deleted!');
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
