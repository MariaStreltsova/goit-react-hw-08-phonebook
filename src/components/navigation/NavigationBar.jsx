import { Logo } from './Logo';
import { AuthNav } from './Auth';
import UserMenu from './UserMenu';
// import { Container } from './NavigationBarStyled';
// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Box } from 'components/box';

export const NavigationBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Logo />
      {/* {isLoggedIn ? (
        <Logo /> && <NavLink to="/contacts">CONTACTS</NavLink>
      ) : (
        <Logo />
      )} */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
