import { useState } from 'react';
import { Box, Button, Checkbox, Container, Flex, Heading, IconButton, Table, Tbody, Td, Th, Thead, Tr, Text, VStack } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import EditModal from '../components/EditModal';

const Settings = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState({});

  const handleEditClick = (data) => {
    setEditData(data);
    setIsEditModalOpen(true);
  };

  const handleSave = (updatedData) => {
    console.log('Updated Data:', updatedData);
    // Update the state or make an API call to save the updated data
  };

  return (
    <Flex height="100vh">
      <Box width="250px" bg="orange.500" color="white" p={4}>
        <VStack spacing={4} align="start">
          <Heading size="md" mb={4}>Bang Jamin</Heading>
          <VStack spacing={2} align="start">
            <Button variant="link" colorScheme="whiteAlpha">Agent</Button>
            <Button variant="link" colorScheme="whiteAlpha">Quotation</Button>
            <Button variant="link" colorScheme="whiteAlpha">Production Monitoring</Button>
            <Button variant="link" colorScheme="whiteAlpha">Setting</Button>
            <Button variant="link" colorScheme="whiteAlpha" ml={4}>Roles</Button>
            <Button variant="link" colorScheme="whiteAlpha">User Account</Button>
          </VStack>
          <Flex mt="auto" align="center">
            <Box>
              <Text>Guntur</Text>
              <Text fontSize="sm">Super Admin</Text>
            </Box>
            <Button variant="link" colorScheme="whiteAlpha" ml={4}>Logout</Button>
          </Flex>
        </VStack>
      </Box>
      <Box flex="1" p={6}>
        <Heading size="lg" mb={4}>Settings</Heading>
        <Text mb={4}>Roles / Administrator</Text>
        <Box bg="white" p={6} borderRadius="md" boxShadow="md">
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="md">Administrator</Heading>
            <IconButton
              icon={<FaEdit />}
              aria-label="Edit"
              colorScheme="orange"
              onClick={() => handleEditClick({
                menu: 'Administrator',
                accessView: true,
                create: true,
                update: true,
                delete: true,
              })}
            />
          </Flex>
          <Text mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
            fringilla vel, aliquet nec, vulputate eget, arcu.
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Menu</Th>
                <Th>Access/View</Th>
                <Th>Create</Th>
                <Th>Update</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Agent</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td><Checkbox defaultChecked /></Td>
              </Tr>
              <Tr>
                <Td>Quotation</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td><Checkbox defaultChecked /></Td>
              </Tr>
              <Tr>
                <Td>Policy</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td><Checkbox defaultChecked /></Td>
              </Tr>
              <Tr>
                <Td>Production</Td>
                <Td><Checkbox /></Td>
                <Td><Checkbox /></Td>
                <Td><Checkbox /></Td>
                <Td><Checkbox /></Td>
              </Tr>
              <Tr>
                <Td>Settings</Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td><Checkbox defaultChecked /></Td>
                <Td><Checkbox defaultChecked /></Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        data={editData}
        onSave={handleSave}
      />
    </Flex>
  );
};

export default Settings;