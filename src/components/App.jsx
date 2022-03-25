import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    // this.setState({ contacts.push({ name: this.state.name, id: nanoid() }) });
    //   ;
    // });
    this.setState(prevState => {
      prevState.contacts.push({ name: this.state.name, id: nanoid() });
    });
    // console.log(...this.prevState.contacts);
    //   [...this.prevState.contacts, { name: this.state.name, id: nanoid() }]
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
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
              onChange={this.handleNameChange}
            />
          </label>
          <p></p>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => {
            return <li key={contact.id}>{contact.name}</li>;
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
