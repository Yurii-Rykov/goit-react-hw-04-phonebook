import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './Form.module.css'

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameID = nanoid();
  inputNumberID = nanoid();

  inputValue = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
      [event.currentTarget.number]: event.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmitForm({
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  doubleName = () => {};

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className={s.mainForm}>
          <label htmlFor={this.inputNameID} className={s.mainForm_label}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.inputValue}
              id={this.inputNameID}
              className={s.mainForm_input}
            />
          </label>
          <label htmlFor={this.inputNumberID} className={s.mainForm_label}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.inputValue}
              id={this.inputNumberID}
              className={s.mainForm_input}
            />
          </label>
          <button type="submit" className={s.mainForm_btn}>Add contact</button>
        </form>
      </>
    );
  }
}

export default Form;
