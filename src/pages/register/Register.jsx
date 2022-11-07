import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  Link as LinkC,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import {graphql} from 'babel-plugin-relay/macro'
import {Field, Form, Formik} from 'formik'
import {useState} from 'react'
import {useMutation} from 'react-relay'
import {Link, useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import {useAuth} from '../../context/AuthContext'
import {formatGraphQLErrors} from '../../utils/formik/formatGraphQlErrors'
import {servicesMenu} from '../../utils/servicesmenu/servicesMenu'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
})

export function Register() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  let navigate = useNavigate()
  const auth = useAuth()

  const [commit] = useMutation(
    graphql`
      mutation RegisterUserMutation($input: UserInput!) {
        userRegister(input: $input) {
          userToken
          user {
            firstName
            lastName
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
          password: values.password,
        },
      },
      onCompleted({userRegister}) {
        const {userErrors} = userRegister

        if (userErrors && userErrors.length > 0) {
          const {errors} = formatGraphQLErrors(userErrors)
          formikBag.setErrors(errors)
        }
        if (userErrors.length === 0) {
          auth.signin(userRegister)
          navigate('/')
        }
      },
      onError({userRegister}) {
        console.log(userRegister)
      },
    })
  }

  return (
    <Flex flexDir={{base: 'column'}} rowGap="16px">
      <Heading
        padding={{
          base: '16px 16px 0px',
          md: '32px 32px 0px',
          '2xl': '56px 262px 0px',
        }}
        fontSize="18px"
        fontWeight="600"
      >
        Customer Register
      </Heading>
      <Flex
        gap={{base: '16px', md: '22px'}}
        flexDirection={{base: 'column', md: 'row'}}
        justifyContent={{lg: 'center'}}
      >
        <Flex
          margin="0px 16px"
          padding="20px 18px"
          borderRadius="10px"
          bg="bgBeige"
          flexDir="column"
          rowGap={{base: '16px', md: '26px'}}
        >
          <Text fontSize="14px" fontWeight="600" color="text">
            Registered Customers
          </Text>
          <Text>If you have an account, sign in with your email address.</Text>

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {({errors, touched}) => (
              <Form>
                <Flex rowGap="16px" flexDirection="column">
                  <FormControl
                    isInvalid={!!errors.firstName && touched.firstName}
                  >
                    <FormLabel fontWeight="700" color="text">
                      First Name:
                    </FormLabel>
                    <Field
                      as={Input}
                      id="firstName"
                      name="firstName"
                      type="name"
                      bg="graylight"
                    />
                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.lastName && touched.lastName}
                  >
                    <FormLabel fontWeight="700" color="text">
                      Last Name:
                    </FormLabel>
                    <Field
                      as={Input}
                      id="lastName"
                      name="lastName"
                      type="name"
                      bg="graylight"
                    />
                    <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel fontWeight="700" color="text">
                      Email:
                    </FormLabel>

                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      bg="graylight"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel fontWeight="700" color="text">
                      Password:
                    </FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      bg="graylight"
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>

                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    columnGap="16px"
                  >
                    <Button
                      w="133px"
                      borderRadius="50px"
                      color="white"
                      bg="bgPrimary"
                      type="submit"
                    >
                      Submit
                    </Button>
                    <Link to="/">
                      <LinkC color="bgPrimary">Forgot Your Password?</LinkC>
                    </Link>
                  </Flex>
                </Flex>
              </Form>
            )}
          </Formik>
        </Flex>
        <Flex
          flexDirection="column"
          margin="0px 16px"
          borderRadius="10px"
          rowGap="22px"
          padding="70px 18px 33px 18px"
          bg="bgBeige"
        >
          <Text fontSize="14px" fontWeight="600" color="text">
            New Customer?
          </Text>
          <Flex flexDirection="column" rowGap="48px">
            <Text>Creating an account has many benefits:</Text>
            <UnorderedList>
              <ListItem>Check out faster</ListItem>
              <ListItem>Keep more that on address</ListItem>
              <ListItem>Track orders and more</ListItem>
            </UnorderedList>
          </Flex>
          <Link to="/register">
            <Button
              as="a"
              height="38px"
              borderRadius="50px"
              color="white"
              bg="bgPrimary"
            >
              Create An Account
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Flex
        bg="bgBeige"
        borderRadius="10px"
        flexDirection={{base: 'column', md: 'row'}}
        rowGap="20px"
        alignItems={{base: 'center', md: 'baseline'}}
        p="26px"
        justifyContent={{lg: 'center'}}
      >
        {servicesMenu.map((service, index) => (
          <Box rowGap="6px" textAlign="center" w="300px" key={index}>
            <Icon
              borderRadius="50px"
              w="45px"
              h="45px"
              p="12px"
              bg="bgPrimary"
              as={service.icon}
            ></Icon>
            <Text fontSize="14px" fontWeight="700">
              {service.name}
            </Text>
            <Text>{service.description}</Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}
