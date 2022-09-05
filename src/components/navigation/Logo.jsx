import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: ${p => p.theme.colors.white};
  text-shadow: 2px 4px rgba(0, 0, 0, 0.75);
  :hover {
    color: ${p => p.theme.colors.accentText};
  }
`;

export const Logo = () => {
  const { isLoggedIn } = useAuth();

  return <div>{isLoggedIn && <Link to="/contacts">PhoneBook</Link>}</div>;
};
