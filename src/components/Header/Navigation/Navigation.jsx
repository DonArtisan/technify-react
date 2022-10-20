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
      <Button
        paddingX={{md: '20px', lg: '10px', xl: '26px'}}
        color="#0156FF"
        variant="outline"
        borderRadius="50px"
        borderColor="#0156FF"
        as={ReactRouterLink}
        to="/"
      >
        <Text>Deals</Text>
      </Button>
    </Box>
  )
}
