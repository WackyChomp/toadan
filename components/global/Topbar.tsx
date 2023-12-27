'use client'

import React from 'react';
import { useContext } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import InputBase from '@mui/material/InputBase'
import { ColorModeContext, tokens } from '../../app/theme'

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

type Props = {}

const Topbar = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display='flex' backgroundColor='crimson' justifyContent='space-between' p={1.5}>

      {/* <div>Topbar</div> */}

      {/* Search Bar */}
      <Box display='flex' backgroundColor={colors.primary[600]} borderRadius='5px'>
        <InputBase sx={{ ml:2, flex:1 }} placeholder='Search...' />
        <IconButton type='button' sx={{ p:1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon/>
          ): (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>

    </Box>
  )
}

export default Topbar