'use client'
import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import Header from '@/components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '@/app/theme';


type Props = {}

const FAQ = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box p='20px'>
      <Header title='FAQ' subtitle='Common user inquiries' />

      <div className="bg-red-400 p-5 rounded-lg mt-5">
        <div className="space-y-5">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.blueAccent[400]} variant='h5'>
                1. Essential Message
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Majority of this web app has been built with the intent of personal customization.
                All that is required from you is to swap default info or change up the code!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.blueAccent[400]} variant='h5'>
                2. Is this project fine for everyone to use and perhaps production ready?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Of course! Everyone has public access as long they can find it. As for production
                ready, not really since there are bizarre visual color choices throughout the project.
                The intent is to help easily navigate through the code and identify components
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.blueAccent[400]} variant='h5'>
                3. How can I contribute?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                There are plenty of ways for anyone to lend their support and knowledge towards this project.
                Whether it be code contributions through GitHub or sharing this with others. 
                <br/><br/>
                One person at a time is more than enough
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

    </Box>
  )
}

export default FAQ