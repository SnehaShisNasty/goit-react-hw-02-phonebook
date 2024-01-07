import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './Form.css';
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
      <form onSubmit={this.handleSubmit} className="form">
        <label htmlFor={this.nameInputId} className="label">
          Name
          <input
            className="input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={nanoid()}
            required
          />
        </label>
        <label htmlFor={this.nameInputId} className="label">
          Number
          <input
            className="input"
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={nanoid()}
            required
          />
        </label>

        <button type="submit" className="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default Form;
