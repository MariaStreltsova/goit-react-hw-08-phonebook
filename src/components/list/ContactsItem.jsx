import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/myContacts/contactsSelectors';
import { deleteContact } from 'redux/myContacts/contactsOperations';
import { ContactsItem, Text } from './ContactsItem.styled';
import SpinnerBootstrap from 'components/Spinner/Spinner';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
export const Item = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const [idToDelete, setIdToDelete] = useState(null);

  return (
    <>
      <ContactsItem>
        <Text>Name: {name}</Text>
        <Text>Number: {number}</Text>
        <Button
          type="button"
          id={id}
          onClick={() => {
            setIdToDelete(id);
            dispatch(deleteContact(id));
          }}
          disabled={isLoading}
          variant="light"
        >
          {id === idToDelete ? <SpinnerBootstrap /> : <CloseButton />}
        </Button>
      </ContactsItem>
    </>
  );
};
