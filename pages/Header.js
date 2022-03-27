import { Box } from "@chakra-ui/react";
import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <>
        <Box bg="tomato" w="100%" p={4} color="white">
          Todoアプリ
        </Box>
      </>
    );
  }
}

export default Header;
