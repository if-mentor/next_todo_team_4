import { EditIcon } from "@chakra-ui/icons";
import { Button, Center, ChakraProvider, Flex } from "@chakra-ui/react";
import Modal from "react-modal/lib/components/Modal";
import Link from "next/link";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";

//アプリルートを識別するクエリセレクタ
Modal.setAppElement('#__next')

// スタイリング
const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,0.3)"
    },
  
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      width                 : '500px',
      height                : '500px',
      transform             : 'translate(-50%, -50%)'
    }
  };

export default function Task() {

    // Dummy data ↓
    const taskName="Github上に静的サイトをホスティングする"
    const taskStatus="進行中"
    const taskStartDate="2021-11-8"
    const taskEndDate="2021-11-8"
    const taskContent="GitHub上に静的サイトをホスティングするタスクの内容がここに入ります。GitHub上に静的サイトをホスティングするタスクの内容がここに入ります。"
    const taskTags=["超重要","開発","React","git"];
    // Dummy data ↑
    
    const [modalIsOpen,setModalIsOpen] = useState(false);

    // モーダルを開く処理
    const openModal = () => {
        setModalIsOpen(true)
    }

    const afterOpenModal = () => {
        // モーダルが開いた後の処理
    }
    const confirmDelete = () => {
        const result = confirm ('このタスクを削除します。よろしいですか？');
        if(result) {
            setModalIsOpen(false);
            console.log("削除しました。")
        } else {

        }
    }

    // モーダルを閉じる処理
    const closeModal = () => {
        setModalIsOpen(false)
    }
    return (
        <ChakraProvider>
            <Header />
            <Flex>
                <Sidebar />
                <div className="inner-content" style={{padding:"30px"}}>
                    <div className="head-container">
                        <div className="page-title">
                            <h2>タスク情報</h2>
                        </div>
                        <div className="edit-button">
                            <Button bg="gray.200" onClick={openModal}><EditIcon />編集</Button>
                            
                        </div>
                        <Modal
                            // isOpenがtrueならモダールが起動する
                            isOpen={modalIsOpen}
                            // モーダルが開いた後の処理を定義
                            onAfterOpen={afterOpenModal}
                            // モーダルを閉じる処理を定義
                            onRequestClose={closeModal}
                            // スタイリングを定義
                            style={customStyles}
                            >
                            <h3 style={{fontWeight:"900"}}>タスク編集</h3>
                            <p>タスク名：{taskName}</p>
                            <p>ステータス：{taskStatus}</p>
                            <p>開始日：{taskStartDate} 完了日：{taskEndDate}</p>
                            <p>内容：<br />{taskContent}</p>
                            <p className="tags">
                                タグ：
                                {taskTags.map((tag,index) => {
                                    return(
                                        <span className="task-tag" style={{marginRight:"10px"}} key={index}>{tag}</span>   
                                    )
                                })}
                            </p>
                            <Flex justify="center">
                                <Button onClick={closeModal} m={3}>キャンセル</Button>
                                <Button onClick={confirmDelete} bg="red.600" color="white" p={{ base: 3 }} m={{ base: 3 }}>削除</Button>
                                <Button onClick={closeModal} bg="blue.600" color="white" p={{ base: 3 }} m={{ base: 3 }}>完了</Button>
                            </Flex>
                        </Modal>
                    </div>
                    <div className="informations">
                        <p>タスク名：{taskName}</p>
                        <p>ステータス：{taskStatus}</p>
                        <p>開始日：{taskStartDate} 完了日：{taskEndDate}</p>
                        <p>内容：<br />{taskContent}</p>
                        <p className="tags">
                            タグ：
                            {taskTags.map((tag,index) => {
                                return(
                                    <span className="task-tag" style={{marginRight:"10px"}} key={index}>{tag}</span>   
                                )
                            })}
                        </p>
                    </div>
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