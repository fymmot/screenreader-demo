import React from 'react';
import { ThemeProvider } from "@material-ui/core";
import Checkout from "./components/Checkout";
import theme from "./theme";
import { Provider } from "react-redux";
import { createStore } from 'redux'
import items from "./store/reducers";
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AddressForm from "./components/AddressForm";
import PaymentForm from "./components/PaymentForm";
import Review from "./components/Review";
import Cart from "./components/Cart";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

export default function App() {
  const store = createStore(items, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
  const classes = useStyles();
  const steps = ['Shipping address', 'Payment details', 'Review your order'];

  return (
    <Provider store={store}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Router>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
        <Switch>
          <Route exact path="/cart">
            <Cart steps={steps}/>
          </Route>
          <Route path="/step1">
            <AddressForm steps={steps}/>
          </Route>
          <Route path="/step2">
            <PaymentForm steps={steps}/>
          </Route>
          <Route path="/step3">
            <Review steps={steps}/>
          </Route>
        </Switch>
        </Paper>
        </main>
      </Router>
    </ThemeProvider>
    </Provider>
  );
}
