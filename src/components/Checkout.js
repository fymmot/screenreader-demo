import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {NavigationButtons} from "./NavigationButtons"
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
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];

export const Checkout = (props) => {
  const { children } = props;
  const classes = useStyles();
  const history = useHistory();

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setCurrentStep(getStepIndex());
  }, [])

  const getStepIndex = () => {
    let myPath = history.location.pathname;
    myPath = myPath.replace("/step", "");
    return parseInt(myPath)-1;
  }

  const handleNext = () => {
    console.log(`/step${getStepIndex()+2}`);
    history.push(`/step${getStepIndex()+2}`)
  };

  const handleBack = () => {
    history.push(`/step${getStepIndex()-2}`)
  };

  return (

    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    step: state.step
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setStep: (step) => dispatch(actionTypes.setStep(step)),
  }
}


export default Checkout;
