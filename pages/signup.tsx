import React, { useState } from "react";
import { Formik, Field } from "formik";
import Layout from "../components/layout";
import {
  Flex,
  Box,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  FormErrorMessage
} from "@chakra-ui/react";

const SignUp: React.FC = () => {
  const toast = useToast();
  return (
    <Layout>
      <Flex align="center" justify="center" h="100vh">
        <Box rounded="md">
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              cpassword: "",
            }}
            onSubmit={(v) => {
              toast({
                title: "Account Something",
                description: JSON.stringify(v, null, 2),
                status: "success",
                duration: 9000,
                isClosable: true,
              });
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack align="flex-start">
                  <FormControl>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Field
                      as={Input}
                      id="username"
                      name="username"
                      type="username"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      variant="filled"
                      validate={(value: string | any[]) => {
                        let error;

                        if (value.length < 5) {
                          error = "Password must contain at least 6 characters";
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" isFullWidth>
                    Create Account
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Layout>
  );
};

export default SignUp;
