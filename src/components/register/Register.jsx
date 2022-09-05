import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const SignUpBtn = styled(Button)`
  font-weight: ${p => p.theme.fontWeights.bold}; ;
`;
const Container = styled.div`
  min-height: 504px;
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
export const InputContainer = styled.div`
  background-color: ${p => p.theme.colors.accentText};
  padding: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
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
            Name{' '}
            <InputContainer>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </InputContainer>
          </Label>

          <Label>
            Email
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
            Password
            <InputContainer>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </InputContainer>
          </Label>

          <SignUpBtn type="submit" variant="info">
            Sign up
          </SignUpBtn>
        </Form>
      </Container>
      {/* )} */}
    </>
  );
}
