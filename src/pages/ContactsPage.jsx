import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/myContacts/contactsOperations';
import { getVisibleContacts } from 'redux/myContacts/contactsSelectors';
import { Filter } from 'components/filter/Filter';
import { ContactList } from '../components/list/ContactsList';
import { ContactsReviewForm } from 'components/form/FormContacts';
import { ContactsContainer, Message } from './PagesStyled';
const ContactsPage = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length !== 0 ? (
        <ContactsContainer>
          <ContactsReviewForm />{' '}
          <div>
            <Filter />

            <ContactList />
          </div>
        </ContactsContainer>
      ) : (
        <ContactsContainer>
          {' '}
          <ContactsReviewForm />
          <div>
            <Filter />
            <Message>There are no contacts</Message>
          </div>
        </ContactsContainer>
      )}
    </>
  );
};

export default ContactsPage;
