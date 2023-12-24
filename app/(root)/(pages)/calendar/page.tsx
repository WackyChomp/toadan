'use client'

import React from 'react';
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material'
import Header from '@/components/Header';
import { tokens } from '../../../theme'

type Props = {}

const Calendar = (props: Props) => {
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


  
  return (
    <Box p='20px'>
      <Header title='Calendar' subtitle='Interactive Calendar Page' />
      <Box display='flex' justifyContent='space-between'>

        {/* Calendar Sidebar */}
        <Box flex='1 1 20%' backgroundColor='crimson' my='10px' p='20px' borderRadius='10px'>
          <Typography variant='h5'>Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: '30px 0',
                  borderRadius: '10px'
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Main Calendar */}
        <Box flex='1 1 100%' ml='15px'>
          <FullCalendar 
            height='75vh'
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: 'prev next today',
              center: 'title',
              right: 'dayGridMonth timeGridWeek timeGridDay listMonth'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {id:'124816', title:'Phosphorus All-Day Event', date:'2023-12-24'},
              {id:'784', title:'Meditation Timed Event', date:'2023-12-25'},
            ]}
          />
        </Box>

      </Box>
    </Box>
  )
}

export default Calendar