import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Formulario from './Formulario'
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: '100%',
        margin: '0 auto'
    }
});

export default function OutlinedCard() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
                <Formulario/>
        </Paper>
    );
}