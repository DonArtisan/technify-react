import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import * as Yup from 'yup';
import { AUTH_TOKEN } from '../../constants';
import { useAuth } from '../../context/AuthContext';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export function Register() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  let navigate = useNavigate();
  const auth = useAuth();

  const [commit] = useMutation(
    graphql`
      mutation RegisterUserMutation($input: UserInput!) {
        userRegister(input: $input) {
          userToken
          userEdge {
            node {
              firstName
              lastName
            }
          }
        }
      }
    `
  );

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
      onCompleted({ userRegister }) {
        auth.signin(userRegister);
        navigate('/');
      },
    });
  }

  return (
    <Center minH="100vh" bgColor="gray.100">
      <VStack
        borderRadius="lg"
        p="30px"
        bgColor="white"
        spacing={4}
        maxW="500px"
      >
        <Heading>Register</Heading>
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
          {({ errors, touched }) => (
            <Form>
              <VStack>
                <FormControl
                  isInvalid={!!errors.firstName && touched.firstName}
                >
                  <Field
                    as={Input}
                    id="firstName"
                    name="firstName"
                    type="firstName"
                    placeholder="Your First Name"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.lastName && touched.lastName}>
                  <Field
                    as={Input}
                    id="lastName"
                    name="lastName"
                    type="lastName"
                    placeholder="Your Last Name"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <InputGroup>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type={show ? 'text' : 'password'}
                      variant="filled"
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="teal">
                  Sign Up
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </VStack>
    </Center>
  );
}
