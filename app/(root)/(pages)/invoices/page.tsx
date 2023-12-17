'use client'
import React from 'react';
import Header from '@/components/Header';
import { Box, colors, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { mockDataInvoices } from '../../../../data/mockData'
import { tokens } from '../../../../app/theme';


//import OutlinedIcon from '@mui/icons-material/Outlined';

type Props = {}

const Invoices = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); 

  const columns: GridColDef[] = [
    { field:'id', headerName:'ID'},
    { field:'name', headerName:'Name', flex:1},
    { field:'phone', headerName:'Phone Number', flex:1},
    { field:'email', headerName:'Email', flex:1},
    { field:'cost', headerName:'Cost', flex:1},
    { field:'date', headerName:'Date', flex:1},
    //{ field:'', headerName:''}
  ]

  return (
    <Box sx={{ height:'400', width:'100%' }}>
      <Header title='Contacts' subtitle='Welcome to your contacts manager tool' />
      <Box
        m='40px 0 0 0'
        height='75vh'
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.redAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: '#f4ff59',
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.redAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid 
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
          rows={mockDataInvoices}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Invoices