import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filterContacts } from '../contacts/contacts-actions';
import {
  fetchAllContacts,
  addNewContact,
  deleteOneContact,
} from './contacts-operations';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
  loading: false,
  error: null,
};

export const contactsReducers = createReducer(INITIAL_STATE.contacts, {
  [fetchAllContacts.fulfilled]: (state, { payload }) => payload,
  [addNewContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteOneContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const filterReducers = createReducer(INITIAL_STATE.filter, {
  [filterContacts]: (state, { payload }) => payload,
});

export const loadingReducers = createReducer(INITIAL_STATE.loading, {
  [filterContacts.pending]: () => true,
  [filterContacts.fulfilled]: () => false,
  [filterContacts.rejected]: () => false,
  [addNewContact.pending]: () => true,
  [addNewContact.fulfilled]: () => false,
  [addNewContact.rejected]: () => false,
  [deleteOneContact.pending]: () => true,
  [deleteOneContact.fulfilled]: () => false,
  [deleteOneContact.rejected]: () => false,
  [filterContacts]: () => true,
});

export const errorReducer = createReducer(INITIAL_STATE.error, {
  [filterContacts.pending]: () => null,
  [filterContacts.rejected]: (state, action) => action.payload,
  [addNewContact.pending]: () => null,
  [addNewContact.rejected]: (state, action) => action.payload,
  [deleteOneContact.pending]: () => null,
  [deleteOneContact.rejected]: (state, action) => action.payload,
});

export default combineReducers({
  contactsReducers,
  filterReducers,
  loadingReducers,
  errorReducer,
});
