import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    // this.setState(prevState => {
    //   prevState.contacts = prevState.contacts.filter(e =>
    //     e.name.includes({ stateFilter })
    //   );
    // });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
      prevState.contacts.push({
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
      });
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p></p>
            <p>Number </p>
            <input
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <p></p>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>

        <label>
          <p>Find contact by name</p>
          <input
            type="input"
            name="filter"
            onChange={this.handleChange}
            value={this.state.filter}
          />
        </label>
        <ul>
          {this.state.contacts
            .filter(e =>
              e.name.toLowerCase().includes(this.state.filter.toLowerCase())
            )
            .map(contact => {
              return (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              );
            })}
        </ul>
      </>

      // <div
      //   style={{
      //     height: '100vh',
      //     display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 40,
      //     textTransform: 'uppercase',
      //     color: '#010101',
      //   }}
      // >
      //   React homework Roman Be
      // </div>
    );
  }
}
