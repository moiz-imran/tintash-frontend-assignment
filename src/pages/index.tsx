import React from "react";

import { Box, Text, Image } from "@chakra-ui/react";
import { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h="100vh"
      flexDir="column"
      textAlign="center"
    >
      <Box w="50%">
        <Text fontSize="3xl" my={2}>
          Hello Dev!
        </Text>
        <Text color="gray.500" fontSize="xl">
          Welcome to the Tintash Frontend Coding Assignment.
        </Text>
      </Box>

      <Box px={6} py={6}>
        <Image mx="auto" width="70%" src="/tintash-logo.svg" />
      </Box>

      <Box w="40%" my={2} py={2} px={2} borderWidth="1px" borderRadius="md">
        <Text fontSize="xl" fontWeight="bold">
          Tech Stack for this assignment:
        </Text>
        <Text color="gray.600">
          <b>
            React, NextJs, Typescript, Chakra UI, Framer Motion, React Testing
            Library
          </b>
        </Text>
      </Box>
    </Box>
  );
};

export default Index;
