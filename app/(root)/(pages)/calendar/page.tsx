'use client'

import React from 'react';
import { useState } from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material'
import Header from '@/components/Header';
import { tokens } from '../../../theme'

type Props = {}

const Calendar = (props: Props) => {
  const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected:any) => {
      const title = prompt('Please enter a new title for your event');
      const calendarAPI = selected.view.calendar;
      calendarAPI.unselect();

      if (title){
        calendarAPI.addEvent({
          id: `${selected.dateStr}-${title}`,
          title,
          start: selected. startStr,
          end: selected.endStr,
          allDay: selected.allDay,
        })
      }
    }

    const handleEventClick = (selected:any) => {
      if(window.confirm(`Are you sure about deleting this eveng '${selected.event.title}'`)) {
        selected.event.remove();
      }
    }
  }

  
  return (
    <Box p='20px'>
      <Header title='Calendar' subtitle='Interactive Calendar Page' />
      <Box display='flex' justifyContent='space-between'>
        {/* Calendar Sidebar */}
        <Box flex='1 1 20%' backgroundColor='crimson' my='10px' p='20px' borderRadius='10px'>
          <Typography variant='h5'>Events</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Calendar