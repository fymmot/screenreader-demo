import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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
};