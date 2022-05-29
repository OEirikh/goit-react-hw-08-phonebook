import React from 'react';
import s from 'App.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ChakraProvider } from '@chakra-ui/react';
import { getToken } from 'redux/AuthSlise';
import { useGetCurrentUserQuery } from 'redux/AuthApi';
import { useSelector } from 'react-redux';

import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import ContactsView from 'views/ContactsView';

import AppBar from 'Components/AppBar';

function App() {
  const token = useSelector(getToken);
  useGetCurrentUserQuery(null, { skip: !token });

  return (
    <div className={s.App}>
      <ChakraProvider>
        <AppBar />

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

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
