import PropTypes from 'prop-types';

import styles from './phonebook-list.module.scss';

const PhonebookList = ({ removeContact, contacts }) => {
  const myContacts = contacts.map(({ id, name, number }) => (
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

  return <ol className={styles.list}>{myContacts}</ol>;
};

export default PhonebookList;

PhonebookList.defaultProps = {
  contacts: [],
};

PhonebookList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
