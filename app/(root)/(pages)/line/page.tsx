import React from 'react'
import { Box } from '@mui/material'
import Header from '@/components/Header'
import LineChart from '@/components/LineChart'

type Props = {}

const Line = (props: Props) => {
  return (
    <Box padding='20px'>
      <Header title='Line Chart' subtitle='Showcasing fluctuations over period of time'/>

      <Box height='80vh'>
        <LineChart />
      </Box>
    </Box>
  )
}

export default Line