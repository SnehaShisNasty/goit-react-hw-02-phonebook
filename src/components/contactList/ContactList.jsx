import './ContactList.css';
export const ContactList = ({ data, onDeleteContact }) => {
  return (
    <ul className="list">
      {data.map(({ name, id, number }) => (
        <li key={id} className="item">
          {name}: {number}
          <button onClick={() => onDeleteContact(id)} className="delete">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
