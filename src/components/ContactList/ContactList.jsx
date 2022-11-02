import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Box } from 'components/Box/Box.styled';
import { theme } from 'components/utils/Theme.styled'; 
import { ContactInfo, ContactsList, DeleteButton } from './ContactList.styled';

export class ContactList extends Component {
  state = {
    contactIdWithHoveredButton: '',
  };

  onDeleteButtonHovered = contactId => {
    this.setState({ contactIdWithHoveredButton: contactId });
  };

  render() {
    return (
      <ContactsList>
        {this.props.contacts.map(({ name, number, id }) => (
          <Box
            mb={[2]}
            p={[2]}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            border="small"
            borderRadius="5px"
            borderColor="#00000039"
            style={{
              boxShadow:
                this.state.contactIdWithHoveredButton === id
                  ? theme.shadows.inputInsetWarning
                  : theme.shadows.inputInset,
            }}
            transition="box-shadow normal"
            as="li"
            key={id}
          >
            <ContactInfo>
              {name}: {number}
            </ContactInfo>
            <DeleteButton
              onClick={() => this.props.onContactRemoveCallback(id)}
              onMouseEnter={() => this.onDeleteButtonHovered(id)}
              onMouseOut={() => this.onDeleteButtonHovered('')}
              isDelete={true}
            >
              Delete
            </DeleteButton>
          </Box>
        ))}
      </ContactsList>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onContactRemoveCallback: PropTypes.func.isRequired,
};