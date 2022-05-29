import React from 'react';
import { Navigate } from 'react-router-dom';
import Filter from 'Components/Filter';
import ContactList from 'Components/ContactList';
import ContactForm from 'Components/ContactForm';
import { Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getLoggedin } from 'redux/AuthSlise';

// import PropTypes from 'prop-types'

function ContactsView(props) {
  const isLogdedin = useSelector(getLoggedin);
  return (
    <div>
      {!isLogdedin && <Navigate to="/" replace={true} />}
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
