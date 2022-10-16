import { SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, IconButton, Link, Text } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

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
    <Flex direction="column">
      <Flex
        height="44px"
        backgroundColor="blackAlpha.900"
        justify="space-between"
        color="white"
        paddingX={20}
        align="center"
      >
        <Text>Mon-Thur: 9:00 AM - 5:30 PM</Text>
        <Text>
          Visit our showroom in 1234 Street Adress City Address, 1234 Contact Us
        </Text>
        <Text>Call Us: (00) 1234 5678</Text>
      </Flex>
      <Flex paddingX={20} paddingY={4} justify="space-between">
        <Box>
          {LINKS.map((link) => {
            return (
              <Link
                fontWeight="semibold"
                marginInlineEnd="20px"
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
        <Flex>
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<FiShoppingCart />}
          />
        </Flex>
        {/* <Input height="60px" placeholder="Search entire store here..." /> */}
      </Flex>
    </Flex>
  );
}
