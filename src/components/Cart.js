import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import {Delete} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

import {
  NavLink,
} from "react-router-dom";
import TextInput from "./shared/TextInput/TextInput";

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
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

export  const Cart = (props) => {
  const classes = useStyles();
  const [q1State, setQ1State] = useState("1");
  const [q2State, setQ2State] = useState("1");
  const [q3State, setQ3State] = useState("1");
  const [q4State, setQ4State] = useState("1");
  const [q5State, setQ5State] = useState("1");
  const [q6State, setQ6State] = useState("1");



  return (
    <React.Fragment>
      <Typography component="div" variant="h4" align="center">
        Shopping cart
      </Typography>
      <Typography variant="h6" gutterBottom>
        Your products
      </Typography>
      <List disablePadding>
        {products.map((product, index) => {

          const stateMap = () =>
            ({
              0: {
                setState: setQ1State,
                state: q1State
              },
              1: {
                setState: setQ2State,
                state: q2State
              },
              2: {
                setState: setQ3State,
                state: q3State
              },
              3: {
                setState: setQ4State,
                state: q4State
              },
              4: {
                setState: setQ5State,
                state: q5State
              },
              5: {
                setState: setQ6State,
                state: q6State
              },
            }[index]);

          return (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.price} />
            <TextInput label="Quantity" id={`q${index}`} value={stateMap().state} setValue={stateMap().setState} fullWidth={false} numeric floatingLabel type="number" />
            <IconButton aria-label="Trashcan"><Delete/></IconButton>
          </ListItem>
        )})}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
      </Grid>
      <div className={classes.buttons}>

        <Button
          variant="contained"
          size="large"
          color="primary"
          to="/step1"
          component={NavLink}
          className={classes.button}
        >
          Go to checkout
        </Button>
      </div>

    </React.Fragment>
  );
}

export default Cart;
