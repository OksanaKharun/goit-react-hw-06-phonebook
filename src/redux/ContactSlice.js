import { createSlice, nanoid } from '@reduxjs/toolkit';

export const ContactSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
    {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
  ],
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: payload => {
        return {
          payload: {
            id: nanoid(),
            ...payload,
          },
        };
      },
    },
    removeContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = ContactSlice.actions;