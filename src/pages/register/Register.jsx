import {
  Box,
  Icon,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Link as LinkC,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { graphql } from "babel-plugin-relay/macro";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useMutation } from "react-relay";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthContext";
import { formatGraphQLErrors } from "../../utils/formik/formatGraphQlErrors";
import accountIcon from "../../utils/assets/account.svg";
import pricetagIcon from "../../utils/assets/pricetag.svg";
import supportIcon from "../../utils/assets/support.svg";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export function Register() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  let navigate = useNavigate();
  const auth = useAuth();

  const servicesMenu = [
    {
      icon: accountIcon,
      name: "Product Support",
      description:
        "Up to 3 years on-site warranty available for your peace of mind.",
    },
    {
      icon: pricetagIcon,
      name: "Personal Account",
      description:
        "With big discounts, free delivery and a dedicated support specialist.",
    },
    {
      icon: supportIcon,
      name: "Amazing Savings",
      description:
        "Up to 70% off new Products, you can be sure of the best price.",
    },
  ];

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
          navigate("/");
        }
      },
      onError({ userRegister }) {
        console.log(userRegister);
      },
    });
  }

  return (
    <Flex flexDir="column" rowGap="16px">
      <Heading padding="16px 16px 0px" fontSize="18px" fontWeight="600">
        Customer Login
      </Heading>

      <Flex
        margin="0px 16px"
        padding="20px 18px"
        bg="bgBeige"
        flexDir="column"
        rowGap="16px"
      >
        <Text fontSize="14px" fontWeight="600" color="text">
          Registered Customers
        </Text>
        <Text>If you have an account, sign in with your email address.</Text>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
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
              </Stack>
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
        <Link to="/">
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
      <Flex
        bg="bgBeige"
        flexDirection="column"
        rowGap="20px"
        alignItems="center"
      >
        {servicesMenu.map((service, index) => (
          <Box textAlign="center" w="300px" key={index}>
            <Icon as={service.icon}></Icon>
            <Text>{service.name}</Text>
            <Text>{service.description}</Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
