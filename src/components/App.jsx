import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsReviewForm } from './form/FormContacts';
import ContactList from './list/ContactsList';
export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    ],
    name: '',
    filter: '',
  };

  submitForm = (values, { resetForm }) => {
    const oldContact = this.state.contacts.find(
      person => person.name.toLowerCase() === values.name.toLowerCase()
    );

    if (oldContact) {
      alert(` ${values.name} is already in contacts.`);
      return;
    }

    const person = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    this.setState(prevState => {
      return {
        contacts: [person, ...prevState.contacts],
      };
    });
    resetForm();
  };

  onFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };
  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const newContacts = this.state.contacts.filter(person =>
      person.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsReviewForm submitForm={this.submitForm} />
        {/* <Filter onFilter={this.onFilter} filter={this.state.filter} /> */}
        <ContactList contactsInfo={newContacts} />
      </div>
    );
  }
}
