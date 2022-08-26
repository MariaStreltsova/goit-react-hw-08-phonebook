import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactsTitle, List } from './ContactsList.styled';
import {
  getVisibleContacts,
  // getIsLoading,
} from '../../redux/myContacts/contactsSelectors';

import { Item } from './ContactsItem';
export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  // const isLoading = useSelector(getIsLoading);
  return (
    <div>
      <ContactsTitle>Contacts list</ContactsTitle>

      <List>
        {contacts &&
          contacts.map(({ id, name, number }) => {
            return <Item key={id} id={id} name={name} number={number} />;
          })}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contactsInfo: PropTypes.arrayOf(PropTypes.shape),
  deleteContact: PropTypes.func,
};
