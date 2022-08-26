import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { register } from '../../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/contacts" replace={true} />
      ) : (
        <div>
          <h1>Registration</h1>

          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </label>

            <label style={styles.label}>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>

            <label style={styles.label}>
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Sign up</button>
          </form>
        </div>
      )}
    </>
  );
}
