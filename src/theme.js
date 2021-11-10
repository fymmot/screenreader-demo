import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: "rgba(0,0,0,0.42)",
        "input[readonly] + &": {
          borderColor: "rgba(0,0,0,0.21)"
        }
      },
    },
    MuiFormHelperText: {
      contained: {
        fontSize: 14,
        marginLeft: undefined
      }
    }
  },
  props: {
    MuiStepConnector: {
      "aria-hidden": true
    }
  }
});

export default theme;
