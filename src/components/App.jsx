import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { SharedLayout } from './layout/SharedLayout';
import { HomePage } from 'pages/HomePage';
import LoginPage from 'pages/auth-pages/LoginPage';
import RegisterPage from 'pages/auth-pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
// import { ContactsReviewForm } from './form/FormContacts';
// import { ContactList } from './list/ContactsList';
// import { Filter } from './filter/Filter';

import authOperations from 'redux/auth/auth-operations';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
