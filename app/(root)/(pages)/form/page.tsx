'use client'

import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '@/components/Header';

type Props = {}

const handleFormSubmit = (values:any) => {
  console.log(values);
}

// Default values to appear on page
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  address1: '',
  address2: '',
}

// Schema
const userSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().required('required'),
  contact: yup.string().required('required'),
  address1: yup.string().required('required'),
  address2: yup.string().required('required'),
})


const Form = (props: Props) => {
  //const isNonMobile = useMediaQuery('(min-width: 600px)');

  return (
    <Box m='20px'>
      <Header title='User Creation' subtitle='Create a new user profile' />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Box
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat(4, minmax(0, 1fr))'
            >
              <TextField 
                fullWidth
                variant='filled'
                type='text'
                label='First Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name='firstName'
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField 
                fullWidth
                variant='filled'
                type='text'
                label='Last Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name='lastName'
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: 'span 2' }}
              />
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default Form