import styles from './ContactForm.module.css';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

// const INITIAL_FORM_STATE = { name: '', number: '' };

function ContactForm({ changeContactsState }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      setNumber(value);
    }

    console.log({ [name]: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const contact = {
      name,
      number,
    };

    changeContactsState(contact);
    resetForm();
  };

  // const { name, number } = this.state;

  return (
    <form className={styles.form} onSubmit={handleSubmit} action="#">
      <label className={styles.label} htmlFor="name">
        Name:
      </label>
      <input
        className={styles.form__field}
        type="text"
        id="name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        required
      />

      <label className={styles.label} htmlFor="number">
        Number:
      </label>
      <input
        className={styles.form__field}
        type="tel"
        id="number"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Enter your number"
        value={number}
        onChange={handleChange}
        required
      />

      <button className={styles.submit__btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = { changeContactsState: PropTypes.func.isRequired };

export default ContactForm;

ContactForm.propTypes = {
  changeContactsState: PropTypes.func.isRequired,
};
