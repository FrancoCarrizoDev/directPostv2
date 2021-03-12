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
      justifyContent: 'center',
      gap:'10px',
  },
  sizeInput: {
    width: '40%'
  }
}));


export default function MaterialUIPickers() {
  const classes = useStyles();
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.root}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Fecha desde"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          size='small'
          className={classes.sizeInput}
        />
          <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Fecha Hasta"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          size='small'
          className={classes.sizeInput}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
