import {Box, Button, Link} from '@chakra-ui/react'
import {Link as ReactRouterLink} from 'react-router-dom'

export default function Navigation({links}) {
  return (
    <Box marginInlineStart={36}>
      {links.map((link, index) => {
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
        )
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
  )
}
