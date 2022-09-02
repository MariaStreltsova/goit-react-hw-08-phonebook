import { NavigationBar } from 'components/navigation/NavigationBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/globalStyle';
import { Box } from '../box';

export const SharedLayout = () => {
  return (
    <Box maxWidth={1440} margin="0 auto" px={16}>
      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </Box>
  );
};
