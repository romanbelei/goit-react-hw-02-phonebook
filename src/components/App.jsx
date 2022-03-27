import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    filter: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contactss</h2>
        <Filter value={this.state.filter} onFilter={this.handleChange} />
        <ContactList state={this.state} />
      </>
    );
  }
}
