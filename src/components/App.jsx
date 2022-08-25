import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './layout/SharedLayout';
import { HomePage } from 'pages/HomePage';
// import { ContactsReviewForm } from './form/FormContacts';
// import { ContactList } from './list/ContactsList';
// import { Filter } from './filter/Filter';
// import { Container, Title } from './App.styled';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<div>ContactsPage</div>} />
        <Route path="register" element={<div>RegisterPage</div>} />
        <Route path="login" element={<div>LoginPage</div>} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
    // <Container>
    //   <Title>Phonebook</Title>
    //   <ContactsReviewForm />
    //   <Filter />
    //   <ContactList />
    // </Container>
  );
}
