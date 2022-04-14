import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  useColorMode,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from "@chakra-ui/react";

import Link from 'next/link'

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav>
      <Flex>
        <Box p="2">
          <Heading size="md">Medusa</Heading>
          <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        </Box>
        <Spacer />
        <Box>
          <Badge variant="subtle" colorScheme="yellow">
            WIP*
          </Badge>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "dark" ? "Dark" : "Light"}
          </Button>
        </Box>
      </Flex>
    </nav>
  );
};

export default Header;
