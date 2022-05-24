import React from 'react';
import Filter from 'Components/Filter';
import ContactList from 'Components/ContactList';
import ContactForm from 'Components/ContactForm';
import { Heading } from '@chakra-ui/react';
// import PropTypes from 'prop-types'

function ContactsView(props) {
  return (
    <div>
      <Heading mb={5}>Phonebook</Heading>
      <ContactForm />
      <Heading mb={5}>Contacts</Heading>
      <Filter />
      <ContactList />
    </div>
  );
}

// ContactsView.propTypes = {}

export default ContactsView;
