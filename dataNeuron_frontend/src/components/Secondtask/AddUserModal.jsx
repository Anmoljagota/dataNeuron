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
} from "@chakra-ui/react";
const UserModal = ({ handleSubmit, handleChange, data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen} colorScheme="whatsapp" zIndex={5}>
        Add
      </Button>

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
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input
                ref={initialRef}
                placeholder="image"
                onChange={handleChange}
                name="image"
                value={data.image}
              />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>name</FormLabel>
              <Input
                placeholder="name"
                onChange={handleChange}
                name="name"
                value={data.name}
              />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Field</FormLabel>
              <Input
                placeholder="MERN Developer"
                onChange={handleChange}
                name="field"
                value={data.field}
              />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Position</FormLabel>
              <Input
                placeholder="SDE-1"
                onChange={handleChange}
                name="position"
                value={data.position}
              />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Employe type</FormLabel>
              <RadioGroup onChange={handleChange}>
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
                handleSubmit(e, onClose);
              }}
            >
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserModal;
