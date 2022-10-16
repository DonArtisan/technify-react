import { Link } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function Footer() {
  const LINKS = [
    {
      title: 'Information',
      links: [
        {
          text: 'About Us',
          href: '/',
        },
        {
          text: 'About Zip',
          href: '/',
        },
        {
          text: 'Privacy Policy',
          href: '/',
        },
        {
          text: 'Search',
          href: '/',
        },
        {
          text: 'Terms',
          href: '/',
        },
        {
          text: 'Order and Returns',
          href: '/',
        },
        {
          text: 'Contact Us',
          href: '/',
        },
      ],
    },
    {
      title: 'PC Parts',
      links: [
        {
          text: 'CPUs',
          href: '/',
        },
        {
          text: 'Add On Cards',
          href: '/',
        },
        {
          text: 'Hard Drives (Internal)',
          href: '/',
        },
        {
          text: 'Graphic Cards',
          href: '/',
        },
        {
          text: 'Keyboard /  Mice',
          href: '/',
        },
        {
          text: 'Order and Returns',
          href: '/',
        },
        {
          text: 'Contact Us',
          href: '/',
        },
      ],
    },
  ];
  return (
    <Flex
      height="500px"
      direction="column"
      backgroundColor="blackAlpha.900"
      color="white"
      paddingX={60}
      align="center"
    >
      <Flex width="full" justify="space-between" marginBlockStart="47px">
        <Box>
          <Heading marginBlockEnd="8px">Sign Up to Our Newsletter</Heading>
          <Text>Be the first to hear about the latest news</Text>
        </Box>
        <Flex direction="row" align="center">
          <Input
            width="380px"
            height="50px"
            marginInlineEnd="22px"
            placeholder="Your Email"
          />
          <Button
            backgroundColor="#0156FF"
            borderRadius="full"
            height="50px"
            width="150px"
          >
            Subscribe
          </Button>
        </Flex>
      </Flex>
      <Flex marginBlock="45px" width="full">
        {LINKS.map((list) => {
          return (
            <Flex direction="column" marginInlineEnd="60px">
              <Heading as="h4" fontSize="18px" marginBlockEnd="24px">
                {list.title}
              </Heading>
              {list.links.map((link) => (
                <Link
                  marginInlineEnd="25px"
                  as={ReactRouterLink}
                  to={link.href}
                >
                  {link.text}
                </Link>
              ))}
            </Flex>
          );
        })}
      </Flex>
      <Divider />
    </Flex>
  );
}
