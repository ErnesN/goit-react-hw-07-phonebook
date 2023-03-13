import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PhonebooksForm from './PhonebooksForm/PhonebooksForm';
import PhonebookList from './PhonebookList/PhonebookList';
import PhonebooksFilter from './PhonebooksFilter/PhonebooksFilter';
import MyFavoriteContacts from './MyFavoriteContacts/MyFavoriteContacts';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import styles from './phonebooks.module.scss';

const Phonebooks = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = ({ name, number, favorite }) => {
    dispatch(addContact({ name, number, favorite }));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const isContacts = Boolean(filteredContacts.length);

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h1>Phonebook</h1>
        <PhonebooksForm onSubmit={handleAddContact} />
      </div>
      <div className={styles.block}>
        <MyFavoriteContacts />
        <PhonebooksFilter value={filter} handleChange={handleFilter} />
        {isContacts && (
          <PhonebookList
            removeContact={handleDeleteContact}
            contacts={filteredContacts}
          />
        )}
        {!isContacts && <p>No contacts in list</p>}
      </div>
    </div>
  );
};

export default Phonebooks;
