import {Flex} from '@chakra-ui/react'
import Footer from './Footer'
import Header from './Header'
export default function Layout({children}) {
  return (
    <>
      <Header />
      <Flex direction="column" paddingX={{md: 20, lg: 52}}>
        {children}
      </Flex>
      <Footer />
    </>
  )
}
