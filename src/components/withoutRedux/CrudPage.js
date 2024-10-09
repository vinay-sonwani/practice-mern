
import React, { useState } from "react";
import { Container, Button,  Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import BasicForm from "./BasicForm";
import DataTable from "./DataTable";

const CrudPage = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // To track if we are editing
  const [selectedIndex, setSelectedIndex] = useState(null); // To track the selected user index
  const [formData, setFormData] = useState({
    firstName: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  // Open the modal for adding a new user
  const handleAddData = () => {
    setFormData({ firstName: "", lastname: "", email: "", password: "", phone: "" }); // Reset form
    setIsEditing(false);
    setOpen(true);
  };

  // Open the modal for editing existing user data
  const handleEdit = (index) => {
    setSelectedIndex(index);
    setFormData(data[index]); // Fill form with selected user data
    setIsEditing(true);
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Add a new user
  const addUser = (user) => {
    if (isEditing) {
      // Update existing user data
      const updatedData = [...data];
      updatedData[selectedIndex] = user;
      setData(updatedData);
    } else {
      // Add new user
      setData((prevData) => [...prevData, user]);
    }
    setOpen(false);
  };

  // Delete a user
  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <Container maxWidth="lg" style={{marginTop:"40px"}}>
      <Button variant="contained" color="primary" onClick={handleAddData} style={{ marginBottom: "30px" }}>
        Add Data
      </Button>
      
      <DataTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <BasicForm addUser={addUser} formData={formData} setFormData={setFormData} onClose={handleClose} />
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


// Without edit deleet 

// import React, { useState } from "react";
// import { Container, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
// import BasicForm from "./BasicForm";
// import DataTable from "./DataTable";

// const CrudPage = () => {
//   const [data, setData] = useState([]);
//   const [open, setOpen] = useState(false);

//   const handleAddData = () => {
//     setOpen(true); 
//   };

//   const handleClose = () => {
//     setOpen(false); 
//   };

//   const addUser = (user) => {
//     setData((prevData) => [...prevData, user]); 
//   };

//   return (
//     <Container maxWidth="lg" style={{marginTop: "40px"}}>
//       <Button variant="contained" color="primary" onClick={handleAddData} style={{ marginBottom: "20px" }}>
//         Add Data
//       </Button>
      
//       <DataTable data={data} />
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Add User</DialogTitle>
//         <DialogContent>
//           <BasicForm addUser={addUser} onClose={handleClose} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default CrudPage;

