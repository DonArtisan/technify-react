import {Flex} from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import ProductCard from '../../../../components/ProductCard/ProductCard'

export default function CategoriesList(params) {
  return (
    <Flex>
      <Box width="233px" height="350px" backgroundColor="gray.200" />
      {[...new Array(5)].map((product, index) => (
        <ProductCard key={index} />
      ))}
    </Flex>
  )
}
