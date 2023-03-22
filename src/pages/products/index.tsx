import {Flex} from '@chakra-ui/react'
import {graphql, useLazyLoadQuery} from 'react-relay'
import {Product} from '../../../generated/graphql'
import ProductCard from '../../components/ProductCard'
import {productsQuery} from './__generated__/productsQuery.graphql'

export default function Products() {
  const {products} = useLazyLoadQuery<productsQuery>(
    graphql`
      query productsQuery {
        products(first: 50) {
          edges {
            node {
              id
              name
              description
              currentPrice
              image {
                originalSrc
              }
            }
          }
        }
      }
    `,
    {}
  )

  return (
    <Flex
      flexWrap="wrap"
      paddingBlock="30px"
      gap="32px"
      justifyContent="center"
      paddingX={{md: 20, lg: 52}}
    >
      {products?.edges.map(({node: product}) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Flex>
  )
}
