import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/myContacts/contactsOperations';
import { getVisibleContacts } from 'redux/myContacts/contactsSelectors';
import { Filter } from 'components/filter/Filter';
import { ContactList } from '../components/list/ContactsList';

const ContactsPage = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  if (contacts.length !== 0) {
    return (
      <>
        <Filter />
        <ContactList />
      </>
    );
  } else {
    return <p>You can add your first contact!</p>;
  }
};

export default ContactsPage;
