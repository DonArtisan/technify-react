import {Tabs} from '@chakra-ui/react'
import {TabPanel} from '@chakra-ui/react'
import {Divider} from '@chakra-ui/react'
import {useDisclosure} from '@chakra-ui/react'
import {ModalOverlay} from '@chakra-ui/react'
import {ModalHeader} from '@chakra-ui/react'
import {ModalBody} from '@chakra-ui/react'
import {Button} from '@chakra-ui/react'
import {ModalCloseButton} from '@chakra-ui/react'
import {ModalContent} from '@chakra-ui/react'
import {Modal} from '@chakra-ui/react'
import {Text} from '@chakra-ui/react'
import {TabPanels} from '@chakra-ui/react'
import {TabList} from '@chakra-ui/react'
import {Tab} from '@chakra-ui/react'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
} from '@chakra-ui/react'
import {useAuth} from '../../context/AuthContext'

export function Dashboard() {
  const auth = useAuth()

  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Flex direction="column">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage href="#">
            Account
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading>My Dashboard</Heading>
      <Tabs orientation="vertical">
        <TabList>
          <Tab>Account Dashboard</Tab>
          <Tab>Stored Payment Method</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex direction="column">
              <Heading as="h4" fontSize="lg" marginBlockEnd="4px">
                Account Information
              </Heading>
              <Divider />
              <Text>Name: {auth.user?.firstName}</Text>
              <Text>Email: {auth.user?.lastName}</Text>
              <Text width="fit-content" as="button" onClick={onOpen}>
                Edit
              </Text>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Edit Information</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>dum dum dum</ModalBody>
                </ModalContent>
              </Modal>
            </Flex>
          </TabPanel>
          <TabPanel>S</TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}
