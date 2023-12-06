import React from 'react';
import { useContext } from 'react';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { ColorModeContext, token } from '../../app/theme'

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

type Props = {}

const Topbar = (props: Props) => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      <div>Topbar</div>
      {/* Search Bar */}
      <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='5px'>
        
      </Box>
      
      <IconButton></IconButton>
    </Box>
  )
}

export default Topbar