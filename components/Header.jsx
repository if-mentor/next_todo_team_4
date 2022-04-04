import { Button, Center, ChakraProvider, Flex,Box } from "@chakra-ui/react";

export const Header = () => {
    return (
        <Flex bg="gray.300" h={50} w="100%">
        <div className="header">
            <h1 style={{color:"gray",marginLeft:"30px"}}>ToDoアプリ(ダミーヘッダー)</h1>
        </div>
        </Flex>
    )
}