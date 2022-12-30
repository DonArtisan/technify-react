import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import {FastField, Form, Formik} from 'formik'
import {graphql, useMutation} from 'react-relay'
import {useAuth} from '../../context/AuthContext'
import {formatGraphQLErrors} from '../../utils/formik/formatGraphQlErrors'

export function Account() {
  const {user} = useAuth()
  const {isOpen, onOpen, onClose} = useDisclosure()

  const [commit, isInFlight] = useMutation(
    graphql`
      mutation AccountMutation($input: UserInput!) {
        userUpdate(input: $input) {
          user {
            person {
              firstName
              lastName
              email
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `
  )

  function handleSubmit(values, formikBag) {
    commit({
      variables: {
        input: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
        },
      },
      onCompleted({userUpdate}) {
        console.log(userUpdate)
        // const {userErrors} = userUpdate

        // if (userErrors && userErrors.length > 0) {
        //   const {errors} = formatGraphQLErrors(userErrors)
        //   formikBag.setErrors(errors)
        // }
        // if (userErrors.length === 0) {
        //   onClose()
        // }
      },
    })
  }

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
              <Text>Name: {user?.firstName}</Text>
              <Text>Last Name: {user?.lastName}</Text>
              <Text>Email: {user?.email}</Text>
              <Text width="fit-content" as="button" onClick={onOpen}>
                Edit
              </Text>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Edit Information</ModalHeader>
                  <ModalCloseButton />
                  <Formik
                    initialValues={{
                      firstName: user?.firstName,
                      lastName: user?.lastName,
                      email: user?.email,
                    }}
                    // validationSchema={SignupSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <ModalBody>
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
                      </ModalBody>
                      <ModalFooter>
                        <HStack>
                          <ButtonGroup variant="outline">
                            <Button isDisabled={isInFlight}>Cancel</Button>
                            <Button type="submit" isLoading={isInFlight}>
                              Update User
                            </Button>
                          </ButtonGroup>
                        </HStack>
                      </ModalFooter>
                    </Form>
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
