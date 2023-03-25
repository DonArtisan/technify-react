import {Stack} from '@chakra-ui/react'
import {ReactElement} from 'react'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: ReactElement
}
export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Header />
      <Stack>{children}</Stack>
      <Footer />
    </>
  )
}
