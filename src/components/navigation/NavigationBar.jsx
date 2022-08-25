import { Logo } from './Logo';
import { AuthNav } from './Auth';
import { UserMenu } from './UserMenu';
import { Container } from './NavigationBarStyled';

export const NavigationBar = () => {
  return (
    <Container>
      <Logo />
      <AuthNav />
      <UserMenu />
    </Container>
  );
};
