import Header from '../components/Header/Header.tsx';
import { Box } from '@mantine/core';
import { Outlet } from 'react-router';

const MainLayout = () => (
  <Box mih={'100vh'} bg={'#F6F6F7'}>
    <Header />
    <Outlet />
  </Box>
);

export default MainLayout;
