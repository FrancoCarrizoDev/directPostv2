import React from 'react';
import { Container, FormControl, FormHelperText, InputLabel, Input, Button, Grid, TextField, Select, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
        gap: '20px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
}));

export default function Formulario() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Grid container spacing={1} className={classes.root} >
            <Grid md={12} item>
                <FormControl  className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10} selected>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                
            </Grid>
            <Grid item>
                <FormControl noAutocomplete>
                    <InputLabel htmlFor="idPlan">IdPlan</InputLabel>
                    <Input id="idPlan" type="text" aria-describedby="idPlanHelper" />
                    <FormHelperText id="idPlanHelper">Ingresar id del Plan</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item >
                <FormControl>
                    <InputLabel htmlFor="cuotas">Cuotas</InputLabel>
                    <Input id="cuotas" type="text" aria-describedby="idCuotasHelper" />
                    <FormHelperText id="idCuotasHelper">Ingresar cuotas por Plan</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item >
                <FormControl>
                    <InputLabel htmlFor="plan">Plan</InputLabel>
                    <Input id="plan" type="text" aria-describedby="planHelper" />
                    <FormHelperText id="planHelper">Ingresar nombre del plan</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item >
                <FormControl>
                    <InputLabel htmlFor="coeficiente">Coeficiente</InputLabel>
                    <Input id="coeficiente" type="text" aria-describedby="coeficienteHelper" />
                    <FormHelperText id="coeficienteHelper">Ingresar coeficiente del plan</FormHelperText>
                </FormControl>
            </Grid>

            <Grid item md={12} >
                <Button variant="contained" color="primary" >
                    Enviar
                    </Button>
            </Grid>
        </Grid>


    );
}

/*
<div className="flex flex-col gap-10 w-1/4">
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Medio de pago</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                            size='small' className="text-sm">
                            <MenuItem value={10} >Visa Débito</MenuItem>
                            <MenuItem value={20}>Visa Crédito</MenuItem>
                            <MenuItem value={30}>Mastercard Débito</MenuItem>
                            <MenuItem value={40}>Mastercard Cŕedito</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="standard-basic" label="Id plan" size="small" />
                    <TextField id="standard-basic" label="Cuotas" size="small" />
                    <TextField id="standard-basic" label="Plan" size="small" />
                    <TextField id="standard-basic" label="Coeficiente" size="small" />
                </div>
                <div className="flex flex-col gap-10 w-1/4">
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Pasarela</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                            size='small' className="text-sm">
                            <MenuItem value={10} >Prisma</MenuItem>
                            <MenuItem value={20}>First Data</MenuItem>
                            <MenuItem value={30}>Mercado Pago</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="standard-basic" label="Id plan" size="small" />
                    <TextField id="standard-basic" label="Cuotas" size="small" />
                    <TextField id="standard-basic" label="Plan" size="small" />
                    <TextField id="standard-basic" label="Coeficiente" size="small" />
                </div>
*/