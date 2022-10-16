import { Box } from '@chakra-ui/react';
import NavigationBar from '../NavigationBar/NavigationBar';
export default function SiteLayout({ children }) {
  return (
    <>
      <NavigationBar />
      {children}
      <Box />
    </>
  );
}
