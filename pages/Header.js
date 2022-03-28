import { Flex, Heading } from "@chakra-ui/react";
import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <>
        <Flex
          as="nav"
          bg="gray.500"
          color="white"
          align="center"
          justify="space-between"
          padding={{ base: 5 }}
        >
          <Heading as="h3" font-size={{ base: "md", md: "lg" }}>
            Todoアプリ
          </Heading>
        </Flex>
      </>
    );
  }
}

export default Header;
