import React from 'react';
import s from 'App.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ChakraProvider } from '@chakra-ui/react';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import ContactsView from 'views/ContactsView';
import Container from 'Components/Container';
import AppBar from 'Components/AppBar';

function App() {
  return (
    <div className={s.App}>
      <ChakraProvider>
        <Container>
          <AppBar />

          <Routes>
            <Route index element={<HomeView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/contacts" element={<ContactsView />} />
          </Routes>
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
