import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  VStack,
} from '@chakra-ui/react';

const EditModal = ({ isOpen, onClose, data, onSave }) => {
  const [formData, setFormData] = React.useState(data);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Menu Access</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Menu</FormLabel>
              <Input
                name="menu"
                value={formData.menu}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Access/View</FormLabel>
              <Checkbox
                name="accessView"
                isChecked={formData.accessView}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Create</FormLabel>
              <Checkbox
                name="create"
                isChecked={formData.create}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Update</FormLabel>
              <Checkbox
                name="update"
                isChecked={formData.update}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Delete</FormLabel>
              <Checkbox
                name="delete"
                isChecked={formData.delete}
                onChange={handleChange}
              />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;