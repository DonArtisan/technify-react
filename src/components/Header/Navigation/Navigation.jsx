import {Text} from '@chakra-ui/react'
import {Box, Button, Link} from '@chakra-ui/react'
import {Link as ReactRouterLink} from 'react-router-dom'

export default function Navigation({links}) {
  return (
    <Box justifyContent={{lg: 'space-around'}}>
      {links.map((link, index) => {
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
      })}
      <Button variant="outline" as={ReactRouterLink} to="/">
        deals
      </Button>
    </Box>
  )
}
