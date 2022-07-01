import { ContactListItem } from './ContactsItem';

export default function ContactList({ contactsInfo }) {
  return (
    <div>
      <h2>Contacts list</h2>
      <ul>
        {contactsInfo?.map(item => (
          <ContactListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
