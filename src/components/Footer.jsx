import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Link,
  Show,
  Text,
} from '@chakra-ui/react'
import {Link as ReactRouterLink} from 'react-router-dom'

const links = [
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
]

export default function Footer() {
  return (
    <Flex
      marginBlockStart="50px"
      height={{base: '700px', lg: '500px'}}
      direction="column"
      backgroundColor="blackAlpha.900"
      color="white"
      paddingX={{base: 0, sm: 5, md: 10, lg: 40}}
      align="center"
    >
      <Flex
        direction={{base: 'column', md: 'row'}}
        width="full"
        justify="space-between"
        marginBlockStart="47px"
        marginBlockEnd="25px"
      >
        <Box textAlign={{base: 'center'}} marginBlockEnd={{base: 8}}>
          <Heading marginBlockEnd="8px" fontSize={{md: 22}}>
            Sign Up to Our Newsletter
          </Heading>
          <Text>Be the first to hear about the latest news</Text>
        </Box>
        <Flex direction="row" justify={{base: 'center'}}>
          <Input
            width={{base: '186px', lg: '380px'}}
            height="50px"
            marginInlineEnd="22px"
            placeholder="Your Email"
          />
          <Button
            backgroundColor="blue.900"
            borderRadius="full"
            height="50px"
            width={{md: '130px', lg: '150px'}}
          >
            Subscribe
          </Button>
        </Flex>
      </Flex>
      <Show above="lg">
        <Flex marginBlockEnd="45px" width="full">
          {links.map((list, index) => {
            return (
              <Flex direction="column" marginInlineEnd="60px" key={index}>
                <Heading as="h4" fontSize="18px" marginBlockEnd="14px">
                  {list.title}
                </Heading>
                {list.links.map((link, i) => (
                  <Link
                    marginInlineEnd="25px"
                    as={ReactRouterLink}
                    to={link.href}
                    key={i}
                  >
                    {link.text}
                  </Link>
                ))}
              </Flex>
            )
          })}
        </Flex>
      </Show>
      <Show below="md">
        <Flex marginBlockStart="20px" width="full">
          <Accordion width="full">
            {links.map((list, index) => {
              return (
                <AccordionItem key={index}>
                  <AccordionButton>
                    <Box fontWeight="semibold" flex="1" textAlign="left">
                      {list.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  {list.links.map((link, i) => (
                    <AccordionPanel paddingBlockEnd={1} key={i}>
                      <Link as={ReactRouterLink} to={link.href} key={i}>
                        {link.text}
                      </Link>
                    </AccordionPanel>
                  ))}
                </AccordionItem>
              )
            })}
          </Accordion>
        </Flex>
      </Show>

      <Divider />
    </Flex>
  )
}
