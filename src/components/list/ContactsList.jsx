import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactsItem';
import { ContactsTitle, List } from './ContactsList.styled';
import { getVisibleContacts } from '../../redux/contactsSelectors';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  return (
    <div>
      <ContactsTitle>Contacts list</ContactsTitle>
      <List>
        {contacts?.map(({ id }) => {
          return <ContactListItem key={id} />;
        })}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contactsInfo: PropTypes.arrayOf(PropTypes.shape),
  deleteContact: PropTypes.func,
};
