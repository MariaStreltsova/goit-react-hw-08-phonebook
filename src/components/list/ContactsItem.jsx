import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { contactsSlice } from '../../redux/myContacts/contactsSlice';

import { ContactsItem, DeleteButton, Text } from './ContactsItem.styled';
export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ContactsItem>
      <Text>Name: {name}</Text>
      <Text>Number: {number}</Text>
      <DeleteButton
        type="button"
        id={id}
        onClick={e =>
          dispatch(contactsSlice.actions.deleteContact(e.target.id))
        }
      >
        Delete
      </DeleteButton>
    </ContactsItem>
  );
};
ContactListItem.propTypes = {
  deleteContact: PropTypes.func,
  item: PropTypes.objectOf(PropTypes.string),
};
