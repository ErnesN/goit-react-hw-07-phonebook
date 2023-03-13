import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'shared/services/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      const { contacts } = getState();
      const normalizedTitle = name.toLowerCase();
      const normalizedAuthor = number.toLowerCase();
      const result = contacts.items.find(({ name, number }) => {
        return (
          name.toLowerCase() === normalizedTitle &&
          number.toLowerCase() === normalizedAuthor
        );
      });
      if (result) {
        alert(`${name}: ${number} is already ixist`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
