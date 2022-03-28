import { Box } from "@chakra-ui/react";
import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <>
        <Box bg="gray.500" w="100%" p={4} color="white" fontSize={"20px"}>
          Todoアプリ
        </Box>
      </>
    );
  }
}

export default Header;
