import {
  Icon,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  ListItem,
  UnorderedList,
  Link as LinkC,
} from '@chakra-ui/react';
import { graphql } from 'babel-plugin-relay/macro';
import { Field, Form, Formik } from 'formik';
import { useMutation } from 'react-relay';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import { formatGraphQLErrors } from '../../utils/formik/formatGraphQlErrors';
import { servicesMenu } from '../../utils/servicesmenu/servicesMenu';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});
export function Login() {
  let navigate = useNavigate();
  const auth = useAuth();

  const [commit] = useMutation(
    graphql`
      mutation LoginUserMutation($input: UserLoginInput!) {
        userLogin(input: $input) {
          userToken
          userAuth {
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
  );
  function handleSubmit(values, formikBag) {
    commit({
      variables: {
        input: {
          email: values.email,
          password: values.password,
        },
      },
      onCompleted({ userLogin }) {
        const { userErrors } = userLogin;

        if (userErrors && userErrors.length > 0) {
          const { errors } = formatGraphQLErrors(userErrors);
          formikBag.setErrors(errors);
        }
        if (userErrors.length === 0) {
          auth.login(userLogin);
          console.log('pasa?');
          navigate('/');
        }
      },
      onError({ userLogin }) {
        console.log(userLogin);
      },
    });
  }
  return (
    <Flex flexDir="column" rowGap="16px">
      <Heading
        padding={{
          base: '16px 16px 0px',
          md: '32px 32px 0px',
          '2xl': '56px 262px 0px',
        }}
        fontSize="18px"
        fontWeight="600"
      >
        Customer Login
      </Heading>
      <Flex
        gap={{ base: '16px', md: '22px' }}
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={{ lg: 'center' }}
      >
        <Flex
          margin="0px 16px"
          padding="20px 18px"
          bg="bgBeige"
          flexDir="column"
          rowGap={{ base: '16px', md: '26px' }}
        >
          <Text fontSize="14px" fontWeight="600" color="text">
            Registered Customers
          </Text>
          <Text>If you have an account, sign in with your email address.</Text>

          {/* <Form> */}
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Flex flexDirection="column" rowGap="16px">
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
                  <FormControl pos="relative">
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

                  <Flex>
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
        flexDirection={{ base: 'column', md: 'row' }}
        rowGap="20px"
        alignItems={{ base: 'center', md: 'baseline' }}
        p="26px"
        justifyContent={{ lg: 'center' }}
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
  );
}
