import React from 'react'
import { 
  Container,
  Typography, 
  Card, 
  CardContent, 
  CardActions, 
  Button,
  TextField
} from '@mui/material'

const SignIn = () => {
  return (
    <Container sx={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Card sx={{width: 300}}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant='h4' component='h1' align='center'>Iniciar sesión</Typography>
          <TextField label='usuario' variant='standard' margin='dense' sx={{display: 'block'}}/>
          <TextField label='contraseña' variant='standard' margin='dense' type='password' sx={{display: 'block'}}/>
        </CardContent>
        <CardActions sx={{justifyContent: 'space-between', marginInline: 5, marginBottom: 5}}>
          <Button size='small' variant='outlined'>Cancelar</Button>
          <Button size='small' variant='contained'>Enviar</Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default SignIn