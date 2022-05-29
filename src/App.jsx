import { lazy, Suspense } from 'react';
import s from 'App.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ChakraProvider } from '@chakra-ui/react';
import { getToken } from 'redux/AuthSlise';
import { useGetCurrentUserQuery } from 'redux/AuthApi';
import { useSelector } from 'react-redux';

import AppBar from 'Components/AppBar';

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

function App() {
  const token = useSelector(getToken);
  useGetCurrentUserQuery(null, { skip: !token });

  return (
    <div className={s.App}>
      <Suspense>
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
      </Suspense>
    </div>
  );
}

export default App;
