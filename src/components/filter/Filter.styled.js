import styled from 'styled-components';

export const FilterContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.accentText};

  justify-content: center;
`;
export const FilterInputContainer = styled.div`
  background-color: ${p => p.theme.colors.accentText};
  padding: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  display: flex;
  justify-content: center;
`;

export const FilterInput = styled.input`
  width: 400px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
`;
