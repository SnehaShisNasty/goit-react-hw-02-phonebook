export const ContactList = ({ data, onDeleteContact }) => {
  return (
    <ul>
      {data.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
