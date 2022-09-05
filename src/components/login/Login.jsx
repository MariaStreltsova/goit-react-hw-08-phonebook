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
const Input = styled.input`
  width: 250px;
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
export const InputContainer = styled.div`
  background-color: ${p => p.theme.colors.accentText};
  padding: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
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
          Email:{' '}
          <InputContainer>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </InputContainer>
        </Label>

        <Label>
          Password:
          <InputContainer>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </InputContainer>
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
