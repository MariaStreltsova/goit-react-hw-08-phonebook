import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import authOperations from 'redux/auth/auth-operations';
import styled from 'styled-components';
import { useAuth } from 'hooks/useAuth';
import { Box } from 'components/box';
import defaultAvatar from './defaultAvatar.png';

const Avatar = styled.img`
  margin-right: 4px;
`;

const Greeting = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.accentText};
`;
const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const avatar = defaultAvatar;

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Avatar src={avatar} alt="" width="32" />
        <Greeting> Hi, {user.name}</Greeting>
        <Button
          type="button"
          variant="info"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log out
        </Button>
      </Box>
    </>
  );
};

export default UserMenu;
