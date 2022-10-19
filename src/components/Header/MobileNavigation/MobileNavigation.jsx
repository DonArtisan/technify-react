import {Flex} from '@chakra-ui/react'
import {IconButton} from '@chakra-ui/react'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function MobileNavigation({links}) {
  return (
    <Flex width="full">
      <IconButton
        size="lg"
        color="#fff"
        background="#0156FF"
        icon={<GiHamburgerMenu style={{height: '26px', width: '20px'}} />}
      />
    </Flex>
  )
}
