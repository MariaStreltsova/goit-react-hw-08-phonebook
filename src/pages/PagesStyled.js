import styled from 'styled-components';

export const ContactsContainer = styled.div`
  height: 705px;
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(
    to top,
    rgba(213, 213, 224, 0.6),
    rgba(213, 213, 224, 0.01)
  );
`;
export const Message = styled.p`
  width: fit-content;
  margin: 0 auto;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  opacity: 0.9;
  background-color: ${p => p.theme.colors.background};
  text-shadow: ${p => p.theme.textShadow.standart};
`;
