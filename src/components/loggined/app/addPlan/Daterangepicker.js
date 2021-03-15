import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      justifyContent: 'flex-start',
      gap:'10px',
  },
  sizeInput: {
    width: '38%'
  }
}));


export default function MaterialUIPickers() {
  const classes = useStyles();
  // The first commit of Material-UI
  const [selectedDateFrom, setSelectedDateFrom] = React.useState(new Date());

  const handleDateFromChange = (date) => {
    setSelectedDateFrom(date);
  };

  const [selectedDateTo, setSelectedDateTo] = React.useState(new Date());

  const handleDateChangeTo = (date) => {
    setSelectedDateTo(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.root}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-from"
          label="Fecha desde"
          format="dd/MM/yyyy"
          minDate={Date()}
          value={selectedDateFrom}
          onChange={handleDateFromChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          className={classes.sizeInput}
        />
          <KeyboardDatePicker
          margin="normal"
          id="date-picker-to"
          label="Fecha Hasta"
          format="dd/MM/yyyy"
          minDate={Date()}
          value={selectedDateTo}
          onChange={handleDateChangeTo}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          className={classes.sizeInput}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
