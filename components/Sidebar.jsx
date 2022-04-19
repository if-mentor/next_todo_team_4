import { Button, Center, ChakraProvider, Flex,Box } from "@chakra-ui/react";

export const Sidebar = () => {
    return (
        <Flex h="100vh" w={300} bg="gray.100">
            <Box p={5}>
                <p>ダミーサイドバー</p>
            </Box>

        </Flex>

    )
}

// .sidebar {
//     height: 100vh;
//     width: 300px;
//     background: #f2f2f2;
//     padding: 20px;
//   }
  