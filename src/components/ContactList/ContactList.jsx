import React from 'react';
import PropTypes from 'prop-types';

function ContactList({ state }) {
  return (
    <ul>
      {state.contacts
        .filter(e => e.name.toLowerCase().includes(state.filter.toLowerCase()))
        .map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  //   onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
