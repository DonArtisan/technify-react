import {
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import CategoriesList from 'components/CategoriesList'
import ProductCard from 'components/ProductCard'
import {FiHeadphones} from 'react-icons/fi'
import {IoIosPricetag, IoMdContact} from 'react-icons/io'
import {graphql, useLazyLoadQuery} from 'react-relay'
import {Link as ReactRouterLink} from 'react-router-dom'
import imageBackground from 'utils/assets/image/bg-1.jpg'
import {homeProductsQuery} from './__generated__/homeProductsQuery.graphql'

export default function Home() {
  const {products} = useLazyLoadQuery<homeProductsQuery>(
    graphql`
      query homeProductsQuery {
        products(first: 10) {
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
    <>
      <Stack
        position="relative"
        width="full"
        paddingBlock="84px"
        height="490px"
        backgroundRepeat="no-repeat"
        bgColor="#191A1E"
        backgroundSize="contain"
        backgroundImage={`url(${imageBackground})`}
        paddingX={{md: 20, lg: 52}}
        textAlign="left"
        gap="20px"
        justifyContent="center"
      >
        <Heading color="white" fontWeight="light" fontSize="58px">
          Lorem ipsum dolor
        </Heading>
        <Heading fontWeight="light" fontSize="22px" color="#8D8C8E">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br />
          repudiandae esse sunt distinctio rerum similique
        </Heading>
        <Button textTransform="uppercase" fontSize="12px">
          leer mas
        </Button>
      </Stack>
      <Flex
        width="full"
        direction="column"
        paddingBlock="60px"
        paddingX={{md: 20, lg: 52}}
      >
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
        <Flex width="full" paddingBlock="20px" gap="32px" overflowX="scroll">
          {products?.edges.map(({node: product}) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Flex>
        <Divider marginBlock="20px" />
        <CategoriesList
        // title="Custom Builds"
        />
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
