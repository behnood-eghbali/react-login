import { useContext } from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { AuthContext } from '../../contexts/AuthContext'
import './Login.css'

const SubmitButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#f73378'),
    backgroundColor: '#f73378',
    '&:hover': {
      backgroundColor: '#880e4f',
    },
  },
}))(Button)

/* 
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

const theme = createMuiTheme({
  palette: {
    primary: '#57DAA8',
    secondary: '#ffffff'
  },
})
 */

function Login() {

  const { values, handleChange, handleSubmit } = useContext(AuthContext)

  return (
      <div className="Login">
          <Grid container>
              <Grid item xs={3} />
              <Grid item xs={6}>
                  <Paper elevation={3}>
                      <h2>Sign in to Home page</h2>
                      <form onSubmit={handleSubmit} noValidate>
                        <TextField 
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                        />
                        <br />
                        <TextField
                          id="outlined-basic"
                          label="Password"
                          variant="outlined"
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                        />
                        <br />
                        <Link to="/Home">
                          <SubmitButton 
                            type="submit"
                            size="large"
                            fontSize="large"
                            variant="text"
                            color="primary"
                          >
                          Sign in
                          </SubmitButton>
                        </Link>
                      </form>
                      <p>Don't have an account?</p>
                      <Link to="/Register">
                        <Button variant="contained" color="primary">
                        Sign up
                        </Button>
                      </Link>
                  </Paper>
              </Grid>
              <Grid item xs={3} />
          </Grid>
      </div>
  )
}

export default Login