import { useState } from 'react';
import './index.css';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm.js';
import ContactList from './components/ContactList/ContactList.js';
import Filter from './components/Filter/Filter';
// import { useEffect } from 'react/cjs/react.production.min';
import useLocalStorage from 'components/hooks/useLocalStorage';
const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');
  // const deleteContact = useMemo(
  //   id => {
  //     return contacts.filter(contact => contact.id !== id);
  //   },
  //   [filter, contacts]
  // );

  const deleteContact = id => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    setContacts(filteredContacts);
  };

  const updateContacts = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts list!`);
    } else {
      setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
    }
  };

  const updateFilter = evt => {
    setFilter(evt.target.value);
  };

  return (
    <>
      <div className="code__title">
        <a
          className="code__link"
          href="https://github.com/dairedo7/react-assignment-phonebook"
        >
          Project's original code
        </a>
      </div>
      <div className="phonebook__container">
        <h1 className="phonebook__title">Phonebook</h1>
        <ContactForm changeContactsState={updateContacts} />

        <h2 className="contacts__title">Contacts</h2>
        <Filter filter={filter} handleChange={updateFilter} />
        <ContactList
          contacts={contacts}
          nameToFilter={filter}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}
