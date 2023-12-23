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
  messageNotes: '',
}

// Schema
const userSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().required('required'),
  contact: yup.string().required('required'),
  address1: yup.string().required('required'),
  address2: yup.string().required('required'),
  messageNotes: yup.string().required('required'),
})


const Form = (props: Props) => {
  //const isNonMobile = useMediaQuery('(min-width: 600px)');

  return (
    <Box mx='20px'>
      <div className="pt-5">
      <div className="bg-red-300 p-5 rounded-md">

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
              <TextField 
                fullWidth
                variant='filled'
                type='text'
                label='Email'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name='email'
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField 
                fullWidth
                variant='filled'
                type='text'
                label='Contact Number'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name='contact'
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField 
                fullWidth
                variant='filled'
                type='text'
                label='Address Line 1'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name='address1'
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField 
                fullWidth
                variant='filled'
                type='text'
                label='Address Line 2'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='address2'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField 
                fullWidth
                variant='filled'
                type='text'
                label='Message / Notes'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.messageNotes}
                name='messageNotes'
                error={!!touched.messageNotes && !!errors.messageNotes}
                helperText={touched.messageNotes && errors.messageNotes}
                sx={{ gridColumn: 'span 4' }}
                multiline
              />
              {/* <TextField 
                fullWidth
                variant='filled'
                type='text'
                label='INSERT'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.INSERT}
                name='INSERT'
                error={!!touched.INSERT && !!errors.INSERT}
                helperText={touched.INSERT && errors.lastName}
                sx={{ gridColumn: 'span 2' }}
              /> */}
            </Box>
            <Box display='flex' justifyContent='start' mt='3em'>
              <Button type='submit' color='secondary' variant='contained'>
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      </div>
      </div>
    </Box>
  )
}

export default Form