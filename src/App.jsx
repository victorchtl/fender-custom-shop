import './App.css'
import Scene from './components/Scene'
import fenderLogo from './assets/fender_logo.png'
import { AppBar, Box, Container, Divider, Grid, Toolbar } from '@mui/material'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <AppBar position="static" color='transparent' elevation={0} >
        <Container>
          <Toolbar disableGutters>
            <Box component={'img'} src={fenderLogo} sx={{
              height: {
                xs: '15px',
                md: '30px'
              }
            }} />
          </Toolbar>
        </Container>
      </AppBar>
      <Divider />
      <Container>
        <Grid container height={'100vh'}>
          <Grid item xs>
            <Scene />
          </Grid>
          <Grid item xs>
            <Dashboard />
          </Grid>
        </Grid>
      </Container>

    </>
  )
}

export default App
