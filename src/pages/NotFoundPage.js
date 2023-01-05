import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Button } from 'react-bootstrap';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <Grid xs={6}>
            <Typography variant="h2" className='title-font fw-bold'>
              404
            </Typography>
            <Typography variant="h6" className='title-font fw-bold mb-2'>
              訪問頁面不存在
            </Typography>
            <Link to='/'>
              <Button variant="primary">Back Home</Button>
            </Link>    
          </Grid>
          <Grid xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt="404pic"
              width={500} height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default NotFoundPage