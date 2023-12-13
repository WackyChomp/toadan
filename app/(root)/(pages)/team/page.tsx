'use client'
import React from 'react';
import Header from '@/components/Header';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import { mockDataTeam } from '../../../../data/mockData'

import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

//import OutlinedIcon from '@mui/icons-material/Outlined';

type Props = {}

const Team = (props: Props) => {

  const columns = [
    { field:'id', headerName:'ID'},
    { field:'name', headerName:'Name', flex:1},
    { field:'email', headerName:'Email'},
    { field:'age', headerName:'Age', type:'number', headerAlign:'left', align:'left'},
    { field:'phone', headerName:'Phone', flex:1},
    { field:'role', headerName:'Role', flex:1},
    { field:'location', headerName:'Location', flex:1},
    //{ field:'', headerName:''}
  ]

  return (
    <Box>
      <Header title='Team' subtitle='Welcome to your team manager tool' />
      <Box>
        <DataGrid 
          autoHeight
          autoPageSize
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Team