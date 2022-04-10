
import { Button, Center, ChakraProvider, Flex,Box } from "@chakra-ui/react";
import Link from "next/link";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import TaskModal from "../components/TaskModal";


export default function Task() {

    // Dummy data ↓
    const taskInfo = {
       name:"Github上に静的サイトをホスティングする",
       status:"進行中",
       startDate:"2021-11-8",
       endDate:"2021-11-8",
       content:"GitHub上に静的サイトをホスティングするタスクの内容がここに入ります。GitHub上に静的サイトをホスティングするタスクの内容がここに入ります。",
       tags:["超重要","開発","React","git"]
    }
    // Dummy data ↑


    return (
        <ChakraProvider>
            <Header />
            <Flex>
                <Sidebar />
                <div className="inner-content" style={{padding:"30px"}}>
                    <Flex justifyContent="space-between" alignItems="center">
                        <div className="page-title">
                            <h2>タスク情報</h2>
                        </div>
                        <div className="edit-button">
                            <TaskModal taskInfo={taskInfo}/>
                        </div>
                        
                    </Flex>
                    <Box maxW={900}>
                        <p>タスク名：{taskInfo.name}</p>
                        <p>ステータス：{taskInfo.status}</p>
                        <p>開始日：{taskInfo.startDate} 完了日：{taskInfo.endDate}</p>
                        <p>内容：<br />{taskInfo.content}</p>
                        <p className="tags">
                            タグ：
                            {taskInfo.tags.map((tag,index) => {
                                return(
                                    <Button borderRadius="md" size="xs" mr={2} key={index}>{tag}</Button>   
                                )
                            })}
                        </p>
                    </Box>
                    <Flex justify="center" align="center">
                        <Center>
                        <Button bg="red.600" color="white" p={{ base: 3 }} m={{ base: 3 }}>削除</Button>
                        <Button bg="blue.600" color="white" p={{ base: 3 }} m={{ base: 3 }}>
                            <Link href="#">戻る</Link>
                        </Button>
                        </Center>
                    </Flex>
                </div>

            </Flex>
        </ChakraProvider>

            
    )
}