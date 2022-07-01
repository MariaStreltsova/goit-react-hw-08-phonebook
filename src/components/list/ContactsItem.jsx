export const ContactListItem = ({ item }) => {
  return (
    <li>
      <p>name: {item.name}</p>
      <p>number: {item.number}</p>
      {/* <p>number: {item.number}</p>
      <button type="button" onClick={() => delateContact(item.id)}>
        Delate <BsTrash />
      </button> */}
    </li>
  );
};
