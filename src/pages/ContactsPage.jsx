import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/myContacts/contactsOperations';
import { getVisibleContacts } from 'redux/myContacts/contactsSelectors';
import { Filter } from 'components/filter/Filter';
import { ContactList } from '../components/list/ContactsList';
import { ContactsReviewForm } from 'components/form/FormContacts';
import styled from 'styled-components';

const ContactsContainer = styled.div`
  height: 699px;
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(
    to top,
    rgba(213, 213, 224, 0.6),
    rgba(213, 213, 224, 0.01)
  );
`;

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
            <ContactList />{' '}
          </div>
        </ContactsContainer>
      ) : (
        <ContactsContainer>
          {' '}
          <ContactsReviewForm />
        </ContactsContainer>
      )}
    </>
  );
};

export default ContactsPage;
