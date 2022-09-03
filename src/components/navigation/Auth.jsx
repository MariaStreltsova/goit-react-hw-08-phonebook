import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  padding-left: 5px;
  &.active {
    color: #e84a5f;
  }
`;
export const AuthNav = () => {
  return (
    <div>
      <Link to="/login">Login</Link>

      <Link to="/register">Register</Link>
    </div>
  );
};
