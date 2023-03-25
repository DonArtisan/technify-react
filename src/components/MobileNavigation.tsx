import {Flex} from '@chakra-ui/react'
import {IconButton} from '@chakra-ui/react'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function MobileNavigation() {
  return (
    <Flex>
      <IconButton
        aria-label="Button"
        fontSize={{base: '20px', sm: '32px'}}
        color="#fff"
        background="blue.900"
        icon={<GiHamburgerMenu />}
      />
    </Flex>
  )
}
