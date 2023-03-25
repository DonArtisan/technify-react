import {Flex, Heading} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

export default function Logo() {
  return (
    <Flex>
      <Heading as={Link} textTransform="uppercase" to="/">
        technify
      </Heading>
    </Flex>
  )
}
