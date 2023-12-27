import React from 'react';
import { Box } from '@mui/material';
import BarChart from '@/components/BarChart';
import Header from '@/components/Header';

type Props = {}

const Bar = (props: Props) => {
  return (
    <Box>
      <Header title='Bar Chart' subtitle='Market Share Breakdown' />

      <Box height='70vh'>
        <BarChart  />
      </Box>
    </Box>
  )
}

export default Bar