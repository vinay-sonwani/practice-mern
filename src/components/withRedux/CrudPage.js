import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import BasicForm from "./BasicForm";
import DataTable from "./DataTable";
import { addUser, updateUser, deleteUser } from './redux/actions/userActions';

const CrudPage = () => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [formData, setFormData] = useState({ firstName: "", lastname: "", email: "", password: "", phone: "" });

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleAddData = () => {
    setFormData({ firstName: "", lastname: "", email: "", password: "", phone: "" });
    setIsEditing(false);
    setOpen(true);
  };

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setFormData(users[index]);
    setIsEditing(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (user) => {
    if (isEditing) {
      dispatch(updateUser(selectedIndex, user));
    } else {
      dispatch(addUser(user));
    }
    setOpen(false);
  };

  const handleDelete = (index) => {
    dispatch(deleteUser(index));
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "40px" }}>
      <Button variant="contained" color="primary" onClick={handleAddData} style={{ marginBottom: "30px" }}>
        Add Data
      </Button>

      <DataTable data={users} onEdit={handleEdit} onDelete={handleDelete} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <BasicForm addUser={handleSubmit} formData={formData} setFormData={setFormData} onClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CrudPage;
