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

  const Message = styled.p`
    width: fit-content;
    margin: 0 auto;
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.white};
    padding: ${p => p.theme.space[3]}px;
    margin-top: ${p => p.theme.space[5]}px;
    border-radius: ${p => p.theme.radii.normal};
    opacity: 0.9;
    background-color: rgba(217, 217, 217, 0.27);
    text-shadow: 2px 3px rgba(0, 0, 0, 0.75);
  `;
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
