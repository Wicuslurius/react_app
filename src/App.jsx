import { Suspense } from "react";
import { fetchData } from "./fetchData";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import './App.css';

const apiData = fetchData("https://jsonplaceholder.typicode.com/users")
function App() {

  const data = apiData.read();

  console.log("Datos recibidos:", data);
  
  return (
    <div class="principal_container">
      <h1 class="principal_title">Consulta de usuarios(cosumo API)</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Correo</TableCell>
              <TableCell align="right">Telefono</TableCell>
              <TableCell align="right">WebSite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Suspense fallback={<div>Loading ...</div>}>
              {data?.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell align="right">{user.name}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.phone}</TableCell>
                  <TableCell align="right">{user.website}</TableCell>
                </TableRow>
              ))}
            </Suspense>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
