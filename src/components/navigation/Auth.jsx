import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/contacts">MY CONTACTS</NavLink>
      <NavLink to="/register">Register</NavLink>
    </>
  );
};
