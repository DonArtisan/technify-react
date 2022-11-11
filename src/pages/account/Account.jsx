import {Tabs} from '@chakra-ui/react'
import {TabPanel} from '@chakra-ui/react'
import {Divider} from '@chakra-ui/react'
import {useDisclosure} from '@chakra-ui/react'
import {ModalOverlay} from '@chakra-ui/react'
import {ModalHeader} from '@chakra-ui/react'
import {ModalBody} from '@chakra-ui/react'
import {Button} from '@chakra-ui/react'
import {ModalCloseButton} from '@chakra-ui/react'
import {FormControl} from '@chakra-ui/react'
import {Input} from '@chakra-ui/react'
import {ModalFooter} from '@chakra-ui/react'
import {HStack} from '@chakra-ui/react'
import {FormErrorMessage} from '@chakra-ui/react'
import {FormLabel} from '@chakra-ui/react'
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
import {FastField} from 'formik'
import {Formik} from 'formik'
import {Form} from 'formik'
import {useAuth} from '../../context/AuthContext'

export function Account() {
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
                  <Formik>
                    <ModalBody>
                      <Form>
                        <FastField name="firstName">
                          {({field, meta: {error, touched}}) => (
                            <FormControl isInvalid={!!error && touched}>
                              <FormLabel>First Name</FormLabel>
                              <Input {...field} />
                              <FormErrorMessage>{error}</FormErrorMessage>
                            </FormControl>
                          )}
                        </FastField>
                        <FastField name="lastName">
                          {({field, meta: {error, touched}}) => (
                            <FormControl isInvalid={!!error && touched}>
                              <FormLabel>Last Name</FormLabel>
                              <Input {...field} />
                              <FormErrorMessage>{error}</FormErrorMessage>
                            </FormControl>
                          )}
                        </FastField>
                        <FastField name="email">
                          {({field, meta: {error, touched}}) => (
                            <FormControl isInvalid={!!error && touched}>
                              <FormLabel>Email</FormLabel>
                              <Input {...field} />
                              <FormErrorMessage>{error}</FormErrorMessage>
                            </FormControl>
                          )}
                        </FastField>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <HStack>
                        <Button variant="">Cancel</Button>
                        <Button variant="unstyled">Update User</Button>
                      </HStack>
                    </ModalFooter>
                  </Formik>
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
