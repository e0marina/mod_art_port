import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    marginTop: '150px',
  },
  paper: {
    height: 500,
    width: 500,
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
  txtfield: {
    marginLeft: '33%',
    paddingTop: '150px',
  },
  button: {
    flexDirection: 'column',
    marginLeft: '33%',
    width: '20ch',
  },
}));

const FormContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async function (e) {
    e.preventDefault();
    console.log(`Submitting Email and Password ${email}, ${password}`);
    const usernameEl = document.querySelector('#email-field');
    const passwordEl = document.querySelector('#password-field');
    fetch('/login', {
      method: 'post',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(function () {
        document.location.replace('/hello');
      })
      .catch((err) => console.log(err));
    //clear the fields
    setEmail('');
    setPassword('');
  };
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container justify='center'>
          <Grid item className={classes.gridItem}>
            <Paper elevation={3} className={classes.paper}>
              <form className={classes.form} noValidate autoComplete='off'>
                <div className={classes.txtfield}>
                  <TextField
                    id='email-field'
                    label='EMAIL'
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    id='password-field'
                    label='PASSWORD'
                    type='text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button
                  className={classes.button}
                  variant='contained'
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FormContainer;
