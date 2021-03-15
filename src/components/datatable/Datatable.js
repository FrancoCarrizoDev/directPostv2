import React from 'react';
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import visaIcon from '../../assets/img/visa.svg';
import masterIcon from '../../assets/img/mastercard.svg';
import maestroIcon from '../../assets/img/maestro.svg';
import naranjaIcon from '../../assets/img/naranja.svg';
import prismaIcon from '../../assets/img/prisma.png';
import CheckIcon from '@material-ui/icons/Check';

import './Datatable.css'

const jsonEjemplo = [{ "Planes": [{ "ID": 40, "idMedioPago": 4, "coeficiente": 1.0200, "instatments": "1", "cuotas": 1, "nombre": "1 cuota", "fechaAlta": "2020-11-12T00:00:00", "fechaDesde": "2020-11-12T00:00:00", "activo": 1 }, { "ID": 41, "idMedioPago": 2, "coeficiente": 1.1000, "instatments": "11", "cuotas": 1, "nombre": "Plan Z", "fechaAlta": "2020-11-12T00:00:00", "fechaDesde": "2020-11-11T00:00:00", "activo": 1 }, { "ID": 42, "idMedioPago": 1, "coeficiente": 1.0300, "instatments": "1", "cuotas": 1, "nombre": "1 cuota", "fechaAlta": "2020-11-12T00:00:00", "fechaDesde": "2020-11-12T00:00:00", "activo": 1 }, { "ID": 43, "idMedioPago": 1, "coeficiente": 1.2000, "instatments": "3", "cuotas": 3, "nombre": "3 cuotas", "fechaAlta": "2020-11-12T00:00:00", "fechaDesde": "2020-11-12T00:00:00", "activo": 1 }, { "ID": 44, "idMedioPago": 1, "coeficiente": 1.1200, "instatments": "16", "cuotas": 6, "nombre": "Ahora 6", "fechaAlta": "2020-11-12T00:00:00", "fechaDesde": "2020-11-12T00:00:00", "activo": 1 }, { "ID": 45, "idMedioPago": 3, "coeficiente": 1.0300, "instatments": "1", "cuotas": 1, "nombre": "1 cuota", "fechaAlta": "2020-11-12T00:00:00", "fechaDesde": "2020-11-12T00:00:00", "activo": 1 }, { "ID": 46, "idMedioPago": 3, "coeficiente": 1.2000, "instatments": "3", "cuotas": 3, "nombre": "3 cuotas", "fechaAlta": "2020-11-12T00:00:00", "fechaDesde": "2020-11-12T00:00:00", "activo": 1 }, { "ID": 47, "idMedioPago": 3, "coeficiente": 1.1200, "instatments": "16", "cuotas": 6, "nombre": "Ahora 6", "fechaAlta": "2020-11-12T00:00:00", "fechaDesde": "2020-11-12T00:00:00", "activo": 1 }, { "ID": 48, "idMedioPago": 3, "coeficiente": 1.2200, "instatments": "7", "cuotas": 12, "nombre": "Ahora 12", "fechaAlta": "2020-11-12T00:00:00", "fechaDesde": "2020-11-12T00:00:00", "activo": 1 }, { "ID": 49, "idMedioPago": 3, "coeficiente": 1.2900, "instatments": "8", "cuotas": 18, "nombre": "Ahora 18", "fechaAlta": "2020-11-12T00:00:00", "fechaDesde": "2020-11-12T00:00:00", "activo": 1 }, { "ID": 50, "idMedioPago": 5, "coeficiente": 1.0200, "instatments": "1", "cuotas": 1, "nombre": "1 cuota", "fechaAlta": "2020-11-12T00:00:00", "fechaDesde": "2020-11-12T00:00:00", "activo": 1 }, { "ID": 51, "idMedioPago": 6, "coeficiente": 1.0200, "instatments": "1", "cuotas": 1, "nombre": "1 cuota", "fechaAlta": "2020-11-12T00:00:00", "fechaDesde": "2020-11-12T00:00:00", "activo": 1 }, { "ID": 63, "idMedioPago": 1, "coeficiente": 1.2200, "instatments": "7", "cuotas": 12, "nombre": "AHORA 12", "fechaAlta": "2021-03-01T00:00:00", "fechaDesde": "2021-03-01T00:00:00", "fechaHasta": "2021-03-31T00:00:00", "activo": 1 }, { "ID": 64, "idMedioPago": 1, "coeficiente": 1.2900, "instatments": "8", "cuotas": 18, "nombre": "AHORA 18", "fechaAlta": "2021-03-01T00:00:00", "fechaDesde": "2021-03-01T00:00:00", "fechaHasta": "2021-03-31T00:00:00", "activo": 1 }, { "ID": 65, "idMedioPago": 2, "coeficiente": 1.1600, "instatments": "6", "cuotas": 6, "nombre": "6 cuotas", "fechaAlta": "2021-03-03T00:00:00", "fechaDesde": "2021-03-01T00:00:00", "fechaHasta": "2021-03-31T00:00:00", "activo": 1 }], "MediosPago": [{ "Id": 1, "idPaymethod": "1", "nombre": "Visa Credito", "activo": 1, "idPasarela": 1, "TipoMedioPago": "Credito", "logo": "https:\/\/repostatic.blob.core.windows.net\/static\/MOTOR\/img\/tc\/logo_visa.png" }, { "Id": 2, "idPaymethod": "24", "nombre": "Naranja", "activo": 1, "idPasarela": 1, "TipoMedioPago": "Credito", "logo": "https:\/\/repostatic.blob.core.windows.net\/static\/MOTOR\/img\/tc\/logo_naranja.png" }, { "Id": 3, "idPaymethod": "104", "nombre": "MasterCard Credito", "activo": 1, "idPasarela": 1, "TipoMedioPago": "Credito", "logo": "https:\/\/repostatic.blob.core.windows.net\/static\/MOTOR\/img\/tc\/logo_mastercard.png" }, { "Id": 4, "idPaymethod": "31", "nombre": "Visa Debito", "activo": 1, "idPasarela": 1, "TipoMedioPago": "Debito", "logo": "https:\/\/repostatic.blob.core.windows.net\/static\/MOTOR\/img\/tc\/logo_visa_debito.png" }, { "Id": 5, "idPaymethod": "105", "nombre": "MasterCard Debito", "activo": 1, "idPasarela": 1, "TipoMedioPago": "Debito", "logo": "https:\/\/repostatic.blob.core.windows.net\/static\/MOTOR\/img\/tc\/logo_mastercard_debito.png" }, { "Id": 6, "idPaymethod": "106", "nombre": "Maestro", "activo": 1, "idPasarela": 1, "TipoMedioPago": "Debito", "logo": "https:\/\/repostatic.blob.core.windows.net\/static\/MOTOR\/img\/tc\/maestro.png" }, { "Id": 7, "idPaymethod": "65", "nombre": "American Express", "activo": 1, "idPasarela": 1, "TipoMedioPago": "Credito", "logo": "https:\/\/repostatic.blob.core.windows.net\/static\/MOTOR\/img\/tc\/American-Express-Logo.png" }, { "Id": 8, "idPaymethod": "63", "nombre": "Cabal", "activo": 1, "idPasarela": 1, "TipoMedioPago": "Credito", "logo": "https:\/\/repostatic.blob.core.windows.net\/static\/MOTOR\/img\/tc\/cabal.png" }, { "Id": 11, "idPaymethod": "1", "nombre": "Cordobesa Visa", "activo": 1, "idPasarela": 1, "TipoMedioPago": "Credito", "logo": "https:\/\/repostatic.blob.core.windows.net\/static\/MOTOR\/img\/tc\/logo_bancor.png" }, { "Id": 12, "idPaymethod": "104", "nombre": "Cordobesa MasterCard", "activo": 1, "idPasarela": 1, "TipoMedioPago": "Credito", "logo": "https:\/\/repostatic.blob.core.windows.net\/static\/MOTOR\/img\/tc\/logo_bancor.png" }] }]
const planes = jsonEjemplo[0].Planes;
const mediosPago = jsonEjemplo[0].MediosPago;

var rows = []

function encontrarMedioPago(mediosPago, IdPlan) {
  for (var i = 0; i < mediosPago.length; i++) {
    if (mediosPago[i].Id == IdPlan) { return mediosPago[i] }
  }
}

function cargarFormasDePago(arrayFormasDePago, planes, mediosPago) {
  planes.map((plan) => {
    const medioDePagoDelPlan = encontrarMedioPago(mediosPago, plan.idMedioPago)
    var objToPush = createDataTable(medioDePagoDelPlan.activo, medioDePagoDelPlan.idPasarela, medioDePagoDelPlan.nombre, medioDePagoDelPlan.TipoMedioPago, plan.cuotas, plan.fechaAlta, plan.fechaDesde,(plan.fechaHasta != null ? plan.fechaHasta : 'NO DEFINIDO'), plan.coeficiente)
    rows.push(objToPush)
  })
}


function createDataTable(estado, pasarela, medioPago, tipoPago, cuotas, fechaAlta, fechaDesde, fechaHasta, coeficiente) {

  if(estado == 1){
    estado = <CheckIcon style={{color: 'green', fontSize: 2 + 'rem'}}/>
  }

  if(pasarela == 1){
    pasarela = <img src={prismaIcon} width="40px" height="40px" className="mx-auto"></img>;
  }

  
  switch(medioPago){
    case('Visa Credito'):
      medioPago = <img src={visaIcon} width="50px" height="50px" className="mx-auto"></img>;
      break;
    case('Visa Debito'):
      medioPago = <img src={visaIcon} width="50px" height="50px" className="mx-auto"></img>;
      break;
    case('MasterCard Credito'):
      medioPago = <img src={masterIcon} width="50px" height="50px" className="mx-auto"></img>;
      break;
    case('MasterCard Debito'):
      medioPago = <img src={masterIcon} width="50px" height="50px" className="mx-auto"></img>;
      break;
    case('Maestro'):
      medioPago = <img src={maestroIcon} width="50px" height="50px" className="mx-auto"></img>;
      break;
    case('Naranja'):
      medioPago = <img src={naranjaIcon} width="30px" height="30px" className="mx-auto"></img>;
      break;
  }

  fechaAlta = moment(fechaAlta).format("DD/MM/yyyy")
  const vigencia = moment(fechaDesde).format("DD/MM/yyyy") + ' - ' + (fechaHasta != 'NO DEFINIDO' ? moment(fechaHasta).format("DD/MM/yyyy") : 'NO DEFINIDO');
  const actions = <div><AddIcon className="mr-3" style={{cursor:'pointer'}}/><EditIcon className="mr-3" style={{cursor:'pointer'}}/><DeleteIcon style={{cursor:'pointer'}}/></div>
  return { estado, pasarela, medioPago, tipoPago, cuotas, fechaAlta, vigencia, coeficiente, actions };
}

cargarFormasDePago(rows, planes, mediosPago);

const columns = [
  {
    id: 'estado',
    label: 'Estado',
    align: 'center',
    minWidth: 50,
    padding: '20px'
  },
  {
    id: 'pasarela',
    label: 'Pasarela',
    align: 'center',
    minWidth: 50,
    padding: '20px'
    
  },
  {
    id: 'medioPago',
    label: 'Medio\u00a0De\u00a0Pago',
    minWidth: 50,
    align: 'center',
    padding: '20px'
  },
  {
    id: 'tipoPago',
    label: 'Tipo',
    minWidth: 50,
    align: 'center',
    padding: '20px'
  },
  {
    id: 'cuotas',
    label: 'Cuotas',
    minWidth: 50,
    align: 'center',
    padding: '20px'
  },
  {
    id: 'fechaAlta',
    label: 'Fecha\u00a0Alta',
    minWidth: 50,
    align: 'center',
    padding: '20px'
  },
  {
    id: 'vigencia',
    label: 'Vigencia (Desde - Hasta)',
    minWidth: 50,
    align: 'center',
    padding: '20px'
  },
  {
    id: 'coeficiente',
    label: 'Coeficiente',
    minWidth: 50,
    align: 'center',
    padding: '20px'
  },

  {
    id: 'actions',
    label: 'Acciones',
    minWidth: 100,
    align: 'center',
    padding: '20px'
  },
];


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 600,
  },
  bgHeader: {
    backgroundColor: '#3f51b5',
    color: 'white',
  },
  fontSizeContain:{
    fontSize: '14px',
  }
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root} id="paperMain">
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell className={classes.bgHeader}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{padding: 0, fontFamily:'Open Sans'}}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
