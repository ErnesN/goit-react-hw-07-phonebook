import { useState } from 'react';
import PropTypes from 'prop-types';

import initialState from './initialState';

import styles from './phonebooks-form.module.scss';

const PhonebooksForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;
    setState(prevState => {
      return { ...prevState, [name]: newValue };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { name, number, favorite } = state;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.text}>Name</label>
        <input
          className={styles.input}
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.text}>Number</label>
        <input
          className={styles.input}
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Enter number"
        />
      </div>
      <div>
        <label>Favorite</label>
        <input
          name="favorite"
          checked={favorite}
          onChange={handleChange}
          type="checkbox"
        />
      </div>
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default PhonebooksForm;

PhonebooksForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
