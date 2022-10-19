import {Icon, SearchIcon} from '@chakra-ui/icons'
import {
  Flex,
  Hide,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Show,
  Text,
} from '@chakra-ui/react'
import {BsPersonCircle} from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import {Link as ReactRouterLink} from 'react-router-dom'
import MobileNavigation from './MobileNavigation/MobileNavigation'
import Navigation from './Navigation/Navigation'

export default function Header() {
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
        paddingX={{base: '0', md: 28, lg: 60}}
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
        paddingX={{base: 4, lg: 60}}
        paddingY={{base: 2, lg: 4}}
        justify="space-between"
        align="center"
        backgroundColor={{base: '#0156FF', lg: '#fff'}}
      >
        <Show above="lg">
          <Navigation links={LINKS} />
        </Show>
        <Show below="lg">
          <MobileNavigation links={LINKS} />
        </Show>
        <Flex align="center" paddingInlineEnd={2}>
          <Show below="lg">
            <InputGroup>
              <InputLeftElement
                paddingInlineStart="2"
                pointerEvents="none"
                children={<SearchIcon size="lg" color="gray.400" />}
              />
              <Input
                borderRadius="full"
                backgroundColor="#fff"
                width="518px"
                placeholder="Search Here"
              />
            </InputGroup>
          </Show>
          <Show above="lg">
            <IconButton
              size="lg"
              borderRadius="full"
              variant="ghost"
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </Show>

          <IconButton
            marginInlineStart={8}
            color={{base: '#fff', lg: 'black'}}
            marginInlineEnd="25px"
            borderRadius="full"
            variant="ghost"
            colorScheme="blue"
            aria-label="Search database"
            icon={<FiShoppingCart style={{height: '32px', width: '32px'}} />}
          />
          <Icon color="#fff" height="32px" width="32px" as={BsPersonCircle} />
          {/* <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" /> */}
        </Flex>
        {/* <Input height="60px" placeholder="Search entire store here..." /> */}
      </Flex>
    </Flex>
  )
}
