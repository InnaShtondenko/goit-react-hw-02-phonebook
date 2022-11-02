import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import {
    AddContactButton,
    AddContactForm,
    InputInfoLabel,
    ContactInput,
} from './Form.styled'; 

export class ContactForm extends Component {
  onSubmit = e => {
    e.preventDefault();
    const { name: nameEl, number: numberEl } = e.currentTarget.elements;

    this.props.onSubmitCallback({
      name: nameEl.value,
      number: numberEl.value,
      id: nanoid(),
    });

    e.currentTarget.reset();
  };

  render() {
    return (
      <AddContactForm onSubmit={this.onSubmit}>
        <InputInfoLabel>
          Name
          <ContactInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoFocus
          ></ContactInput>
        </InputInfoLabel>
        <InputInfoLabel>
          Number
          <ContactInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></ContactInput>
        </InputInfoLabel>
        <AddContactButton type="submit" cursor="cross">
          Add contact
        </AddContactButton>
      </AddContactForm>
    );
  }
}

ContactForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
};