import PropTypes from 'prop-types';
import css from './css/contactListElement.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/operations';

function ContactListElement({ id, name, number }) {
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <li className={css.liContactList}>
      <p>
        {name}: {number}
      </p>
      <button
        className={css.btnDelete}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListElement;
