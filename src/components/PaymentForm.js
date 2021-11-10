import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextInput from "./shared/TextInput/TextInput";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import AddressForm from "./AddressForm";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

export const PaymentForm = (props) => {
  const {steps} = props;

  const useStyles = makeStyles((theme) => ({
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
  const classes = useStyles();

  const [nameState, setNameState] = useState("");
  const [cardState, setCardState] = useState("");
  const [expiryState, setExpiryState] = useState("");
  const [cvvState, setCvvState] = useState("");

  return (
    <React.Fragment>
      <Typography component="div" variant="h4" align="center">
        Payment details
      </Typography>
      <Stepper
        activeStep={1}
        className={classes.stepper}
        // role="list"
        //aria-label="Your progress"
      >
        {steps.map((label, index) => (
          <Step
            key={label}
            // role="listitem"
            // aria-current={index === step ? "step" : undefined}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextInput
            label="Name on card"
            id="name"
            value={nameState}
            setValue={setNameState}
            autoComplete="cc-name"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput
            label="Card number"
            id="card-number"
            value={cardState}
            setValue={setCardState}
            autoComplete="cc-number"
            required
            validationPattern="^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13})$"
            errorText="No like your REAL card number dude"
            numeric
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput
            label="Expiry date"
            id="expiry-date"
            value={expiryState}
            setValue={setExpiryState}
            autoComplete="cc-exp"
            required
            numeric
            errorText="That's not a real date"
            helperText="Example: 11/21"
            validationPattern="^((0[1-9])|(1[0-2]))[\/\.\-]*([2][1-9])$"/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextInput
            label="Securiy code (CVV)"
            id="cvv"
            value={cvvState}
            setValue={setCvvState}
            helperText="Three digits on the backside of the card"
            autoComplete="cc-csc"
            required
            errorText="The code should be three digits"
            validationPattern="^[0-9]{3}$"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" inputProps={{ "aria-label": "Remember" }} />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      <div className={classes.buttons}>
        <Button to="/step1" component={NavLink} className={classes.button}>
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          component={NavLink}
          to="/step3"
          className={classes.button}
        >
          Next
        </Button>
      </div>
    </React.Fragment>
  );
};
export default PaymentForm;

