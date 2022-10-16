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
import { useMutation } from 'react-relay';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import { formatGraphQLErrors } from '../../utils/formik/formatGraphQlErrors';

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
    <Flex
      minH="100vh"
      bgColor="graylight"
      align="center"
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
          Welcome back.
        </Heading>
        <Text color="text" fontSize="24px" marginBlockEnd="16px">
          Enter your details below.
        </Text>

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
              <Stack spacing={4}>
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
              </Stack>
              <Button
                type="submit"
                marginBlockStart="32px"
                width="336px"
                height="48px"
              >
                Log In
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
}
