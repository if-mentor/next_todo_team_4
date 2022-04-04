import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { EditIcon } from "@chakra-ui/icons";

const TaskModal = (props) => {
  const {name, status, startDate, endDate, content, tags} = props;
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}><EditIcon />編集</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>タスク情報</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <p>タスク名：{name}</p>
                        <p>ステータス：{status}</p>
                        <p>開始日：{startDate} 完了日：{endDate}</p>
                        <p>内容：<br />{content}</p>
                        <p className="tags">
                            タグ：
                            {/* {tags.map((tag,index) => {
                                return(
                                    <Button borderRadius="md" size="xs" mr={2} key={index}>{tag}</Button>   
                                )
                            })} */}
                        </p>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>キャンセル</Button>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              戻る
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TaskModal;