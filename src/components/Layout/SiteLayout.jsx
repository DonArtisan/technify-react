import { Flex } from '@chakra-ui/react';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
export default function SiteLayout({ children }) {
  return (
    <>
      <NavigationBar />

      <Flex direction="column" paddingX={60}>
        {children}
      </Flex>
      <Footer />
    </>
  );
}
