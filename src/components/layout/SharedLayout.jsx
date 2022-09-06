import { NavigationBar } from 'components/navigation/NavigationBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/globalStyle';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  background-image: url(https://mobimg.b-cdn.net/v3/fetch/fe/fe60b47090e616a0f7a60666f96c62f0.jpeg?w=1470&r=0.5625);
  background-position: top, right;
  background-size: cover;
  background-repeat: no-repeat;
`;
const SharedLayout = () => {
  return (
    <BackgroundContainer>
      <NavigationBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </BackgroundContainer>
  );
};

export default SharedLayout;
//  maxWidth={1440} margin="0 auto" px={16}
