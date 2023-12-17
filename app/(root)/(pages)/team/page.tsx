'use client'
import React from 'react';
import Header from '@/components/Header';
import { Box, colors, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { mockDataTeam } from '../../../../data/mockData'
import { tokens } from '../../../../app/theme';

import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

//import OutlinedIcon from '@mui/icons-material/Outlined';

type Props = {}

const Team = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); 

  const columns: GridColDef[] = [
    { field:'id', headerName:'ID'},
    { field:'name', headerName:'Name', flex:1},
    { field:'email', headerName:'Email', flex:1},
    { field:'age', headerName:'Age', type:'number', headerAlign:'left', align:'left'},
    { field:'phone', headerName:'Phone', flex:1},
    { field:'role', headerName:'Role', flex:1},
    { field:'location', headerName:'Location', flex:1},
    { field:'access', headerName:'Access Level', flex:1,
      renderCell: ({ row: { access } }) =>{
        return(
          <Box 
            width='60%'
            m='0 auto'
            p='5px'
            display='flex'
            justifyContent='center'
            backgroundColor={
              access === 'admin' ? 'green' : 'orange'
            }
            borderRadius='4px'
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
          </Box>
        )
      }
    },
    //{ field:'', headerName:''}
  ]

  return (
    <Box sx={{ height:'400', width:'100%' }}>
      <Header title='Team' subtitle='Welcome to your team manager tool' />
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
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Team