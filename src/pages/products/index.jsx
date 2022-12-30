import {Flex} from '@chakra-ui/react'
import {graphql, useLazyLoadQuery} from 'react-relay'
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
              currentPrice
            }
          }
        }
      }
    `
  )
  console.log(products)

  return (
    <Flex
      flexWrap="wrap"
      paddingBlock="30px"
      gap="32px"
      justifyContent="center"
      paddingX={{md: 20, lg: 52}}
    >
      {products?.edges.map(({node: product}, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </Flex>
  )
}
