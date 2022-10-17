import {Flex, Heading, Link} from '@chakra-ui/react'
import {Link as ReactRouterLink} from 'react-router-dom'
import ProductCard from '../../../../components/ProductCard/ProductCard'

export default function CategoriesList({title}) {
  return (
    <Flex>
      <Flex
        direction="column"
        align="center"
        width="233px"
        height="350px"
        backgroundColor="gray.200"
        textAlign="center"
      >
        <Heading marginBlock="150px 100px" as="h4" fontSize="22px">
          {title}
        </Heading>
        <Link
          textDecor="underline"
          fontWeight="semibold"
          as={ReactRouterLink}
          to="/"
        >
          See all Products
        </Link>
      </Flex>

      {[...new Array(5)].map((product, index) => (
        <ProductCard key={index} />
      ))}
    </Flex>
  )
}
