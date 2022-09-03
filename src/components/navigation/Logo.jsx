import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    color: #e84a5f;
  }
`;

export const Logo = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <Link to="/contacts">Contacts</Link>
      ) : (
        <Link to="/">PhoneBook</Link>
      )}
    </div>
  );
};
