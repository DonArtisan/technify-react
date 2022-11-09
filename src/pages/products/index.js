import {Flex} from '@chakra-ui/react'
import {useLazyLoadQuery} from 'react-relay'
import {graphql} from 'babel-plugin-relay/macro'
import ProductCard from '../../components/ProductCard'

export default function Products() {
  const {products} = useLazyLoadQuery(
    graphql`
      query productsQuery {
        products(first: 50) {
          edges {
            node {
              id
              name
              description
            }
          }
        }
      }
    `
  )

  return (
    <Flex flexWrap="wrap" paddingBlock="30px">
      {products?.edges.map(({node: product}, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </Flex>
  )
}
