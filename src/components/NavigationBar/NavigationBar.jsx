import { SearchIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  Text,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function NavigationBar() {
  const LINKS = [
    {
      text: 'Laptops',
      href: '/',
    },
    {
      text: 'Desktop PCs',
      href: '/',
    },
    {
      text: 'Networking Devices',
      href: '/',
    },
    {
      text: 'Printers & Scanners',
      href: '/',
    },
    {
      text: 'PC Parts',
      href: '/',
    },
    {
      text: 'All Other Products',
      href: '/',
    },
    {
      text: 'Repairs',
      href: '/',
    },
  ];

  return (
    <Flex direction="column" borderBlockEnd="1px" borderColor="gray.400">
      <Flex
        height="44px"
        backgroundColor="blackAlpha.900"
        justify="space-between"
        color="white"
        paddingX={60}
        align="center"
      >
        <Text>Mon-Thur: 9:00 AM - 5:30 PM</Text>
        <Text>
          Visit our showroom in 1234 Street Adress City Address, 1234 Contact Us
        </Text>
        <Text>Call Us: (00) 1234 5678</Text>
      </Flex>
      <Flex paddingX={60} paddingY={4} justify="space-between" align="center">
        <Box marginInlineStart="120px">
          {LINKS.map((link, index) => {
            return (
              <Link
                key={index}
                fontWeight="semibold"
                marginInlineEnd="25px"
                as={ReactRouterLink}
                to={link.href}
              >
                {link.text}
              </Link>
            );
          })}
          <Button
            paddingX="26px"
            color="#0156FF"
            variant="outline"
            borderRadius="50px"
            borderColor="#0156FF"
            as={ReactRouterLink}
            to="/"
          >
            Our Deals
          </Button>
        </Box>
        <Flex align="center">
          <IconButton
            size="lg"
            borderRadius="full"
            variant="ghost"
            colorScheme="blue"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
          <IconButton
            marginInlineEnd="25px"
            size="lg"
            borderRadius="full"
            variant="ghost"
            colorScheme="blue"
            aria-label="Search database"
            icon={<FiShoppingCart />}
          />
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Flex>
        {/* <Input height="60px" placeholder="Search entire store here..." /> */}
      </Flex>
    </Flex>
  );
}
