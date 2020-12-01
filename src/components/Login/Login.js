import {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import './Login.css'

const SubmitButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#57DAA8'),
    backgroundColor: '#57DAA8',
    '&:hover': {
      backgroundColor: '#3c9875',
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

  const [ values, setValues ] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
      <div className="Login">
          <Grid container>
              <Grid item xs={3} />
              <Grid item xs={6}>
                  <Paper elevation={3}>
                      <br />
                      <form onSubmit={onSubmit} noValidate>
                        <TextField 
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                          name="email"
                          value={values.email}
                          onChange={onChange}
                        />
                        <br />
                        <TextField
                          id="outlined-basic"
                          label="Password"
                          variant="outlined"
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={onChange}
                        />
                        <br />
                        <SubmitButton 
                          type="submit"
                          size="large"
                          fontSize="large"
                          variant="text"
                          color="primary"
                        >
                        Submit
                        </SubmitButton>
                      </form>
                      <br />
                  </Paper>
              </Grid>
              <Grid item xs={3} />
          </Grid>
      </div>
  )
}

export default Login