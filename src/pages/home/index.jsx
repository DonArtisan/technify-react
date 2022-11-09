import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
} from '@chakra-ui/react'
import {graphql} from 'babel-plugin-relay/macro'
import {FiHeadphones} from 'react-icons/fi'
import {IoIosPricetag, IoMdContact} from 'react-icons/io'
import {useLazyLoadQuery} from 'react-relay'
import {Link as ReactRouterLink} from 'react-router-dom'
import CategoriesList from '../../components/CategoriesList'
import ProductCard from '../../components/ProductCard'
import {useAuth} from '../../context/AuthContext'

export default function Home() {
  const {products} = useLazyLoadQuery(
    graphql`
      query homeProductsQuery {
        products(first: 10) {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `
  )

  return (
    <>
      <Box
        marginBlockEnd="30px"
        backgroundColor="gray.300"
        width="full"
        height="400px"
      />
      <Flex width="full" direction="column">
        <Flex justify="space-between" align="center" marginBlockEnd="20px">
          <Heading>New Products</Heading>
          <Link
            textDecor="underline"
            color="blue.900"
            fontWeight="semibold"
            marginInlineEnd="25px"
            as={ReactRouterLink}
            to="/"
          >
            See all New Products
          </Link>
        </Flex>
        <Flex width="100%" maxWidth="full" overflowX="scroll">
          {products?.edges.map(({node: product}, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Flex>
        <Divider marginBlock="20px" />
        <CategoriesList title="Custom Builds" />
        <Divider marginBlockStart="30px" />
        <HStack spacing="100px" justify="center" marginBlock="40px">
          <Flex
            width="265px"
            direction="column"
            justify="center"
            align="center"
          >
            <Flex
              height="65px"
              width="65px"
              bgColor="blue.900"
              borderRadius="50%"
              justify="center"
              align="center"
            >
              <Icon as={FiHeadphones} color="white" w={8} h={8} />
            </Flex>
            <Heading as="h4" fontSize="20px" marginBlock="24px 13px">
              Product Support
            </Heading>
            <Text textAlign="center" color="gray.600">
              Up to 3 years on-site warranty available for your peace of mind.
            </Text>
          </Flex>
          <Flex
            width="265px"
            direction="column"
            justify="center"
            align="center"
          >
            <Flex
              height="65px"
              width="65px"
              bgColor="blue.900"
              borderRadius="50%"
              justify="center"
              align="center"
            >
              <Icon as={IoMdContact} color="white" w={8} h={8} />
            </Flex>
            <Heading as="h4" fontSize="20px" marginBlock="24px 13px">
              Personal Account
            </Heading>
            <Text textAlign="center" color="gray.600">
              With big discounts, free delivery and a dedicated support
              specialist.
            </Text>
          </Flex>
          <Flex
            width="265px"
            direction="column"
            justify="center"
            align="center"
          >
            <Flex
              height="65px"
              width="65px"
              bgColor="blue.900"
              borderRadius="50%"
              justify="center"
              align="center"
            >
              <Icon as={IoIosPricetag} color="white" w={8} h={8} />
            </Flex>
            <Heading as="h4" fontSize="20px" marginBlock="24px 13px">
              Amazing Savings
            </Heading>
            <Text textAlign="center" color="gray.600">
              Up to 70% off new Products, you can be sure of the best price.
            </Text>
          </Flex>
        </HStack>
      </Flex>
    </>
  )
}
