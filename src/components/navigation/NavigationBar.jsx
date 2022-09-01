import { Logo } from './Logo';
import { AuthNav } from './Auth';
import { UserMenu } from './UserMenu';
import { Container } from './NavigationBarStyled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
export const NavigationBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Container>
      <Logo />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Container>
  );
};
