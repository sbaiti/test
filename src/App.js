import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { onIncrement, onDecrement } from './actions/incrementAction'
import { connect } from 'react-redux';
import CurrentCounter from './components/CurrentCounter';
import ButtonINc from './components/ButtonINc';
import './assets/sass/style.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 500,
    transform: 'translate(-50%, -50%)',
    display: 'inline-block'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App({ onIncrement, onDecrement }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <CurrentCounter />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <ButtonINc action="-" click={onDecrement} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <ButtonINc action="+" click={onIncrement} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default connect(null, { onIncrement, onDecrement })(App);
