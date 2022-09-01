import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <>
      <NavLink to="/contacts">CONTACTS</NavLink>
      <div>
        <span> Welcome, {name}</span>
        <button type="button" onClick={() => dispatch(logOut())}>
          Log out
        </button>
      </div>
    </>
  );
};
