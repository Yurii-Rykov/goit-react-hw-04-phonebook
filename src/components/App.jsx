import React from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formData = data => {
    if(this.state.contacts.find(e => e.name === data.name)){
      alert(`${data.name} is already in contacts`)
    }else{
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));}
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  visibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


  componentDidMount(){
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts)

    if(parseContacts){
      this.setState({ contacts: parseContacts})
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div className='container'>
        <h1>Phonebook</h1>
        <Form onSubmitForm={this.formData} />

        <h2>Contacts</h2>
        <Filter onValue={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          onContacts={this.visibleContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
