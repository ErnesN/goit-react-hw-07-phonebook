import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getFavoriteContacts } from 'redux/contacts/contacts-selectors';
import styles from '../PhonebookList/phonebook-list.module.scss';

const MyFavoriteContacts = ({ removeContact }) => {
  const contacts = useSelector(getFavoriteContacts);
  const myFavoriteContacts = contacts.map(({ id, name, number }) => (
    <li key={id} className={styles.item}>
      {name}: {number}.
      <button
        className={styles.btn}
        onClick={() => removeContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return (
    <div>
      <h2>My Favorite contacts</h2>
      <ol className={styles.list}>{myFavoriteContacts}</ol>
    </div>
  );
};

export default MyFavoriteContacts;

MyFavoriteContacts.defaultProps = {
  contacts: [],
};

MyFavoriteContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
