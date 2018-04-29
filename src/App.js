import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const people = this.props.contacts;

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          {name: 'Tyler'},
          {name: 'Karen'},
          {name: 'Richard'}
        ]} />
        <ContactList contacts={[
          {name: 'Bob'},
          {name: 'Steve'},
          {name: 'Harvey'}
        ]} />
      </div>
    );
  }
}

export default App;
