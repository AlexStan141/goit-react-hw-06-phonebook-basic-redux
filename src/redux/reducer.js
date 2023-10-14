import { combineReducers } from 'redux';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      var existingNames = state.map(contact => contact.name);
      var nameExists = existingNames.includes(action.payload.name);
      if (nameExists) {
        alert(`${action.payload.name} is already in contacts`);
      }
      return !nameExists ? [...state, action.payload] : state;

    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterInitialState = '';

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setContactsFilter':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
