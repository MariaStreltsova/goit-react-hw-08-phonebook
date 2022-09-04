import { useDispatch, useSelector } from 'react-redux';

import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { Box, Input, InputName, SubmitButton } from './FormContacts.styled';
import { getItems } from '../../redux/myContacts/contactsSelectors';
import { addContact } from 'redux/myContacts/contactsOperations';

const idName = nanoid();
const idNumber = nanoid();

export const ContactsReviewForm = () => {
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number, id }, { resetForm }) => {
    const contactsNames = items.map(items => items.name);

    if (contactsNames.includes(name)) {
      alert(` ${name} is already in contacts.`);
    } else {
      const newPerson = {
        name,
        number,
        id,
      };
      dispatch(addContact(newPerson));
    }
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Box>
        <InputName>
          Name
          <Input
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={idName}
            placeholder="John Travolta"
          />
        </InputName>
        <InputName>
          Phone
          <Input
            autoComplete="off"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={idNumber}
            placeholder="+ 373 "
          />
        </InputName>
        <SubmitButton type="submit" variant="light">
          Add new contact
        </SubmitButton>
      </Box>
    </Formik>
  );
};
