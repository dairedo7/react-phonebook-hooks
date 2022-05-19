import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, nameToFilter, deleteContact }) {
  return (
    <ul className={styles.list}>
      {contacts
        .filter(({ name }) =>
          name.toLowerCase().includes(nameToFilter.toLowerCase())
        )
        .map(contact => {
          return (
            <ContactItem
              contact={contact}
              key={contact.name}
              deleteContact={deleteContact}
            />
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  nameToFilter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
