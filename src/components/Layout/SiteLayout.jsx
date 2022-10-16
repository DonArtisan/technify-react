import { Box } from '@chakra-ui/react';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
export default function SiteLayout({ children }) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
