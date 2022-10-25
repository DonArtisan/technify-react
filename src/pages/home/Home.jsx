import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'
import {FiHeadphones} from 'react-icons/fi'
import {IoIosPricetag, IoMdContact} from 'react-icons/io'
import {Link as ReactRouterLink} from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import CategoriesList from './components/CategoriesList/CategoriesList'

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
        <Flex justify="space-between" align="center" marginBlockEnd="20px">
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
        <Flex width="100%" maxWidth="full" overflowX="scroll">
          {[...new Array(6)].map((product, index) => (
            <ProductCard key={index} />
          ))}
        </Flex>
        <Divider marginBlock="20px" />
        <Flex
          marginBlockEnd="38px"
          width="100%"
          maxWidth="full"
          overflowX="scroll"
        >
          <CategoriesList title="Custom Builds" />
        </Flex>
        <Box>
          <Tabs>
            <TabList>
              <Tab>MSI GS Series</Tab>
              <Tab>MSI GT Series</Tab>
              <Tab>MSI GL Series</Tab>
            </TabList>
            <TabPanels>
              <TabPanel width="100%" maxWidth="full" overflowX="scroll">
                <CategoriesList title="MSI Laptops" />
              </TabPanel>
              <TabPanel width="100%" maxWidth="full" overflowX="scroll">
                <CategoriesList title="MSI Laptops" />
              </TabPanel>
              <TabPanel width="100%" maxWidth="full" overflowX="scroll">
                <CategoriesList title="MSI Laptops" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box marginBlockEnd="30px">
          <Tabs>
            <TabList>
              <Tab>MSI Infinute Series</Tab>
              <Tab>MSI Triden</Tab>
              <Tab>MSI GL Series</Tab>
            </TabList>
            <TabPanels width="100%" maxWidth="full" overflowX="scroll">
              <TabPanel paddingBlock="20px 0" paddingX="0">
                <CategoriesList title="Desktops" />
              </TabPanel>
              <TabPanel width="100%" maxWidth="full" overflowX="scroll">
                <CategoriesList title="Desktops" />
              </TabPanel>
              <TabPanel width="100%" maxWidth="full" overflowX="scroll">
                <CategoriesList title="Desktops" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Flex width="100%" maxWidth="full" overflowX="scroll">
          <CategoriesList title="Gaming Monitors" />
        </Flex>
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
              bgColor="#0156FF"
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
              bgColor="#0156FF"
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
              bgColor="#0156FF"
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
