import {SearchIcon} from '@chakra-ui/icons'
import {
  Avatar,
  Circle,
  Flex,
  Hide,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Show,
  Text,
} from '@chakra-ui/react'
import {FiShoppingCart} from 'react-icons/fi'
import {Link as ReactRouterLink} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import Navigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

export default function Header() {
  const auth = useAuth()

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
  ]

  return (
    <Flex direction="column" borderBlockEnd="1px" borderColor="gray.400">
      <Flex
        height="44px"
        backgroundColor="blackAlpha.900"
        justify="space-between"
        color="white"
        paddingX={{base: 2, sm: 5, md: 10, lg: 10, xl: 40}}
        align="center"
      >
        <Text>Mon-Thur: 9:00 AM - 5:30 PM</Text>
        <Hide above="lg">
          <Link textDecor="underline" as={ReactRouterLink} to="/">
            Contact Us
          </Link>
        </Hide>
        <Show above="lg">
          <Text>
            Visit our showroom in 1234 Street Adress City Address, 1234 Contact
            Us
          </Text>
          <Text>Call Us: (00) 1234 5678</Text>
        </Show>
      </Flex>
      <Flex
        paddingX={{base: 0, sm: 4, lg: 10}}
        paddingY={{base: 2, lg: 4}}
        justify={{base: 'space-between', lg: 'space-around'}}
        align="center"
        backgroundColor={{base: 'blue.900', lg: '#fff'}}
      >
        <Hide below="lg">
          <Navigation links={LINKS} />
        </Hide>
        <Show below="lg">
          <MobileNavigation links={LINKS} />
          <InputGroup flexGrow={1} marginInlineStart={{base: 0, sm: 0, md: 10}}>
            <InputLeftElement
              paddingInlineStart="2"
              pointerEvents="none"
              children={<SearchIcon size="lg" color="gray.400" />}
            />
            <Input
              borderRadius="full"
              backgroundColor="#fff"
              maxWidth={{base: '210x', sm: '518px'}}
              placeholder="Search Here"
            />
          </InputGroup>
        </Show>
        <Flex
          align="center"
          justify={{md: 'space-evenly'}}
          paddingInlineEnd={{xl: 2}}
        >
          <Show above="lg">
            <IconButton
              color={{lg: 'black'}}
              fontSize={{sm: '22px'}}
              //   size={{lg: 'sm', xl: 'lg'}}
              borderRadius="full"
              //   style={{lg: {height: '32px', width: '32px'}}}
              variant="ghost"
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </Show>
          <HStack
            spacing={{base: 0, sm: 4, md: 4}}
            marginInlineEnd={{base: 2, sm: 2, md: 0}}
          >
            <IconButton
              fontSize={{base: '20px', sm: '22px'}}
              // marginInlineStart={{base: 10, md: 0, xl: 2}}
              color={{base: '#fff', lg: 'black'}}
              marginInlineEnd={{sm: 2, md: 0, xl: 2}}
              borderRadius="full"
              variant="ghost"
              colorScheme="blue"
              aria-label="why margin"
              icon={
                <FiShoppingCart
                //   style={{
                //     lg: {height: '32px', width: '32px'},
                //   }}
                />
              }
            />
            <Menu>
              <Circle as={MenuButton} variant="ghost">
                <Avatar size="sm" />
              </Circle>
              <Portal>
                <MenuList>
                  {auth.user ? (
                    <>
                      <MenuItem as={ReactRouterLink} to="/account">
                        My Account
                      </MenuItem>
                      <MenuItem
                        as={ReactRouterLink}
                        to="/"
                        onClick={() => auth.logout()}
                      >
                        Logout
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem as={ReactRouterLink} to="/register">
                        Create Account
                      </MenuItem>
                      <MenuItem as={ReactRouterLink} to="/login">
                        Signin
                      </MenuItem>
                    </>
                  )}
                </MenuList>
              </Portal>
            </Menu>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  )
}
