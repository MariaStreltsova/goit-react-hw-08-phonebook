import { useDispatch } from 'react-redux';

import authOperations from 'redux/auth/auth-operations';

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
        <img src={avatar} alt="" width="32" />
        <span> Welcome, {user.name}</span>
        <button type="button" onClick={() => dispatch(authOperations.logOut())}>
          Log out
        </button>
      </Box>
    </>
  );
};

export default UserMenu;
