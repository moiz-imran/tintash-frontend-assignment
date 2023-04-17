import React, { FC } from "react";

import { ChakraProvider } from "@chakra-ui/react";

import { Main } from "layouts/Main";
import theme from "theme";

export const GlobalProvidersWrapper: FC = ({ children }) => (
  <Main>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </Main>
);
