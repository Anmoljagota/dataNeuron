import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  useDisclosure,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Stack,
  Center,
} from "@chakra-ui/react";
const UpdateUserModal = ({ data, handleChange, handleSubmit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <div>
      <Center>
        <Button onClick={onOpen} colorScheme="messenger" zIndex={5} mt={5}>
          Update
        </Button>
      </Center>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter employee details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input
                ref={initialRef}
                placeholder="image"
                onChange={(e) => handleChange(e, data._id)}
                name="image"
                value={data.image}
              />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>name</FormLabel>
              <Input
                placeholder="name"
                onChange={(e) => handleChange(e, data._id)}
                name="name"
                value={data.name}
              />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Field</FormLabel>
              <Input
                placeholder="MERN Developer"
                onChange={(e) => handleChange(e, data._id)}
                name="field"
                value={data.field}
              />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Position</FormLabel>
              <Input
                placeholder="SDE-1"
                onChange={(e) => handleChange(e, data._id)}
                name="position"
                value={data.position}
              />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Employe type</FormLabel>
              <RadioGroup>
                <Stack direction="row">
                  <Radio value="Full time">Full time</Radio>
                  <Radio value="Intern">Intern</Radio>
                  <Radio value="Part time">Part time</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={(e) => {
                handleSubmit(e, onClose, "update", data._id);
              }}
            >
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UpdateUserModal;
