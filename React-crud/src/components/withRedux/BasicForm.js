import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Box } from "@mui/material";

const BasicForm = ({ addUser, formData, setFormData, onClose }) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrors({
      ...errors,
      [name]: "", 
    });

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastname) newErrors.lastname = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addUser(formData); // Add or edit user data
      setFormData({ firstName: "", lastname: "", email: "", password: "", phone: "" }); // Reset form
      onClose(); // Close the modal
    }
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.firstName}
          onChange={handleChange}
          error={!!errors.firstName} 
          helperText={errors.firstName}
        />
        <TextField
          label="Last Name"
          name="lastname"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.lastname}
          onChange={handleChange}
          error={!!errors.lastname} 
          helperText={errors.lastname}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email} 
          helperText={errors.email}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password} 
          helperText={errors.password}
        />
        <TextField
          label="Phone Number"
          name="phone"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          {formData.firstName ? "Update" : "Submit"}
        </Button>
      </Box>
    </Container>
  );
};

export default BasicForm;

// Without edit form 


// import React, { useState } from "react";
// import { Container, TextField, Button, Box } from "@mui/material";

// const BasicForm = ({ addUser, onClose }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastname: "",
//     email: "",
//     password: "",
//     phone: "",
//   });
  
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setErrors({
//       ...errors,
//       [name]: "", 
//     });

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     const newErrors = {};
    
//     if (!formData.firstName) newErrors.firstName = "First Name is required";
//     if (!formData.lastname) newErrors.lastname = "Last Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     if (!formData.phone) newErrors.phone = "Phone Number is required";

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0; 
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       addUser(formData); 
//       setFormData({ firstName: "", lastname: "", email: "", password: "", phone: "" }); 
//       onClose(); 
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
//         <TextField
//           label="First Name"
//           name="firstName"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={formData.firstName}
//           onChange={handleChange}
//           error={!!errors.firstName} 
//           helperText={errors.firstName}
//         />
//         <TextField
//           label="Last Name"
//           name="lastname"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={formData.lastname}
//           onChange={handleChange}
//           error={!!errors.lastname} 
//           helperText={errors.lastname}
//         />
//         <TextField
//           label="Email"
//           name="email"
//           type="email"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={formData.email}
//           onChange={handleChange}
//           error={!!errors.email} 
//           helperText={errors.email}
//         />
//         <TextField
//           label="Password"
//           name="password"
//           type="password"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={formData.password}
//           onChange={handleChange}
//           error={!!errors.password} 
//           helperText={errors.password}
//         />
//         <TextField
//           label="Phone Number"
//           name="phone"
//           type="number"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={formData.phone}
//           onChange={handleChange}
//           error={!!errors.phone}
//           helperText={errors.phone}
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//         >
//           Submit
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default BasicForm;
