import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {
  Switch,
  Route,
  useHistory,
  NavLink,
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import * as actionTypes from '../store/actions';


const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export const NavigationButtons = (props) => {
  const { handleNext, handleBack, step, steps } = props;
  const classes = useStyles();

  return (
     <React.Fragment>
                  <div className={classes.buttons}>
                    {step !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {step === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
  );
}



export default NavigationButtons;
