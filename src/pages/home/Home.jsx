import {Box, Divider, Flex, Heading, Link} from '@chakra-ui/react'
import {Link as ReactRouterLink} from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'

export default function Home() {
  return (
    <>
      <Box
        marginBlockEnd="30px"
        backgroundColor="gray.300"
        width="full"
        height="400px"
      />
      <Flex width="full" direction="column">
        <Flex
          width="full"
          justify="space-between"
          align="center"
          marginBlockEnd="20px"
        >
          <Heading>New Products</Heading>
          <Link
            textDecor="underline"
            color="#0156FF"
            fontWeight="semibold"
            marginInlineEnd="25px"
            as={ReactRouterLink}
            to="/"
          >
            See all New Products
          </Link>
        </Flex>
        <Flex>
          {[...new Array(6)].map((product, index) => (
            <ProductCard key={index} />
          ))}
        </Flex>
        <Divider />
      </Flex>
    </>
  )
}
