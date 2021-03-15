import React from 'react';
import { Container, FormControl, FormHelperText, InputLabel, Input, Button, Grid, TextField, Select, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Daterangepicker from './Daterangepicker';



const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
        height: 'auto',
        width: '100%',
        flexFlow: 'wrap',
        paddingTop: '40px',
        paddingBottom: '40px',
    },
    sepInputs:{
        display: 'flex',
        justifyContent: 'start',
        flexDirection:'column',
        gap:'30px',
        height: '100%',
        paddingTop: '8px',
        flex: '1'
    },
    sepSelects:{
        display: 'flex',
        gap:'30px',
        justifyContent: 'start',
        flexDirection:'column',
        height: '100%',
        flex: '1'
    },
    center: {
        display: 'flex',
        flexDirection:'row',
        gap: '20px',
        width: '80%',
        justifyContent: 'center'
        
    },
    formControlInputs: {
        width: '80%'
    },
    formControlSelect: {
        width: '80%'
    },
    textField: {
        '& > *': {
            width: '25ch',
        },
    }


}));

export default function Formulario() {
    const classes = useStyles();

    const [valuePayGateway, setValuePayGateway] = React.useState('10');
    const [valuePayMethod, setValuePayMethod] = React.useState('10');
    const [valueClient, setValueClient] = React.useState('10');

    const handleChangePayGateway = (event) => {
        setValuePayGateway(event.target.value);
    };

    const handleChangePayMethod = (event) => {
        setValuePayMethod(event.target.value)
    }

    const handleChangeClient = (event) => {
        setValueClient(event.target.value);
    }

    return (
        <Grid container spacing={1} className={classes.root}>
            <Grid className={classes.sepInputs} >
                <Grid item >
                    <FormControl className={classes.formControlInputs}>
                        <TextField id="idPlan" label="Id Plan" variant="outlined" aria-describedby="idPlanHelper" size='small'/>
                        <FormHelperText id="idPlanHelper">Ingresar id del Plan</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item >
                    <FormControl className={classes.formControlInputs}>
                        <TextField id="cuotas" label="Cuotas" variant="outlined" aria-describedby="idCuotasHelper" size='small'/>
                        <FormHelperText id="idCuotasHelper">Ingresar cuotas por Plan</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item >
                    <FormControl className={classes.formControlInputs}>
                        <TextField id="plan" label="Plan" variant="outlined" aria-describedby="planHelper" size='small'/>
                        <FormHelperText id="planHelper">Ingresar nombre del plan</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item >
                    <FormControl className={classes.formControlInputs}>
                        <TextField id="coeficiente" label="Coeficiente" variant="outlined" aria-describedby="coeficienteHelper" size='small'/>
                        <FormHelperText id="coeficienteHelper">Ingresar coeficiente del plan</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item className={classes.sepSelects}>
                <FormControl  className={classes.formControlSelect}>
                    <InputLabel shrink id="labelPayGateway">Pasarela</InputLabel>
                    <Select
                        labelId="labelPayGateway"
                        id="selectPayGateway"
                        value={valuePayGateway}
                        onChange={handleChangePayGateway}
                        displayEmpty
                    >
                        <MenuItem value={10}>Prisma</MenuItem>
                        <MenuItem value={20}>First Data</MenuItem>
                        <MenuItem value={30}>MercadoPago</MenuItem>
                    </Select>
                </FormControl>
                <FormControl  className={classes.formControlSelect}>
                    <InputLabel shrink id="labelPayMethod">Medio de pago</InputLabel>
                    <Select
                        labelId="labelPayMethod"
                        id="selectPayMethod"
                        value={valuePayMethod}
                        onChange={handleChangePayMethod}
                        displayEmpty
                    >
                        <MenuItem value={10}>Cordobesa MasterCard</MenuItem>
                        <MenuItem value={20}>Visa Crédito</MenuItem>
                        <MenuItem value={30}>Visa Débito</MenuItem>
                        <MenuItem value={40}>Naranja</MenuItem>
                        <MenuItem value={50}>Maestro</MenuItem>
                        <MenuItem value={60}>Cabal</MenuItem>
                    </Select>
                </FormControl>
                <FormControl  className={classes.formControlSelect}>
                    <InputLabel shrink id="labelClient">Clientes</InputLabel>
                    <Select
                        labelId="labelClient"
                        id="selectClient"
                        value={valueClient}
                        onChange={handleChangeClient}
                        displayEmpty
                    >
                        <MenuItem value={10}>Viajes TDH</MenuItem>
                        <MenuItem value={20}>GIT</MenuItem>
                        <MenuItem value={30}>Conoce CBA</MenuItem>
                    </Select>
                </FormControl>
                <Grid item>
                    <Daterangepicker/>
                </Grid>
                <Grid item className={classes.center}>
                    <Button variant="contained" color="primary" >
                        Cargar
                    </Button>
                    <Button variant="contained" color="secondary" >
                        Cancelar
                    </Button>
                </Grid>
            </Grid>

        </Grid>


    );
}

