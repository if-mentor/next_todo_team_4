import React, { useState } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  ChakraProvider,
  Flex,
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Input,
  Tag,
} from "@chakra-ui/react";
import Link from "next/link";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import TaskModal from "../components/TaskModal";

export default function Task() {
  //useStateの定義。ひとまず以下のstate名したが、後々変更する。
  const [doingTask, setDoingTask] = useState();
  const [notDoingTask, setNotDoingTask] = useState();
  const [doneTask, setDoneTask] = useState();

  // Dummy data ↓
  const taskInfo = {
    name: "Github上に静的サイトをホスティングする",
    status: "進行中",
    startDate: "2021-11-8",
    endDate: "2021-11-8",
    content:
      "GitHub上に静的サイトをホスティングするタスクの内容がここに入ります。GitHub上に静的サイトをホスティングするタスクの内容がここに入ります。",
    tags: ["超重要", "開発", "React", "git"],
  };
  // Dummy data ↑

  return (
    <ChakraProvider>
      <Header />
      <Flex>
        <Sidebar />
        <div className="inner-content" style={{ padding: "30px" }}>
          <Flex justifyContent="space-between" alignItems="center">
            <div className="page-title">
              <h3>進行中のタスクが３件、未着手のタスクが２件あります。</h3>
            </div>
          </Flex>
          <Input
            placeholder="キーワードを入力"
            variant="filled"
            size="lg"
            borderRadius="full"
          ></Input>
          <TableContainer pt="10">
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th fontsize={{ base: "md", md: "flex" }}>進行中</Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <EditIcon _hover={{ cursor: "pointer" }} />
                  </Td>
                  <Td _hover={{ cursor: "pointer" }}>{taskInfo.name}</Td>
                  <Td isNumeric>
                    {taskInfo.tags.map((tag, index) => {
                      return (
                        <Tag borderRadius="10" m="1" bg="green.100" key={index}>
                          {tag}
                        </Tag>
                      );
                    })}
                  </Td>
                  <Td isNumeric>
                    {taskInfo.startDate} to {taskInfo.endDate}
                  </Td>
                  <Td isNumeric>
                    <DeleteIcon _hover={{ cursor: "pointer" }} />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <EditIcon />
                  </Td>
                  <Td>ReactでTodoサイトを作成する</Td>
                  <Td isNumeric>タグ</Td>
                  <Td isNumeric>期間</Td>
                  <Td isNumeric>
                    <DeleteIcon />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <EditIcon />
                  </Td>
                  <Td>Todoサイトで画面遷移をできるようにする</Td>
                  <Td isNumeric>タグ</Td>
                  <Td isNumeric>期間</Td>
                  <Td isNumeric>
                    <DeleteIcon />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <br />
          <br />
          <br />
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>未着手</Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <EditIcon />
                  </Td>
                  <Td>{taskInfo.name}</Td>
                  <Td isNumeric>
                    {taskInfo.tags.map((tag, index) => {
                      <div>{tag}</div>;
                    })}
                  </Td>
                  <Td isNumeric>
                    {taskInfo.startDate} to {taskInfo.endDate}
                  </Td>
                  <Td isNumeric>
                    <DeleteIcon />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <EditIcon />
                  </Td>
                  <Td>ReactでTodoサイトを作成する</Td>
                  <Td isNumeric>タグ</Td>
                  <Td isNumeric>期間</Td>
                  <Td isNumeric>
                    <DeleteIcon />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <EditIcon />
                  </Td>
                  <Td>Todoサイトで画面遷移をできるようにする</Td>
                  <Td isNumeric>タグ</Td>
                  <Td isNumeric>期間</Td>
                  <Td isNumeric>
                    <DeleteIcon />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <br />
          <br />
          <br />
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>完了済み</Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <EditIcon />
                  </Td>
                  <Td>{taskInfo.name}</Td>
                  <Td isNumeric>
                    {taskInfo.tags.map((tag) => {
                      <>{tag}</>;
                    })}
                  </Td>
                  <Td isNumeric>
                    {taskInfo.startDate} to {taskInfo.endDate}
                  </Td>
                  <Td isNumeric>
                    <DeleteIcon />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <EditIcon />
                  </Td>
                  <Td>ReactでTodoサイトを作成する</Td>
                  <Td isNumeric>タグ</Td>
                  <Td isNumeric>期間</Td>
                  <Td isNumeric>
                    <DeleteIcon />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <EditIcon />
                  </Td>
                  <Td>Todoサイトで画面遷移をできるようにする</Td>
                  <Td isNumeric>タグ</Td>
                  <Td isNumeric>期間</Td>
                  <Td isNumeric>
                    <DeleteIcon />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </Flex>
    </ChakraProvider>
  );
}
