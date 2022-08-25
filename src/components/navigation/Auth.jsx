import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <div>Log in to your account</div>
      <NavLink to="/login">Login</NavLink>

      <NavLink to="/register">Register</NavLink>
    </>
  );
};
