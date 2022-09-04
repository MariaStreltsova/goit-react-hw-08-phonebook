import styled from 'styled-components';
import { Field, Form } from 'formik';
import Button from 'react-bootstrap/Button';
export const Box = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  width: 300px;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;
export const InputName = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.accentText};
`;

export const SubmitButton = styled(Button)`
  display: flex;
  justify-content: center;
  width: 140px;
  padding: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[5]}px;
`;
