import {Flex} from '@chakra-ui/react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
export default function SiteLayout({children}) {
  return (
    <>
      <Header />
      <Flex direction="column" paddingX={{lg: 60}}>
        {children}
      </Flex>
      <Footer />
    </>
  )
}
