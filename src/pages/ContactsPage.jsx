import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/myContacts/contactsOperations';
import { getVisibleContacts } from 'redux/myContacts/contactsSelectors';
import { Filter } from 'components/filter/Filter';
import { ContactList } from '../components/list/ContactsList';
import { ContactsReviewForm } from 'components/form/FormContacts';
import { ContactsContainer, Message } from './PagesStyled';
import { useAuth } from 'hooks/useAuth';

const ContactsPage = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>{`${user.name}'s contacts`}</title>
      </Helmet>
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
