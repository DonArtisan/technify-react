import {Flex, Heading, Link} from '@chakra-ui/react'
import {graphql} from 'babel-plugin-relay/macro'
import {useLazyLoadQuery} from 'react-relay'
import {Link as ReactRouterLink} from 'react-router-dom'
import ProductCard from './ProductCard'

export default function CategoriesList() {
  const {categories} = useLazyLoadQuery(
    graphql`
      query CategoriesListQuery {
        categories(first: 4) {
          edges {
            node {
              id
              name
              products(first: 6) {
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
          }
        }
      }
    `
  )

  return (
    <>
      {categories?.edges.map(({node: category}, index) => (
        <Flex
          key={index}
          marginBlockEnd="38px"
          width="100%"
          maxWidth="full"
          overflowX="scroll"
        >
          <Flex paddingBlock="20px" gap="32px">
            <Flex
              direction="column"
              align="center"
              width="234px"
              // height="350px"
              backgroundColor="gray.200"
              textAlign="center"
            >
              <Heading marginBlock="150px 100px" as="h4" fontSize="22px">
                {/* {title} */}
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
            {category.products?.edges.map(({node: product}, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </Flex>
        </Flex>
      ))}
    </>
  )
}
