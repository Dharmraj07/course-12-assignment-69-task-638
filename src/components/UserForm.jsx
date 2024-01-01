import React, { useState } from 'react';
import Swal from 'sweetalert2';
import UserList from './UserList';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserForm = () => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [userList, setUserList] = useState([]);

  const handleAddUser = () => {
    if (!userName.trim()) {
      Swal.fire('Error', 'Username cannot be empty', 'error');
    } else if (isNaN(age) || age <= 0) {
      Swal.fire('Error', 'Please enter a valid age greater than 0', 'error');
    } else {
      const newUser = { userName, age: parseInt(age) };
      setUserList([...userList, newUser]);
      Swal.fire('Success', 'User added successfully', 'success');
      // Reset input fields
      setUserName('');
      setAge('');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form className="p-8 rounded border">
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Age:</Form.Label>
          <Form.Control type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </Form.Group>

        <Button variant="primary" onClick={handleAddUser} className="mt-3">
          Add User
        </Button>
      </Form>

      <div style={{ marginTop: '20px' }}>
        <UserList userList={userList} />
      </div>
    </div>
  );
};

export default UserForm;
