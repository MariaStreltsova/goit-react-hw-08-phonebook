import styled from 'styled-components';

export const ContactsTitle = styled.h2`
  color: ${p => p.theme.colors.white};

  text-shadow: 2px 4px rgba(0, 0, 0, 0.75);
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const List = styled.ul`
  width: 600px;
  margin: 0;
`;

export const ContactsListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${p => p.theme.space[5]}px;
`;
