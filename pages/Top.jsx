import { EditIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Square,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function top() {
  return (
    <div>
      <Flex>
        <Center w="20%" bg="gray.300">
          <Text>サイドバー</Text>
        </Center>
        <Square w="80%" bg="white" size="100%">
          <Text>
            <Box fontSize="20px" fontWeight="bold">
              進行中のタスクが２件、未着手のタスクが３件、完了済みのタスクが２件あります
            </Box>
            <Button bg="blue.200" p={{ base: 3 }} m={{ base: 3 }}>
              <Link href="#">+新規タスク</Link>
            </Button>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th>進行中</Th>
                    <Th>タグ</Th>
                    <Th>期間</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <EditIcon />
                    </Td>
                    <Td>静的サイトのホスティング</Td>
                    <Td>タグの記述</Td>
                    <Td isNumeric>2022/3/1 to 2020/4/30</Td>
                    <Td />
                  </Tr>
                  <Tr>
                    <Td>
                      <EditIcon />
                    </Td>
                    <Td>react.jsでtodoアプリ作成</Td>
                    <Td>タグの記述 </Td>
                    <Td isNumeric>2022/3/1 to 2020/4/30</Td>
                    <Td />
                  </Tr>
                </Tbody>
                <Tfoot></Tfoot>
              </Table>
            </TableContainer>
            <br />
            <br />
            <br />
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th />
                    <Th>未着手</Th>
                    <Th>タグ</Th>
                    <Th>期間</Th>
                    <Th />
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <EditIcon />
                    </Td>
                    <Td>GitHub上に静的サイトをホスティングする</Td>
                    <Td>タグの記述</Td>
                    <Td isNumeric>2022/3/1 to 2020/4/30</Td>
                    <Td />
                  </Tr>
                  <Tr>
                    <Td>
                      <EditIcon />
                    </Td>
                    <Td>react.jsでtodoサイトを作成する</Td>
                    <Td>タグの記述 </Td>
                    <Td isNumeric>2022/3/1 to 2020/4/30</Td>
                    <Td />
                  </Tr>
                </Tbody>
                <Tfoot></Tfoot>
              </Table>
            </TableContainer>
            <br />
            <br />
            <br />
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th />
                    <Th>完了済み</Th>
                    <Th>タグ</Th>
                    <Th>期間</Th>
                    <Th />
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <EditIcon />
                    </Td>
                    <Td>GitHub上に静的サイトホスティングする</Td>
                    <Td>タグの記述</Td>
                    <Td isNumeric>2022/3/1 to 2020/4/30</Td>
                    <Td />
                  </Tr>
                  <Tr>
                    <Td>
                      <EditIcon />
                    </Td>
                    <Td>react.jsでtodoアプリ作成</Td>
                    <Td>タグの記述 </Td>
                    <Td isNumeric>2022/3/1 to 2020/4/30</Td>
                    <Td />
                  </Tr>
                </Tbody>
                <Tfoot></Tfoot>
              </Table>
            </TableContainer>
          </Text>
        </Square>
      </Flex>
    </div>
  );
}

export default top;
