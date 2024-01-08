import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';
class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor={this.nameInputId} className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={nanoid()}
            required
          />
        </label>
        <label htmlFor={this.nameInputId} className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={nanoid()}
            required
          />
        </label>

        <button type="submit" className={css.submit}>
          Add Contact
        </button>
      </form>
    );
  }
}

export default Form;
