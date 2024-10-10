import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const DataTable = ({ data, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastname}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>0
              <TableCell>
                <Button variant="outlined" color="primary" onClick={() => onEdit(index)}>
                  Edit
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => onDelete(index)} style={{ marginLeft: "10px" }}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

// Wihout edit and delete/
  
// import React from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

// const DataTable = ({ data }) => {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>ID</TableCell>
//             <TableCell>First Name</TableCell>
//             <TableCell>Last Name</TableCell>
//             <TableCell>Email</TableCell>
//             <TableCell>Phone</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row, index) => (
//             <TableRow key={index}>
//               <TableCell>{index + 1}</TableCell>
//               <TableCell>{row.firstName}</TableCell>
//               <TableCell>{row.lastname}</TableCell>
//               <TableCell>{row.email}</TableCell>
//               <TableCell>{row.phone}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default DataTable;

