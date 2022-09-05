import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const StyledButton = styled(Button)`
  margin-right: ${p => p.theme.space[3]}px;
`;
const Form = styled.form`
  width: 320px;

  margin-left: 250px;
  margin-top: 200px;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: ${p => p.theme.colors.accentText};
`;
const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;

  font-weight: 700;
  color: #2a363b;
`;
const Container = styled.div`
  min-height: 504px;
`;

const Greeting = styled.div`
  color: ${p => p.theme.colors.white};
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Greeting>
          <h1>WELCOME</h1>
          <p>to Phonebook</p>
        </Greeting>

        <Label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>
        <StyledButton type="submit" variant="info">
          Log in
        </StyledButton>
        <Button type="button" variant="light">
          <Link to="/register">Sign up</Link>
        </Button>
      </Form>
    </Container>
  );
}
