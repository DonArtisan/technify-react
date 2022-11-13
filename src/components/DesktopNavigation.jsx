import {Flex, Link} from '@chakra-ui/react'
import {Link as ReactRouterLink} from 'react-router-dom'
import Logo from './Logo'

export default function DesktopNavigation({links}) {
  return (
    <Flex>
      {/* {links.map((link, index) => {
        return (
          <Link
            fontSize={{md: '14px', xl: '16px'}}
            key={index}
            fontWeight="semibold"
            marginInlineEnd={{md: '10px', lg: '14px', xl: '25px'}}
            as={ReactRouterLink}
            to={link.href}
          >
            {link.text}
          </Link>
        )
      })} */}
    </Flex>
  )
}
