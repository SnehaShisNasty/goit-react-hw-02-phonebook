import React, { Component } from 'react';
import Form from './form/Form';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts?.length) {
      this.setState({
        contacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const toLowerCaseName = name.toLowerCase();

    if (contacts.some(item => item.name.toLowerCase() === toLowerCaseName)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  deleteContact = Id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== Id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContact = () => {
    console.log(css);
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const getVisibleContact = this.getVisibleContact();
    return (
      <section className={css.section}>
        <h1 className={css.title}>Phonebook</h1>
        <Form onSubmit={this.addContact}></Form>

        <Filter value={filter} onChange={this.changeFilter}></Filter>
        <h2 className={css.titleContacts}> Contacts</h2>
        <ContactList
          data={getVisibleContact}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </section>
    );
  }
}
