import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // export const App = () => {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          textTransform: 'uppercase',
          color: '#010101',
        }}
      >
        React homework Roman Be
      </div>
    );
  }
}
