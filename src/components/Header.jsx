import {Icon, SearchIcon} from '@chakra-ui/icons'
import {
  Flex,
  Hide,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Show,
  Stack,
} from '@chakra-ui/react'
import {useContext} from 'react'
import {BsPersonCircle} from 'react-icons/bs'
import {FiShoppingCart} from 'react-icons/fi'
import {Link as ReactRouterLink} from 'react-router-dom'
import {ShoppingCartContext} from '../context/ShoppingCartContext'
import DesktopNavigation from './DesktopNavigation'
import Logo from './Logo'
import MobileNavigation from './MobileNavigation'

const links = [
  {
    text: 'Laptops',
    href: '/',
  },
]

export default function Header() {
  const shopingCartCtx = useContext(ShoppingCartContext)
  const {items} = shopingCartCtx

  return (
    <Flex
      paddingX={{md: 20, lg: 52}}
      paddingY="20px"
      justifyContent="space-between"
      align="center"
      position="sticky"
      top={0}
      zIndex={2}
      boxShadow="md"
      backgroundColor={{base: 'blue.900', lg: '#fff'}}
    >
      <Hide below="lg">
        <Logo />
        <DesktopNavigation links={links} />
      </Hide>
      <Show below="lg">
        <MobileNavigation links={links} />
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
          <Link as={ReactRouterLink} to="/shopping-cart" position="relative">
            <Flex
              backgroundColor="blue.900"
              width="20px"
              height="20px"
              fontSize="14px"
              fontWeight="bold"
              alignItems="center"
              justifyContent="center"
              left="30px"
              position="absolute"
              color="white"
              borderRadius="full"
              zIndex="2"
            >
              {items.length}
            </Flex>
            <IconButton
              fontSize={{base: '20px', sm: '22px'}}
              // marginInlineStart={{base: 10, md: 0, xl: 2}}
              color={{base: '#fff', lg: 'black'}}
              marginInlineEnd={{sm: 2, md: 0, xl: 2}}
              borderRadius="full"
              variant="ghost"
              colorScheme="blue"
              aria-label="why margin"
              icon={<FiShoppingCart />}
            />
          </Link>
          <Icon
            marginInlineEnd={{base: 1, md: 0}}
            color={{base: '#fff', lg: 'black'}}
            fontSize={{base: '20px', sm: '26px'}}
            as={BsPersonCircle}
          />
        </HStack>
      </Flex>
      {/* <Input height="60px" placeholder="Search entire store here..." /> */}
    </Flex>
  )
}
