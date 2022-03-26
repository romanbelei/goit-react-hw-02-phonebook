import React, { Component } from 'react';

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

export default ContactList;
