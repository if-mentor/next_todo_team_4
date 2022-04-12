import React from "react";
import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Select from "react-select";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

// CSSではなくChakraでなんとかする
// →細かいところが作れない
// module.css →そのComponentにだけ当てる
// inlineスタイル？
// componentごとかページごとにそれぞれのcssファイルを格納　＋　管理

const options = [
  { value: "超重要", label: "超重要" },
  { value: "重要", label: "重要" },
  { value: "暇な時", label: "暇な時" },
  { value: "後回し", label: "後回し" },
];

// ここを直す　（default function）
// pageではdefaultでしか受け取れない　× named
export default function Create() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Flex className="main">
          <Sidebar />

          <Box className="create" flex="1" px="64px" py="32px">
            <Flex justifyContent="space-between" alignItems="center" mb="24px">
              <Text fontSize={18}>新規タスク</Text>
              <div className="sub-actions">
                <Box
                  as="button"
                  bg="#E6E6E6"
                  fontSize={16}
                  mr="16px"
                  borderRadius={5}
                  py="4px"
                  px="16px"
                >
                  下書き保存
                </Box>
                <Box
                  as="button"
                  bg="#E6E6E6"
                  fontSize="16px"
                  borderRadius={5}
                  py="4px"
                  px="16px"
                >
                  プレビュー
                </Box>
              </div>
            </Flex>
            <Flex className="name" mb="18px">
              <Text whiteSpace="nowrap">タスク名： </Text>
              <Input type="text" size="sm" />
            </Flex>
            <Flex className="date" mb="24px">
              <Flex className="start-date" mr="24px">
                <Text whiteSpace="nowrap">開始日： </Text>
                <Input type="date" size="sm" />
              </Flex>
              <Flex className="finish-date">
                <Text whiteSpace="nowrap">完了日：</Text>
                <Input type="date" size="sm" />
              </Flex>
            </Flex>
            <Box className="content" mb="16px">
              <Text whiteSpace="nowrap" mb="8px">
                内容：
              </Text>
              <Textarea name="" id="" cols="30" rows="10"></Textarea>
            </Box>
            <Flex mb="32px" align="center">
              <Text whiteSpace="nowrap">タグ：</Text>
              <Select flex="1" isMulti options={options}></Select>
            </Flex>
            <Flex align="center" justify="center">
              <Box
                as="button"
                bg="#C4C4C4"
                fontSize="16px"
                color="#fff"
                borderRadius={5}
                py="6px"
                px="24px"
                mr="16px"
                w="130px"
              >
                キャンセル
              </Box>
              <Box
                as="button"
                bg="#386FA4"
                color="#fff"
                fontSize="16px"
                borderRadius={5}
                py="6px"
                px="24px"
                w="130px"
              >
                完了
              </Box>
            </Flex>
          </Box>
        </Flex>
      </ChakraProvider>
    </>
  );
}
