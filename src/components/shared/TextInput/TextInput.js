import React, {useState} from "react";
import PropTypes from "prop-types";
import {makeStyles, Typography, TextField, InputAdornment } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import Done from "@material-ui/icons/Done"


const TextInput = (props) => {
  const { label, id, required, autoComplete, helperText, errorText, value, setValue, validationPattern, readOnly, numeric, fullWidth, floatingLabel, type } = props;

  const [errorState, setErrorState] = useState(false);
  const [successState, setSuccessState] = useState(false);


  const useStyles = makeStyles((theme) => ({
    label: {
      fontWeight: 500,
      marginBottom: "0.2rem",
      color: errorState && theme.palette.error.main
    },
    error: {
      marginTop: "-0.2rem",
      marginBottom: "0.4rem",
      color: theme.palette.error.main,
    }
  }));
  const classes = useStyles();

  const onChange = (e) => {
    setValue(e.target.value);
    if (value && value.length>0)
      setErrorState(false);
  };

  const onBlur = () => {
    if (value.length === 0) {
      setErrorState(true);
      setSuccessState(false);
      return;
    }
    if (validationPattern && !value.match(validationPattern)){
      setErrorState(true);
      setSuccessState(false);
      return;
    }
    if (validationPattern && value.match(validationPattern)) {
      setErrorState(false);
      setSuccessState(true);
    }
  }

  const getIcon = () => {
    if (errorState) {
      return (<InputAdornment position="end">
        <ErrorIcon color="error" />
      </InputAdornment>)
    }
    if (successState) {
      return (<InputAdornment position="end">
        <Done color="primary" />
      </InputAdornment>)
    }
  }



  return <>
    {!floatingLabel && <Typography variant="body1" className={classes.label} >
      <label
        // htmlFor={id}
      >
        {label}
      </label>
    </Typography> }

    <TextField
      label={floatingLabel && label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={errorState}
      variant="outlined"
      inputProps={{
        "aria-required": required,
        inputMode: numeric ? "numeric" : undefined,
        pattern: numeric ? "[0-9]*" : undefined,
        "aria-describedby": undefined
      }}
      id={id}
      name={id}
      fullWidth={fullWidth}
      autoComplete={autoComplete}
      helperText={errorState && errorText ? errorText : helperText}
      InputProps={{
        endAdornment: getIcon(),
        readOnly: readOnly
      }}
      type={type}
    />
  </>
};

TextInput.defaultProps = {
  autoComplete: "on",
  helperText: "",
  error: false,
  errorText: "",
  readOnly: false,
  numeric: false,
  fullWidth: true,
  floatingLabel: false,
  type: "text"
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  validationPattern: PropTypes.string,
  readOnly: PropTypes.bool,
  numeric: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: "text" | "number",
};

export default TextInput;