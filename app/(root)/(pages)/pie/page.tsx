import React from 'react'
import PieChart from '@/components/PieChart';
import { Box } from '@mui/material';
import Header from '@/components/Header';

type Props = {}

const Pie = (props: Props) => {
  return (
    <Box p='20px'>
      <Header title='Pie Chart' subtitle='Identify individual pieces of the whole picture'/>
      <Box height='80vh'>
        <PieChart />
      </Box>
    </Box>
  )
}

export default Pie