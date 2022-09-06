import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      toast.success(`Hi ${data.user.name}, now you are signed up!`);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Sorry, something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    toast.success(`Hi ${data.user.name}, you are logged in!`);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('Something went wrong, check your email or password');
    return thunkAPI.rejectWithValue(error.message);
  }
});
const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    toast.info(`Bye, see you next time!`);
    token.unset();
  } catch (error) {
    alert('Sorry, something went wrong');
    return thunkAPI.rejectWithValue(error.message);
  }
});
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
