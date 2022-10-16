import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { graphql } from 'babel-plugin-relay/macro';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useMutation } from 'react-relay';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import { formatGraphQLErrors } from '../../utils/formik/formatGraphQlErrors';

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
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        },
      },
      onCompleted({ userRegister }) {
        const { userErrors } = userRegister;

        if (userErrors && userErrors.length > 0) {
          const { errors } = formatGraphQLErrors(userErrors);
          formikBag.setErrors(errors);
        }
        if (userErrors.length === 0) {
          auth.signin(userRegister);
          navigate('/');
        }
      },
      onError({ userRegister }) {
        console.log(userRegister);
      },
    });
  }

  return (
    <Flex
      minH="100vh"
      bgColor="graylight"
      align="center"
      //   justifyContent="center"
      flexDirection="column"
    >
      <Flex
        flexDir="column"
        borderRadius="lg"
        p="30px"
        bgColor="white"
        maxW="400px"
        mb="16px"
      >
        <Heading as="h6" fontSize="16px" marginBlockEnd="8px">
          Welcome!
        </Heading>
        <Text color="text" fontSize="24px" marginBlockEnd="16px">
          Enter your details to create an account.
        </Text>

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
              <Stack spacing={4}>
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
                <FormControl isInvalid={!!errors.lastName && touched.lastName}>
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
                <FormControl isInvalid={!!errors.password && touched.password}>
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
              </Stack>
              <Button
                type="submit"
                marginBlockStart="32px"
                width="336px"
                height="48px"
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
      <Text color="#9A9AA4" maxW="400px" align="center">
        By creating an account, you agree to our Terms.
      </Text>
    </Flex>
  );
}
