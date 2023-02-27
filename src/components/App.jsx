import { Component } from 'react';
import { nanoid } from 'nanoid';

import AddContactForm from './Form';
import ContactsList from './Contacts List';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  canAddContact = InputName => {
    const normalizedName = InputName.toLowerCase();
    const names = this.state.contacts.map(({ name }) => name.toLowerCase());
    return names.includes(normalizedName);
  };

  onSubmitHendler = ({ name, number }, resetForm) => {
    const canAddToContacts = this.canAddContact(name);
    if (canAddToContacts) {
      alert(`${name} is alredy in contacts`);
      return;
    }
    this.setState(({ contacts }) => {
      return {
        contacts: [{ id: nanoid(), name: name, number: number }, ...contacts],
      };
    });
    resetForm();
  };

  onDelHendler = identeficator => {
    this.setState(prevState => ({
      contacts: [prevState.contacts.filter(({ id }) => id !== identeficator)],
    }));
  };

  onFilterChange = ({ target }) => {
    const normalizeValue = target.value.toLowerCase();
    this.setState({ filter: normalizeValue });
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h1>Phoneboock</h1>
        <AddContactForm onSubmitHendler={this.onSubmitHendler}></AddContactForm>
        <h2>Contacts</h2>
        <Filter onFilterChange={this.onFilterChange} />
        <ContactsList data={visibleContacts} onDelHendler={this.onDelHendler} />
      </>
    );
  }
  // <Section title={"Contacts"}>{ 'Phoneboock'}</Section>
}
