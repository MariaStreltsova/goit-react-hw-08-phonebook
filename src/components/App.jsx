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
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import authOperations from 'redux/auth/auth-operations';
import { Spinner } from './Spinner/Spinner';
import { useAuth } from 'hooks/useAuth';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<HomePage />}
            />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        {/* <Route path="contacts" element={<ContactsPage />} /> */}
        {/* 
        <Route path="register" element={<RegisterPage />} /> */}
        {/* <Route path="login" element={<LoginPage />} /> */}
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
