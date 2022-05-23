import React from 'react';
import s from 'App.module.css';
import 'react-toastify/dist/ReactToastify.css';
// import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ChakraProvider, Heading } from '@chakra-ui/react';

import ContactForm from 'Components/ContactForm';
import Filter from 'Components/Filter';
import ContactList from 'Components/ContactList';
import Container from 'Components/Container';

function App() {
  return (
    <div className={s.App}>
      <ChakraProvider>
        <Container>
          {/* <Routes> */}
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/contacts" element={<Contacts />}/> */}

          <Heading mb={5}>Phonebook</Heading>
          <ContactForm />
          <Heading mb={5}>Contacts</Heading>
          <Filter />
          <ContactList />
          {/* </Routes> */}
        </Container>
        <ToastContainer
          autoClose={2000}
          position="top-right"
          hideProgressBar={true}
        />
      </ChakraProvider>
    </div>
  );
}

export default App;
