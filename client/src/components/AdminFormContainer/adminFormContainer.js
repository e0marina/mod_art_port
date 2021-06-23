import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    marginTop: '150px',
  },
  paper: {
    height: 500,
    width: 500,
  },
}));

const FormContainer = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container justify='center'>
          <Grid item className={classes.gridItem}>
            <Paper elevation={3} className={classes.paper} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FormContainer;
