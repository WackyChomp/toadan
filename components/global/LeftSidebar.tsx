'use client'

import React from 'react';
import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../app/theme';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Home from '@/app/(root)/page';
//import OutlinedIcon from '@mui/icons-material/Outlined';


/*---------------------------------- */

type ItemProps ={
  title: string;
  icon: any;
  selected: string;
  setSelected: any;
}

const Item = ({ title, icon, selected, setSelected } : ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return(
    <MenuItem
      active={ title === selected}
      style= {{ color: colors.redAccent[300], height:'3em' }}
      onClick={ ()=> setSelected(title) }
      icon={icon}
    >
      <Typography>{title}</Typography>

    </MenuItem>
  )
}


/*---------------------------------- */
type Props = {}

const LeftSidebar = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); 

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <Box>

      <Sidebar collapsed={isCollapsed} className='bg-red-800'>
      {/* <div className='flex justify-center'>LeftSidebar</div>  */}

        <Menu>
          {/* Logo and Menu Icon */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 10px 0",
              color: 'blue',
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h5" className='text-orange-700'>
                  Admin
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="0.5em">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif`}
                  style={{ cursor: "pointer", borderRadius: "50%", border:'2px solid red' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  color={colors.grey[300]}
                  fontWeight="bold"
                  sx={{ mt: "7px" }}
                >
                  Jacob Shire
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[300]}>
                  Director of Forestry
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Items */}
          <Box paddingLeft={ isCollapsed ? undefined :'6%' }>
            <a href='/'><HomeOutlinedIcon /></a>
            <a href='/team'><PeopleOutlinedIcon /></a>
            <a href='/contacts'><ContactsOutlinedIcon /></a>
            <a href='/invoices'><ReceiptOutlinedIcon /></a>
            <a href='/form'><PersonOutlinedIcon /></a>
            <a href='/calendar'><CalendarTodayOutlinedIcon /></a>
            <a href='/barchart'><BarChartOutlinedIcon /></a>
            <a href='/'><TimelineOutlinedIcon /></a>
            <a href='/'><MapOutlinedIcon /></a>


            <Typography className='text-blue-500 border border-lime-600'>
              Business
            </Typography>
            <Item 
              title='Dashboard'
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Team Management'
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Contacts'
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Invoices & Balances'
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography className='text-blue-500 border border-lime-600'>
              Apps
            </Typography>
            <Item 
              title='Profile'
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Calendar'
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='FAQ Page'
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Typography className='text-blue-500 border border-lime-600'>
              Data Visualization
            </Typography>
            <Item 
              title='Bar Chart'
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Pie Chart'
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Line Chart'
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title='Geography Chart'
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* <Item 
              title='Dashboard'
              to='/dashboard'
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

          </Box>

        </Menu>
      </Sidebar>

    </Box>
  )
}

export default LeftSidebar