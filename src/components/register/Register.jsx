import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
const Container = styled.div`
  min-height: 504px;
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
`;
export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Label>

          <Label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Label>

          <Label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Label>

          <Button type="submit" variant="light">
            Sign up
          </Button>
        </Form>
      </Container>
      {/* )} */}
    </>
  );
}
