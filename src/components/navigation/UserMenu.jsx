import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import authOperations from 'redux/auth/auth-operations';
import { Avatar, Greeting } from './UserMenuStyled';
import { useAuth } from 'hooks/useAuth';
import { Box } from 'components/box';
import defaultAvatar from './defaultAvatar.png';

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
